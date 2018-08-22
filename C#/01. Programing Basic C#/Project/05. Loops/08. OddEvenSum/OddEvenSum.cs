using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.OddEvenSum
{
    class OddEvenSum
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int evenSum = 0;
            int oddSum = 0;

            for (int i = 1; i <= n; i++)
            {
                int numbers = int.Parse(Console.ReadLine());

                if (numbers % 2 == 0)
                {
                    numbers = evenSum + numbers;
                }
                else if (numbers % 2 != 0)
                {
                    numbers = oddSum + numbers;
                }

                if (evenSum == oddSum)
                {
                    Console.WriteLine("Yes");
                    Console.WriteLine("Sum = " + evenSum);
                }
                else
                {
                    Console.WriteLine("No");
                    Console.WriteLine("Diff = " + Math.Abs(evenSum - oddSum));
                }
            }
        }
    }
}
