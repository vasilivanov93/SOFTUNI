using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.SumsStep3
{
    class SumsStepThree
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int sum1 = 0;
            int sum2 = 0;
            int sum3 = 0;

            for (int i = 1; i <= n; i++)
            {
                int currentNumber = int.Parse(Console.ReadLine());

                if (i % 3 == 1)
                {
                    sum1 += currentNumber;
                }
                else if (i % 3 == 2)
                {
                    sum2 += currentNumber;
                }
                else if (i % 3 == 0)
                {
                    sum3 += currentNumber;
                }
            }
            Console.WriteLine("sum1 = {0}", sum1);
            Console.WriteLine("sum2 = {0}", sum2);
            Console.WriteLine("sum3 = {0}", sum3);
        }
    }
}
