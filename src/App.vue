<template>
  <div id="app">
    <input type="text" class="bibTxt" v-model="bibNo" placeholder=" หมายเลข bib" />
    <div v-if="runnerStat">
      <div class="home" :style="{'min-height':(containerWidth)+'px'}" @mouseout="drawInfo">
        <zoomer
          v-if="isShow"
          :imgW="imgW"
          :imgH="imgH"
          :disabled="disabledZoom"
          @size="newSize"
          style="border: solid 1px silver;box-sizing:border-box;"
          :style="containerStyle"
        >
          <img :src="imgSrc" style />
        </zoomer>
        <canvas
          ref="cv"
          width="1000"
          height="1000"
          style="pointer-events:none;"
          :style="containerStyle"
        ></canvas>
      </div>
      <div class="bg4sel">
        <div :style="{width:`${(thaiRunImg.length+3)*100}px`}">
          <div
            class="bg"
            @click="setDefaultImg"
            :style="{'background-image':`url('${defaultImgSrc}')`}"
          ></div>
          <div
            class="bg"
            @click="browse"
            :style="{'background-image':`url('${require('./assets/uploadIcon.png')}')`}"
          ></div>
          <div class="bg loading" v-if="isLoadingThaiRunImg">
            <hr />
          </div>
          <div
            class="bg"
            @click="setImgThaiRun(v.view[thaiRunImgType].url,v.view[thaiRunImgType].size.width,v.view[thaiRunImgType].size.height,index+2)"
            v-for="(v,index) in thaiRunImg"
            :key="index"
            :style="{'background-image':`url('${v.view.thumbnail.url}')`}"
          ></div>
        </div>
      </div>
      <button :class="{'certBtn':true, 'busy':isGenCert}" @click="drawCert">
        <hr />download cert
      </button>
    </div>
    <img ref="img" :src="imgSrc" style="position:absolute;width:1px;height:1px;top:-10px;" />
    <input type="file" accept="image/*" @change="doUpload" ref="inpFile" style="display:none;" />
    <div style="position:absolute;width:1px;height:1px;top:-1000px;overflow:hidden;">
      <em style="font-family:'i_slim';">a</em>
      <em style="font-family:'i_bold';">a</em>
      <img ref="img4draw" :src="img4DrawSrc" />
      <img ref="mask" src="./assets/cert2.png" />
    </div>
  </div>
