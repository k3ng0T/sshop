<?php
require_once('datebase.php');
require_once 'C:/OSPanel/vendor/autoload.php';
$client = new Google\client;
$client->setClientid("68814549905-f89uiq2pb6g91gborq3ev3jdq7pj3qsb.apps.googleusercontent.com");
$client->setClientSecret("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");
$client->setRedirectUri("https://entify.com");

$client->addScope("email");
$client->addScope("profile");

$url = $client->createAuthUrl();

if (isset($_GET['code'])) {
    $code = $_GET['code'];
    $token = $client->fetchAccessTokenWithAuthCode($code);

    $client->setAccessToken($token['access_token']);

    $oauth = new Google\Service\Oauth2($client);

    $userinfo = $oauth->userinfo->get();

    $gmail = $userinfo->email;
    $checkQuery = "SELECT * FROM user WHERE googleauth = '$gmail'";
    $result = $conn->query($checkQuery);
    if($result->num_rows>0){
        exit();
    }else{
        $login = $_COOKIE['user'];
        $dateinsert = "UPDATE `user` SET googleAuth = '$gmail' WHERE logon = '$login'";

        $conn -> query($dateinsert);
        setcookie('google', $login, time(), +3600, "/");
}
}




?>