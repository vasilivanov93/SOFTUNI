using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.RectangleWithStars
{
    class RectangleWithStars
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            Console.WriteLine(new string('%', n * 2));

            int numberOfRows = n;

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
}