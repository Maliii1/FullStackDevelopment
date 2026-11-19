<!DOCTYPE html>
<table border = "1">
    <tr>
        <th>Cars</th>
        <th>Price</th>
        <th>Color</th>
    </tr>

    <style>
        table{
            width: 40%;
            border-collapse: collapse;
        }
        th,td{
            padding :10px;
            text-align: ce;
            border: 1px solid blue;
        }
        th{
            background-color: lightblue;
            font-weight: bold;
        }
        td{
            background-color: deepskyblue;
        }
    </style>

    <?php

    $cars = array(
        array("Audi",35000, "blue"),
        array("BMW",60000, "black"),
        array("Mercedes",90000," white"),
        array("Ferrari",300000, "red")

    );

for($row=0; $row<4; $row++){
    echo "<tr>";

    for($col=0; $col<3; $col++){
        echo "<td>" . $cars[$row][$col] . "</td>";
    }

    echo "</tr>";

}
?>
</table>