</template>
<script>
import imageMixin from "./mixins/imageMixin.vue";
import Zoomer from "./components/Zoomer.vue";
export default {
  name: "App",
  components: { Zoomer },
  mixins: [imageMixin],
  data() {
    return {
      bibNo: "",
      disabledZoom: true,
      defaultImgSrc: require("./assets/cert1.png"),
      defaultImgSrc2: require("./assets/cert2.png"),
      imgSrc: require("./assets/cert1.png"),
      img4DrawSrc: require("./assets/cert1.png"),
      imgW: 1000,
      imgH: 1000,
      imgIdx: 0,
      x: 0,
      y: 0,
      scale: 1,
      cancelSource: null,
      runnerStat: null,
      isShow: true,
      isBusy: false,
      isGenCert: false,
      isThaiRunImg: false,
      isLoadingThaiRunImg: false,
      thaiRunImgType: "preview",
      thaiRunImg: [],
      downloadedImg: null,
      wWidth: 1,
      wHeight: 1,
      ox: 274,
      oy: 140,
      name: "ชัยชนะ นิลวัรชรารัง",
      minSize: 450
    };
  },
  methods: {
    browse() {
      this.$refs.inpFile.click();
    },
    doUpload() {
      var _this = this;
      if (this.isBusy) return;
      if (!this.$refs.inpFile.files[0]) return;
      var inp = this.$refs.inpFile.files[0];
      var ext = inp.name
        .split(".")
        .pop()
        .toLowerCase();
      if (!inp.name.match(/(.png|.jpeg|.jpg)$/i)) return;
      this.isBusy = true;
      var reader = new FileReader();
      reader.onload = async function(file) {
        var dat = file.target.result;
        var orientation = _this.mxnOrientationFromBinaryImage(dat);
        var img = await _this.mxnImgElFromBinaryImage(dat);
        var cv = _this.mxnImgResizeNoCrop(img, 1000, 1000);
        var cv2 = _this.mxnRotateImg(cv, orientation);
        _this.$refs.inpFile.value = "";
        _this.isBusy = false;
        if (cv2.width < _this.minSize || cv2.width < _this.minSize) {
          return alert(`รูปเล็กเกิ๊น ${_this.minSize} x ${_this.minSize}`);
        }
        _this.imgW = cv2.width;
        _this.imgH = cv2.height;
        _this.imgIdx = 1;
        _this.disabledZoom = false;
        _this.imgSrc = cv2.toDataURL("image/png");
        _this.img4DrawSrc = cv2.toDataURL("image/png");
        _this.refreshZoomer();
      };
      this.$nextTick(_ => {
        reader.readAsBinaryString(inp);
      });
    },
    async drawCert() {
      if (this.isGenCert) return;
      this.isGenCert = true;
      this.drawInfo();
      var cv = document.createElement("canvas");
      cv.width = 1000;
      cv.height = 1000;
      var w = this.containerWidth;
      var s = 1000 / w;
      var ctx = cv.getContext("2d");
      ctx.resetTransform();
      ctx.clearRect(0, 0, 1000, 1000);
      var d = ((1 - this.scale) * w) / 2;
      ctx.translate((this.x + d) * s, (this.y + d) * s);
      ctx.scale(this.scale * s, this.scale * s);
      while (!this.img4DrawSrc)
        await new Promise(resolveWait => window.setTimeout(resolveWait, 10));
      ctx.drawImage(this.$refs.img4draw, 0, 0);
      var ctx2 = this.$refs.cv;
      ctx.resetTransform();
      ctx.drawImage(ctx2, 0, 0);
      ctx.save();
      var imgUrl = await this.$http
        .post(`/api/?todo=imgUpload`, { d: cv.toDataURL("image/png") })
        .then(r => {
          return r.data.fName;
        })
        .catch(e => {
          alert(e.response.data || "เกิดข้อผิดพลาดขึ้น กรุณาลองอีกครั้ง");
        })
        .finally(_ => {});
      console.log(imgUrl);
      this.isGenCert = false;
      try {
        window.liff
          .sendMessages([
            {
              type: "image",
              originalContentUrl: imgUrl,
              previewImageUrl: imgUrl
            }
          ])
          .then(() => {
            window.liff.closeWindow();
          })
          .catch(err => {
            alert("เกิดข้อผิดพลาดขึ้น กรุณาลองอีกครั้ง");
          });
      } catch (e) {}
    },
    async drawInfo() {
      while (!this.$refs.cv)
        await new Promise(resolveWait => window.setTimeout(resolveWait, 10));
      var ctx = this.$refs.cv.getContext("2d");
      ctx.clearRect(0, 0, this.$refs.cv.width, this.$refs.cv.height);
      if (this.imgIdx) {
        ctx.drawImage(this.$refs.mask, 0, 0);
        ctx.font = "190px i_bold";
        ctx.fillStyle = "#dd98b3";
        ctx.fillText(`01:23:56`, 297, 834);
        ctx.font = "60px txt";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`01:23:56`, 557, 902);
      } else {
        ctx.font = "190px i_bold";
        ctx.fillStyle = "#dd98b3";
        ctx.fillText(`01:27:35`, 385, 585);
        var size = 100;
        ctx.font = `${size}px i_slim`;
        ctx.fillStyle = "#7a7a7a";
        while (ctx.measureText(this.name).width > 680)
          ctx.font = `${--size}px i_slim`;
        console.log(ctx.measureText(this.name).width);
        ctx.fillText(this.name, 270, 215);
        ctx.font = "60px txt";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`E35-708`, 560, 288);
        ctx.font = "60px txt";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`01:27:35`, 642, 656);
      }
    },
    setDefaultImg() {
      if (this.imgIdx == 0) return;
      this.imgIdx = 0;
      if (this.imgSrc == this.defaultImgSrc) return;
      this.imgSrc = require("./assets/cert1.png");
      this.img4DrawSrc = require("./assets/cert1.png");
      this.imgW = 1000;
      this.imgH = 1000;
      this.disabledZoom = true;
      this.isThaiRunImg = false;
      this.refreshZoomer();
    },
    setImgThaiRun(url, w, h, idx) {
      if (this.imgIdx == idx) return;
      this.imgIdx = idx;
      this.imgSrc = url;
      this.img4DrawSrc = null;
      this.imgW = w;
      this.imgH = h;
      this.disabledZoom = false;
      this.isThaiRunImg = true;
      this.refreshZoomer();
      this.$http.post(`/api/?todo=thaiRunImgProxy`, { url }).then(r => {
        this.img4DrawSrc = "data:image/jpeg;base64," + r.data;
      });
    },
    refreshZoomer() {
      this.isShow = false;
      this.$nextTick(_ => {
        this.isShow = true;
        this.drawInfo();
      });
    },
    newSize(e) {
      (this.x = e.x), (this.y = e.y), (this.scale = e.scale);
    },
    fetchRunnerStat() {
      this.runnerStat = null;
      this.setDefaultImg();
      this.$http
        .get(`/api/?todo=runnerStat&id=${this.bibNo}`)
        .then(r => {
          if (r.data?.runner) {
            this.runnerStat = r.data?.runner;
            this.fetchThaiRunImg();
            this.drawInfo();
          }
        })
        .catch(e => {});
    },
    fetchThaiRunImg() {
      this.thaiRunImg = [];
      var bibNo = this.bibNo;
      try {
        this.cancelSource.cancel();
      } catch (e) {}
      this.cancelSource = this.$http.CancelToken.source();
      this.isLoadingThaiRunImg = true;
      this.$http
        .get(`/api/?todo=thaiRunImg&id=${this.bibNo}`, {
          cancelToken: this.cancelSource.token
        })
        .then(r => {
          this.isLoadingThaiRunImg = false;
          if (r.data.data?.searchPhotos?.items)
            this.thaiRunImg = r.data.data?.searchPhotos?.items;
        })
        .catch(e => {});
    },
    handleResize() {
      this.wWidth = window.innerWidth;
      this.wHeight = window.innerHeight;
      this.refreshZoomer();
    }
  },
  computed: {
    containerWidth() {
      var v = this.wWidth - 16;
      return v > this.minSize ? this.minSize : v;
    },
    containerStyle() {
      return {
        width: `${this.containerWidth}px`,
        height: `${this.containerWidth}px`
      };
    }
  },
  watch: {
    name() {
      this.drawInfo();
    },
    ox() {
      this.drawInfo();
    },
    oy() {
      this.drawInfo();
    },
    bibNo() {
      this.fetchRunnerStat();
    }
  },
  async mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    while (!window.liff)
      await new Promise(resolveWait => window.setTimeout(resolveWait, 10));
    window.liff.init({
      liffId: process.env.VUE_APP_LIFF_ID
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>
<style lang="scss">
@font-face {
  font-family: "i_slim";
  src: url("./assets/i_slim.ttf");
}
@font-face {
  font-family: "i_bold";
  src: url("./assets/i_bold.ttf");
}
@font-face {
  font-family: "txt";
  src: url("./assets/txt.ttf");
}
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
.bibTxt {
  border-radius: 5px;
  border: 1px solid gray;
  width: calc(100vw - 16px);
  margin: 8px;
  height: 30px;
  font-size: 16px;
  color: #79564e;
}
.certBtn {
  &.busy {
    hr {
      display: block;
      float: left;
      width: 15px;
      height: 15px;
      border: 5px solid cyan;
      border-radius: 500px;
      border-top-color: transparent;
      margin: 5px 10px 5px 0px;
      animation: spin 1s infinite;
    }
  }
  hr {
    display: none;
  }
  border-radius: 5px;
  display: block;
  font-size: 22px;
  background-color: #de8570;
  color: #fff;
  padding: 5px 10px;
  line-height: 35px;
  border: none;
  margin: 20px auto;
  outline: none;
  cursor: pointer;
}
.home {
  position: relative;
  margin-left: 8px;
  max-width: 100vw;
  & > div,
  & > canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
}
.bg4sel {
  margin: 8px;
  display: flex;
  width: calc(100vw - 16px);
  overflow-x: scroll;
  & > div {
    display: flex;
  }
  .bg {
    display: flex;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    background-size: cover;
    border-radius: 5px;
    margin:2px;
    &.loading {
      overflow: hidden;
      hr {
        width: 100px;
        border: 5px solid cyan;
        border-radius: 500px;
        border-top-color: transparent;
        margin: 10px;
        animation: spin 1s infinite;
      }
    }
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
