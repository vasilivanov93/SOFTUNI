using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13.Histogram
{
    class Histogram
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            double p1 = 0;
            double p2 = 0;
            double p3 = 0;
            double p4 = 0;
            double p5 = 0;

            for (int i = 0; i < n; i++)
            {
                double numbers = double.Parse(Console.ReadLine());

                if (numbers >= 800)
                {
                    p5++;
                }
                else if (numbers >= 600 && numbers < 800)
                {
                    p4++;
                }
                else if (numbers >= 400 && numbers < 600)
                {
                    p3++;
                }
                else if (numbers >= 200 && numbers < 400)
                {
                    p2++;
                }
                else if (numbers < 200)
                {
                    p1++;
                }
            }

            Console.WriteLine("{0:F2}%", (p1 / n) * 100);
            Console.WriteLine("{0:F2}%", (p2 / n) * 100);
            Console.WriteLine("{0:F2}%", (p3 / n) * 100);
            Console.WriteLine("{0:F2}%", (p4 / n) * 100);
            Console.WriteLine("{0:F2}%", (p5 / n) * 100);
        }
    }
}