using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Fort
{
    class Fort
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int dashes = (2 * n) - 2 * (n / 2) - 4;
            int spaces = (2 * n) - 2;

            for (int rows = 1; rows <= n; rows++)
            {
                if (rows == 1)
                {
                    Console.Write('/');
                    Console.Write(new string('^', n / 2));
                    Console.Write("\\");
                    Console.Write(new string('_', (2 * n) - 2 * (n / 2) - 4));
                    Console.Write('/');
                    Console.Write(new string('^', n / 2));
                    Console.Write("\\");
                }
                else if (rows == n)
                {
                    Console.Write("\\");
                    Console.Write(new string('_', n / 2));
                    Console.Write("/");
                    Console.Write(new string(' ', dashes));
                    Console.Write("\\");
                    Console.Write(new string('_', n / 2));
                    Console.Write("/");
                }
                else
                {
                    Console.Write("|");

                    if (rows == n - 1)
                    {
                        Console.Write(new string(' ', n / 2 + 1));
                        Console.Write(new string('_', dashes));
                        Console.Write(new string(' ', n / 2 + 1));
                    }
                    else
                    {
                        Console.Write(new string(' ', spaces));
                    }

                    Console.Write("|");
                }
                Console.WriteLine();
            }
        }
    }
}