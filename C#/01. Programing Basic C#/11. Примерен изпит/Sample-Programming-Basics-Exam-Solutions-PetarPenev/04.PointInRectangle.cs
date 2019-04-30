using System;

class PointInRectangle
{
    static void Main()
    {
        var x = int.Parse(Console.ReadLine());
        var y = int.Parse(Console.ReadLine());

        var isInFirst = (x >= 2 && x <= 12) && (y >= -3 && y <= 1);
        var isInSecond = (x >= 4 && x <= 10) && (y >= -5 && y <= 3);

        if (isInFirst || isInSecond)
        {
            Console.WriteLine("in");
        }
        else
        {
            Console.WriteLine("out");
        }
    }
}
