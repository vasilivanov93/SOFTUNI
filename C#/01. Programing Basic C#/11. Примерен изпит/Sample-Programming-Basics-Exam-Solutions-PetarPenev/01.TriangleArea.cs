using System;

class TriangleArea
{
    static void Main()
    {
        var x1 = int.Parse(Console.ReadLine());
        var y1 = int.Parse(Console.ReadLine());
        var x2 = int.Parse(Console.ReadLine());
        var y2 = int.Parse(Console.ReadLine());
        var x3 = int.Parse(Console.ReadLine());
        var y3 = int.Parse(Console.ReadLine());

        var baseLength = Math.Abs(x2 - x3);
        var height = Math.Abs(y1 - y3);

        var area = (baseLength * height) / 2.0;
        Console.WriteLine(area);
    }
}
