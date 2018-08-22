using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Diamond
{
    class Diamond
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int leftRight = (n - 1) / 2;

            for (int i = 1; i <= (n - 1) / 2; i++)
            {
                Console.Write(new string('-', leftRight));
                Console.Write("*");

                int mid = n - 2 * leftRight - 2;

                if (mid >= 0)
                {
                    Console.Write(new string('-', mid));
                    Console.Write("*");
                }

                Console.WriteLine(new string('-', leftRight));
                leftRight--;
            }

            for (int j = (n - 1) / 2; j >= 0; j--)
            {
                Console.Write(new string('-', leftRight));
                Console.Write("*");
                int mid = n - 2 * leftRight - 2;

                if (mid >= 0)
                {
                    Console.Write(new string('-', mid));
                    Console.Write("*");
                }

                Console.WriteLine(new string('-', leftRight));
                leftRight++;
            }
        }
    }
}
