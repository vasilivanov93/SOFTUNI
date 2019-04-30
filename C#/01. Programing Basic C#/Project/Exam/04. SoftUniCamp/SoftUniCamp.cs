using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.SoftUniCamp
{
    class SoftUniCamp
    {
        static void Main(string[] args)
        {
            int groups = int.Parse(Console.ReadLine());

            int sumTotalPeople = 0;

            double p1 = 0;
            double p2 = 0;
            double p3 = 0;
            double p4 = 0;
            double p5 = 0;

            for (int i = 1; i <= groups; i++)
            {
                int people = int.Parse(Console.ReadLine());
                sumTotalPeople = sumTotalPeople + people;

                if (people >= 41)
                {
                    p5 = p5 + people;
                }
                else if (people >= 26 && people < 41)
                {
                    p4 = p4 + people;
                }
                else if (people >= 13 && people < 26)
                {
                    p3 = p3 + people;
                }
                else if (people >= 6 && people < 13)
                {
                    p2 = p2 + people;
                }
                else if (people <= 5)
                {
                    p1 = p1 + people;
                }
            }

            Console.WriteLine("{0:F2}%", (p1 / sumTotalPeople) * 100);
            Console.WriteLine("{0:F2}%", (p2 / sumTotalPeople) * 100);
            Console.WriteLine("{0:F2}%", (p3 / sumTotalPeople) * 100);
            Console.WriteLine("{0:F2}%", (p4 / sumTotalPeople) * 100);
            Console.WriteLine("{0:F2}%", (p5 / sumTotalPeople) * 100);
        }
    }
}
