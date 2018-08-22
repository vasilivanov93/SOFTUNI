<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        N: <input type="text" name="num" />
        <input type="submit" />
    </form>
    <?php
    if(isset($_GET['num'])) {
        $n = intval($_GET['num']);
        $previousFibonacci = 1;
        echo $previousFibonacci . ' ';

        $currentFibonacii = 1;
        echo $currentFibonacii . ' ';

        for ($i = 2; $i < $n; $i++){
            $nextFibonacci = $previousFibonacci + $currentFibonacii;
            $previousFibonacci = $currentFibonacii;
            $currentFibonacii = $nextFibonacci;

            echo $currentFibonacii . ' ';
        }
    }
    ?>
</body>
</html>