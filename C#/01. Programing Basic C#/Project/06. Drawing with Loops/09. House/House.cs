using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.House
{
    class House
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int stars = 1;
            int spaces = n - stars;

            if (n % 2 == 0)
            {
                stars += 1;
            }

            for (int i = 0; i < (n + 1) / 2; i++)
            {
                for (int r = 0; r < (n - stars) / 2; r++)
                {
                    Console.Write("-");
                }

                for (int s = 0; s < stars; s++)
                {
                    Console.Write("*");
                }

                for (int e = 0; e < (n - stars) / 2; e++)
                {
                    Console.Write("-");
                }

                spaces--;
                stars += 2;
                Console.WriteLine();
            }

            for (int c = 0; c < n / 2; c++)
            {
                Console.WriteLine("{0}{1}{0}", "|", new string('*', n - 2));
            }
        }
    }
}
