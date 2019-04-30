using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _12.Butterfly
{
    class Butterfly
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            //Upper part
            for (int i = 1; i <= n - 2; i++)
            {
                if (i % 2 != 0)
                {
                    Console.Write(new string('*', n - 2) + "\\");
                    Console.Write(" ");
                    Console.Write("/" + new string('*', n - 2));
                    Console.WriteLine();
                }
                else
                {
                    Console.Write(new string('-', n - 2) + "\\");
                    Console.Write(" ");
                    Console.Write("/" + new string('-', n - 2));
                    Console.WriteLine();
                }

            }

            //Middle part
            Console.Write(new string(' ', n - 1));
            Console.Write("@");
            Console.Write(new string(' ', n - 1));
            Console.WriteLine();

            //Bottom part
            for (int i = 1; i <= n - 2; i++)
            {
                if (i % 2 != 0)
                {
                    Console.Write(new string('*', n - 2) + "/");
                    Console.Write(" ");
                    Console.Write("\\" + new string('*', n - 2));
                    Console.WriteLine();
                }
                else
                {
                    Console.Write(new string('-', n - 2) + "/");
                    Console.Write(" ");
                    Console.Write("\\" + new string('-', n - 2));
                    Console.WriteLine();
                }
            }
        }
    }
}