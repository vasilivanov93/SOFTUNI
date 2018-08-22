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
        $firstFibonacci = 1;
        echo $firstFibonacci . ' ';

        $secondFibonacii = 1;
        echo $secondFibonacii . ' ';

        $thirdFibonacii = $firstFibonacci + $secondFibonacii;
        echo $thirdFibonacii . ' ';

        for ($i = 3; $i < $n; $i++){
            $nextFibonacci = $firstFibonacci + $secondFibonacii + $thirdFibonacii;
            $firstFibonacci = $secondFibonacii;
            $secondFibonacii = $thirdFibonacii;
            $thirdFibonacii = $nextFibonacci;

            echo $thirdFibonacii . ' ';
        }
    }
    ?>
</body>
</html>