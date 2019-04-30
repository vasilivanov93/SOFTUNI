using System;

class Bricks
{
    static void Main()
    {
        var x = int.Parse(Console.ReadLine());
        var w = int.Parse(Console.ReadLine());
        var m = int.Parse(Console.ReadLine());

        var result = Math.Ceiling((double)x / (w * m));
        Console.WriteLine(result);
    }
}
