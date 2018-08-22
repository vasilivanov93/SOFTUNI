using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Increasing4Numbers
{
    class IncreasingFourNumbers
    {
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());

            for (int first = a; first <= b; first++)
            {
                for (int second = a; second <= b; second++)
                {
                    for (int third = a; third <= b; third++)
                    {
                        for (int fourth = a; fourth <= b; fourth++)
                        {
                            if (first < second && second < third && third < fourth)
                            {
                                Console.WriteLine("{0} {1} {2} {3}", first, second, third, fourth);
                            }
                        }
                    }
                }
            }

            if (b - a < 3)
            {
                Console.WriteLine("No");
            }
        }
    }
}
