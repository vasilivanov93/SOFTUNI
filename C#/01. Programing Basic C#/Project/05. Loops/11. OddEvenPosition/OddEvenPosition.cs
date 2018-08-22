using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.OddEvenPosition
{
    class OddEvenPosition
    {
        static void Main(string[] args)
        {
            double OddSum = 0;
            double EvenSum = 0;
            double OddMin = double.MaxValue;
            double OddMax = double.MinValue;
            double EvenMin = double.MaxValue;
            double EvenMax = double.MinValue;
            int n = int.Parse(Console.ReadLine());
            for (int i = 1; i <= n; i++)
            {
                if (i % 2 == 0)
                {
                    double NumberEven = double.Parse(Console.ReadLine());
                    EvenSum += NumberEven;

                    if (NumberEven < EvenMin)
                    {
                        EvenMin = NumberEven;
                    }
                    if (NumberEven > EvenMax)
                    {
                        EvenMax = NumberEven;
                    }
                }
                else
                {
                    double NumberOdd = double.Parse(Console.ReadLine());
                    OddSum += NumberOdd;
                    if (NumberOdd < OddMin)
                    {
                        OddMin = NumberOdd;
                    }
                    if (NumberOdd > OddMax)
                    {
                        OddMax = NumberOdd;
                    }
                }
            }
            if (n == 0)
            {
                Console.WriteLine("OddSum=" + OddSum);
                Console.WriteLine("OddMin=No");
                Console.WriteLine("OddMax=No");
                Console.WriteLine("EvenSum=" + EvenSum);
                Console.WriteLine("EvenMin=No");
                Console.WriteLine("EvenMax=No");
            }
            else if ((EvenMin == double.MaxValue) || (EvenMax == Double.MinValue))
            {
                Console.WriteLine("OddSum=" + OddSum);
                Console.WriteLine("OddMin=" + OddMin);
                Console.WriteLine("OddMax=" + OddMax);
                Console.WriteLine("EvenSum=" + EvenSum);
                Console.WriteLine("EvenMin=No");
                Console.WriteLine("EvenMax=No");
            }
            else
            {
                Console.WriteLine("OddSum=" + OddSum);
                Console.WriteLine("OddMin=" + OddMin);
                Console.WriteLine("OddMax=" + OddMax);
                Console.WriteLine("EvenSum=" + EvenSum);
                Console.WriteLine("EvenMin=" + EvenMin);
                Console.WriteLine("EvenMax=" + EvenMax);
            }
        }
    }
}
