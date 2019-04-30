using System;
using System.Collections.Generic;
using System.Linq;

namespace _3.EqualSumAfterExtraction
{
    class EqualSumAfterExtraction
    {
        static void Main(string[] args)
        {
            List<int> number1 = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            List<int> number2 = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            int sum1 = 0;
            int sum2 = 0;

            for (int i = 0; i < number1.Count; i++)
            {
                if (number2.Contains(number1[i]))
                {
                    number2.Remove(number1[i]);
                }
            }

            for (int i = 0; i < number1.Count; i++)
            {
                sum1 += number1[i];
            }

            for (int i = 0; i < number2.Count; i++)
            {
                sum2 += number2[i];
            }

            if (sum1 == sum2)
            {
                Console.WriteLine($"Yes. Sum: {sum1}");
            }
            else
            {
                Console.WriteLine($"No. Diff: {Math.Abs(sum1 - sum2)}");
            }
        }
    }
}
