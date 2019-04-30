using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.RhombusOfStars
{
    class RhombusOfStars
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            for (int row = 1; row <= n; row++)
            {
                Console.Write(new string(' ', n - row));
                Console.Write("*");

                for (int i = 1; i < row; i++)
                {
                    Console.Write(" *");
                }
                Console.WriteLine();
            }

            for (int row = 1; row <= n - 1; row++)
            {
                Console.Write(new string(' ', row));
                Console.Write("*");

                for (int i = 1; i < n - row; i++)
                {
                    Console.Write(" *");
                }
                Console.WriteLine();
            }
        }
    }
}
