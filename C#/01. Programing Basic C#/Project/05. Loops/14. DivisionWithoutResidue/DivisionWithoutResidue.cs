using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14.DivisionWithoutResidue
{
    class DivisionWithoutResidue
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            double p1 = 0.0;
            double p2 = 0.0;
            double p3 = 0.0;

            for (int i = 0; i < n; i++)
            {
                int numbers = int.Parse(Console.ReadLine());

                if (numbers % 2 == 0)
                {
                    p1++;
                }
                if (numbers % 3 == 0)
                {
                    p2++;
                }
                if (numbers % 4 == 0)
                {
                    p3++;
                }
            }

            Console.WriteLine("{0:F2}%", (p1 / n) * 100);
            Console.WriteLine("{0:F2}%", (p2 / n) * 100);
            Console.WriteLine("{0:F2}%", (p3 / n) * 100);
        }
    }
}
