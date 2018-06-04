<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php

      function printResult($result_set) {
        while(($row = $result_set->fetch_assoc()) != false){
          $temperature = $row["temperature1"];
          $humidity = $row["humidity1"];
          $pressure = $row["pressure"];
          $windDir = $row["wind_dir"];
          $forecast = $row["forecast"];
        }
          $json_data = array ('temperature' => $temperature, 'humidity' => $humidity, 'pressure' => $pressure, 'winddir' => $windDir, 'forecast' => $forecast);
          $jsonstr = json_encode($json_data);
          $fp = fopen('data.json', 'w');
          fwrite($fp, $jsonstr);
      }

      $mysqli = new mysqli('localhost', 'meteouaer', 'kwZuq7b3', 'meteo');

      if ($mysqli->connect_errno) {
        echo "Підключення не вдалось";
      }
      $mysqli->query("SET NAMES 'utf-8'");

      $result_set = $mysqli->query("SELECT * FROM `first`");
      $num_rows = mysqli_num_rows($result_set);


// $result_set = $mysqli->query("SELECT * FROM `current-data` ORDER BY `cur-temperature` ASC");
       printResult($result_set);


    ?>
  </body>
</html>
