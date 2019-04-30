using System;

class RectangleWithStars
{
    static void Main()
    {
        var n = int.Parse(Console.ReadLine());

        Console.WriteLine(new string('%', n * 2));

        var numberOfRows = n;
        if (n % 2 == 0)
        {
            numberOfRows--;
        }

        for (int row = 0; row < numberOfRows; row++)
        {
            if (row == numberOfRows / 2)
            {
                Console.WriteLine("%{0}**{0}%", new string(' ', n - 2));
            }
            else
            {
                Console.WriteLine("%{0}%", new string(' ', (n * 2) - 2));
            }
        }

        Console.WriteLine(new string('%', n * 2));
    }
}
