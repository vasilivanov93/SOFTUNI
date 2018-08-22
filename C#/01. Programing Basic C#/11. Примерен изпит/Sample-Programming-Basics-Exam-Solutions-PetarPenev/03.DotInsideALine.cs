using System;

class DotInsideALine
{
    static void Main()
    {
        var first = int.Parse(Console.ReadLine());
        var second = int.Parse(Console.ReadLine());
        var point = int.Parse(Console.ReadLine());

        var left = Math.Min(first, second);
        var right = Math.Max(first, second);

        var distanceFromLeft = Math.Abs(left - point);
        var distanceFromRight = Math.Abs(right - point);

        if (point >= left && point <= right)
        {
            Console.WriteLine("in");
            Console.WriteLine(Math.Min(distanceFromLeft, distanceFromRight));
        }
        else
        {
            Console.WriteLine("out");
            Console.WriteLine(Math.Min(distanceFromLeft, distanceFromRight));
        }
    }
}
