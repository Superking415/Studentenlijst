<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>studentenlijst Noah van Loon</title>
    <link rel="stylesheet" href="studentenlijst.css">
</head> 
<body>
<header>
        <button id="sortAZ">A/Z</button>
        <button id="sortAchternamen">Achternamen</button>
        <input type="text" id="filter" placeholder="Type hier">
    </header>

    <div id="studentenlijst">
       
    </div>
    

    <script src="studentenlijst.js"></script>

<?php
$servername = "localhost";
$username = "Noah1";
$password = "1234"; 
$dbname = "studentenlijst";


$mysql = new mysqli($servername, $username, $password, $dbname);


if ($mysql->connect_error) {
    die("Verbinding mislukt: " . $mysql->connect_error);
}


$sql = "SELECT * FROM studentinfo";
$result = $mysql->query($sql);


if ($result->num_rows > 0) {
    
    while ($row = $result->fetch_assoc()) {
        echo "<div class='student'>";
        echo "<p>Naam: " . $row["Naam"] . " " . $row["Tussenvoegsel"] . " " . $row["Achternaam"] . "</p>";
        echo "<p>Telefoonnummer: " . $row["Telefoonnummer"] . "</p>";
        echo "<p>Email: " . $row["Email"] . "</p>";
        echo "</div>";
    }
} else {
    echo "Geen gegevens gevonden in de tabel 'studenten'.";
}

$mysql->close();
?>
</body>
</html>