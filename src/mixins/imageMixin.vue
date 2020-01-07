<script>
var EXIF = require("exif-js");
export default {
  name: "imageMixin",
  methods: {
    // input : img or canvas, exif's orientation
    // return : canvas
    mxnRotateImg(src, orientation) {
      var cv,
        ctx,
        w = src.width,
        h = src.height;
      cv = document.createElement("canvas");
      cv.width = w;
      cv.height = h;
      if (orientation > 4) {
        cv.width = h;
        cv.height = w;
      }
      var ctx = cv.getContext("2d");
      if (orientation) {
        switch (orientation) {
          case 2:
            ctx.translate(h, 0);
            ctx.scale(-1, 1);
            break;
          case 3:
            ctx.translate(w, h);
            ctx.rotate(Math.PI);
            break;
          case 4:
            ctx.translate(0, h);
            ctx.scale(1, -1);
            break;
          case 5:
            ctx.rotate(0.5 * Math.PI);
            ctx.scale(1, -1);
            break;
          case 6:
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(0, -h);
            break;
          case 7:
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(w, -h);
            ctx.scale(-1, 1);
            break;
          case 8:
            ctx.rotate(-0.5 * Math.PI);
            ctx.translate(-w, 0);
            break;
        }
      }
      ctx.drawImage(src, 0, 0, w, h, 0, 0, w, h);
      cv.to
      return cv;
    },
    // input : img or canvas, preferred width, preferred height
    // return : canvas
    mxnImgResizeAndCrop(src, w, h) {
      var cv,
        ctx,
        img,
        oH,
        oW,
        sw = src.width,
        sh = src.height;
      cv = document.createElement("canvas");
      cv.width = w;
      cv.height = h;
      ctx = cv.getContext("2d");
      if (sw / sh >= w / h) {
        // hit on width
        oH = sh;
        oW = Math.floor((sh * w) / h);
      } else {
        // hit on height
        oW = sw;
        oH = Math.floor((sw * h) / w);
      }
      // console.log(oW, oH);
      ctx.drawImage(
        src,
        Math.floor((sw - oW) / 2),
        Math.floor((sh - oH) / 2),
        oW,
        oH,
        0,
        0,
        w,
        h
      );
      return cv;
    },
    // input : img or canvas, preferred width, preferred height
    // return : canvas
    mxnImgResizeNoCrop(src, w, h) {
      var cv,
        ctx,
        img,
        r = 1,
        oH,
        oW,
        sw = src.width,
        sh = src.height;
      cv = document.createElement("canvas");
      if (sw > w || sh > h) {
        //resize if larger than required
        if (sw / sh >= w / h) {
          // hit on width
          r = w / sw;
        } else {
          // hit on height
          r = h / sh;
        }
      }
      w = Math.floor(sw * r);
      h = Math.floor(sh * r);
      cv.width = w;
      cv.height = h;
      ctx = cv.getContext("2d");
      if (sw / sh >= w / h) {
        // hit on width
        oH = sh;
        oW = Math.floor((sh * w) / h);
      } else {
        // hit on height
        oW = sw;
        oH = Math.floor((sw * h) / w);
      }
      // console.log(oW, oH);
      ctx.drawImage(src, 0, 0, sw, sh, 0, 0, w, h);
      return cv;
    },
    // input : canvas
    // return : raw binary image
    mxnCanvas2Binary(cv,perc){
      perc=perc || 0.75;
     var b64=cv.toDataURL("image/png", perc);
     b64=b64.replace(/^data\:([^\;]+)\;base64,/gim, "");
     return window.atob(b64);
    },
    // input  : readAsBinaryString
    // return : image el
    mxnImgElFromBinaryImage(im) {
      return new Promise(async resolve => {
        var img = new Image();
        img.onload = () => resolve(img);
        img.src = "data:image/png;base64," + window.btoa(im);
      });
    },
    mxnOrientationFromBinaryImage(im) {
      return EXIF.readFromBinaryFile(this.mxnBin2ArrayBuffer(im)).Orientation;
    },
    mxnBin2ArrayBuffer(b) {
      b = b.replace(/^data\:([^\;]+)\;base64,/gim, "");
      var len = b.length;
      var buffer = new ArrayBuffer(len);
      var view = new Uint8Array(buffer);
      for (var i = 0; i < len; i++) {
        view[i] = b.charCodeAt(i);
      }
      return buffer;
    }
  }
};
</script>
