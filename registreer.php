<!doctype html>
<html lang="en">

<?php
include "verbinding.php";
session_start();
?>

<head>
    <title>Bitr. | Registreer</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true">
    <link rel="stylesheet" type="text/css" href="tailwind.css">
    <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet">
    <style>
            body {
                background-color: rgb(255, 255, 255);
                font-weight: bold;
                font-style: italic;
                font-family: 'Roboto Mono', monospace;
                background-repeat: no-repeat;
                background-size: cover;
                margin: 0px;
                padding: 0px;
                cursor: default;
                background-image: url("images/gify1.gif");
            }

            * {
                font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
            }

            input {
                background-color: #2C2C2C;
            }
        </style>
</head>
<body class='overflow-hidden'>
        <div class='float-right lg:w-2/5 sm:w-full h-full bg-black lg:mt-0 sm:pt-80 lg:pt-0 text-white block text-center' data-aos="fade-left" data-aos-duration="500">
            <div class='flex justify-center'>
                <img src='images/logo.png' class='lg:w-10 sm:w-32 mt-14'>
            </div>
            <h1 class='lg:text-3xl sm:text-7xl lg:mt-8 sm:mt-4 mb-14'>CREËER EEN ACCOUNT.</h1>
            <form method='post'>
                <h1 class='mb-2 lg:text-lg sm:text-3xl'>GEBRUIKERSNAAM.</h1>
                <input type='text' name='gebruikersnaam' class='sm:w-1/2 mb-8 lg:py-4 lg:pr-20 lg:text-lg sm:text-2xl sm:py-12 sm:pr-32 outline-none pl-2 rounded' placeholder='Gebruikersnaam' maxlength='25' required>
                <h1 class='mb-2 lg:text-lg sm:text-3xl'>EMAIL.</h1>
                <input type='text' name='gebruikersnaam' class='sm:w-1/2 mb-8 lg:py-4 lg:pr-20 lg:text-lg sm:text-2xl sm:py-12 sm:pr-32 outline-none pl-2 rounded' placeholder='Email' maxlength='25' required>
                <h1 class='mb-2 lg:text-lg sm:text-3xl'>WACHTWOORD.</h1>
                <input name='wachtwoord' class='sm:w-1/2 mb-8 lg:py-4 lg:pr-20 lg:text-lg sm:text-2xl sm:py-12 sm:pr-32 outline-none pl-2 rounded' placeholder='Wachtwoord' type='password' required><br>
                <button name='login' class='bg-blue-600 rounded-full px-20 py-2 mb-10'>INLOGGEN.</button>
            </form>
            <div class='h-10 w-full bg-black lg:hidden sm:block'>
        </div>
        <h1 class='lg:text-xs sm:text-2xl mb-20'>HEB JE AL EEN ACCOUNT?<a href='login.php' class='text-blue-500 hover:text-blue-600 duration-500'> LOGIN!</a></h1>
        <img src='images/gify1.gif' class='lg:hidden sm:block w-full h-1/2 mr-10'>
        </div>
        <script src="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js"></script>
        <script src='data-aos.js'></script>
    </body>

<?php
  if (isset($_POST['registreren'])) {
    $email = $_POST['email'];
    $user = $_POST['gebruikersnaam'];
    $wachtwoord = $_POST['wachtwoord'];
    $sql = "SELECT COUNT(gebruikersnaam) AS num FROM users WHERE gebruikersnaam = :gebruikersnaam";
    $stmt = $connect->prepare($sql);
    $stmt->bindValue(':gebruikersnaam', $user);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    $sql1 = "SELECT COUNT(email) AS num FROM users WHERE email = :email";
    $stmt1 = $connect->prepare($sql1);
    $stmt1->bindValue(':email', $email);
    $stmt1->execute();
    $row1 = $stmt1->fetch(PDO::FETCH_ASSOC);

    if ($row['num'] > 0) {
      echo '<script>alert("Gebruikersnaam bestaat all")</script>';
    } elseif ($row1['num'] > 0) {
      echo '<script>alert("Email bestaat all")</script>';
    } else {
      $sql = "INSERT INTO `users` (`gebruikersnaam`, `email`, `wachtwoord`) 
    VALUES (:gebruikersnaam, :email, :wachtwoord) ";
      $sql_run = $connect->prepare($sql);
      $result = $sql_run->execute(array(
        ":gebruikersnaam" => $user,
        ":email" => $email, ":wachtwoord" => $wachtwoord
      ));
      header("Location: login.php");
    }
  }
?>
</html>