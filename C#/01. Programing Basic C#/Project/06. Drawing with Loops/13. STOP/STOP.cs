using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13.STOP
{
    class STOP
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int width = 4 * n + 3;

            //First line
            Console.Write(new string('.', n + 1));
            Console.Write(new string('_', 2 * n + 1));
            Console.WriteLine(new string('.', n + 1));

            //Top Part
            int k = 0;
            for (int i = n; i > 0; i--)
            {
                Console.Write(new string('.', n - k));
                Console.Write(new string('/', 2));
                Console.Write(new string('_', (2 * n - 1) + 2 * k));
                Console.Write(new string('\\', 2));
                Console.WriteLine(new string('.', n - k));
                k++;
            }

            //Middle Part
            Console.Write("//");
            Console.Write(new string('_', (width - 8) / 2));
            Console.Write("STOP!");
            Console.Write(new string('_', (width - 8) / 2));
            Console.WriteLine("\\\\");

            //Lower Part
            int m = 0;
            for (int i = 0; i < n; i++)
            {
                if (m > 0)
                {
                    Console.Write(new string('.', m));
                }
                Console.Write(new string('\\', 2));
                Console.Write(new string('_', 4 * n - 1 - 2 * m));
                Console.Write("//");
                if (m > 0)
                {
                    Console.Write(new string('.', m));
                }
                Console.WriteLine();
                m++;
            }
        }
    }
}
