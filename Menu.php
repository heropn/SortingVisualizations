<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="GeneralStyle.css">
    <link rel="stylesheet" type="text/css" href="Menu.css">
    <title>Sorting Algorithms Visualization</title>
  </head>
  <body>
    <div class="buttonContainer">
      <h1>Sorting Algorithms Visualization</h1>
      <?php
        $files = scandir("SortingAlgorithms");
        foreach ($files as $file)
        {
          if (strpos($file, ".js"))
          {
            $converted = str_replace(".js", "", $file);
            $converted = str_replace("_", " ", $converted);
            echo '<button type="button"><p>'. $converted . '</p></button>';
          }
        }
       ?>
    </div>
    <script src="Menu.js"></script>
  </body>
</html>
