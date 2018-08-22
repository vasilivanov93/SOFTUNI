using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.HalfSumElement
{
    class HalfSumElement
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            double sum = 0.0;
            int maxNum = -100000000;

            for (int i = 0; i < n; i++)
            {
                int y = int.Parse(Console.ReadLine());
                sum += y;

                if (y > maxNum)
                {
                    maxNum = y;
                }

            }

            double sumSmaller = (sum - maxNum);

            if ((sumSmaller) == maxNum)
            {
                Console.WriteLine("Yes");
                Console.WriteLine("Sum = " + maxNum);
            }
            else
            {
                Console.WriteLine("No");
                Console.WriteLine("Diff = " + Math.Abs(maxNum - sumSmaller));
            }
        }
    }
}
