<?php
require './../../vendor/autoload.php';
if (!isset($_ENV['isOnHeroku'])) {
  $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
  $dotenv->load();
}
if (isset($_GET['todo'])) {
  if ($_GET['todo'] == 'runnerStat') {
    runnerStat(preg_replace("/[^0-9]/", "", $_GET['id']));
  }
  if ($_GET['todo'] == 'thaiRunImg') {
    thairunImg(preg_replace("/[^0-9]/", "", $_GET['id']));
  }
  if ($_GET['todo'] == 'thaiRunImgProxy') {
    thaiRunImgProxy();
  }
  if ($_GET['todo'] == 'imgUpload') {
    imgUpload();
  }
}

function runnerStat($id) {
  $d = json_decode(file_get_contents(__DIR__ . '/runnerDat.json'), true);
  foreach ($d as $v) {
    $bib = explode('-', $v['bib']);
    if (array_pop($bib) == $id) {
      echo json_encode(['runner'=>$v]);
      die;
    }
  }
}
function imgUpload() {
  $keyFile = [
    "type"                        => "service_account",
    "project_id"                  => "icmm2020cert",
    "private_key_id"              => $_ENV['private_key_id'],
    "private_key"                 => $_ENV['private_key'],
    "client_email"                => $_ENV['client_email'],
    "client_id"                   => $_ENV['client_id'],
    "auth_uri"                    => "https://accounts.google.com/o/oauth2/auth",
    "token_uri"                   => "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url" => "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url"        => $_ENV['client_x509_cert_url'],
  ];
  //print_r($keyFile);
  $storage = new \Google\Cloud\Storage\StorageClient([
    'keyFile' => $keyFile,

  ]);
  $bucket = $storage->bucket('icmm2020-cert-img');

  $d     = json_decode(file_get_contents('php://input'), true);
  $data  = base64_decode(str_replace('data:image/png;base64,', '', $d['d']));
  $fName = uuid() . ".png";
  $bucket->upload(
    $data,
    [
      'name'          => $fName,
      'predefinedAcl' => 'publicRead',
    ]
  );
  echo json_encode(['fName' => 'https://storage.googleapis.com/icmm2020-cert-img/' . $fName]);
}

function thaiRunImgProxy() {
  $d  = json_decode(file_get_contents('php://input'), true);
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $d['url']);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HEADER, false);
  $data = curl_exec($ch);
  curl_close($ch);
  echo base64_encode($data);
}
function thaiRunImg($id) {
  $data = [
    'operationName' => "searchPhotos",
    'variables'     => [
      'eventId'    => "icmm2020",
      'searchText' => $id,
      'page'       => 1,
    ],
    'query'         =>
    'query searchPhotos($eventId: MongoID, $photographerId: MongoID, $searchText: String, $hour: Int, $minute: Int, $page: Int) {
    searchPhotos(eventId: $eventId, photographerId: $photographerId, searchText: $searchText, hour: $hour, minute: $minute, page: $page) {
      count
      items {
        view {
          ...photoView
        }
      }
    }
  }

  fragment photoView on PhotoView {
    preview {
      url
      size {
        width
        height
      }
    }
  thumbnail {
  url
  size {
  width
  height
  }
  }
  }
  ',
  ];
  $data_string = json_encode($data);
  $ch          = curl_init();
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string)]
  );
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
  curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
  curl_setopt($ch, CURLOPT_URL, "https://api.photo.thai.run/graphql");
  $_ = curl_exec($ch);
  curl_close($ch);
  echo $_;
}
function uuid() {
  return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
    mt_rand(0, 0xffff), mt_rand(0, 0xffff),
    mt_rand(0, 0xffff), mt_rand(0, 0x0fff) | 0x4000, mt_rand(0, 0x3fff) | 0x8000, mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
  );
}
