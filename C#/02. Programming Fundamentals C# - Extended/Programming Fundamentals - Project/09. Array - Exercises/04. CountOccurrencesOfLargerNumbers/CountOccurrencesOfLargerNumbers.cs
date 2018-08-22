using System;
using System.Linq;

namespace _04.CountOccurrencesOfLargerNumbers
{
   public class CountOccurrencesOfLargerNumbers
    {
       public static void Main()
        {
            double[] numbers = Console.ReadLine()
                                            .Split(' ')
                                            .Select(double.Parse)
                                            .ToArray();
            double searchNumber = double.Parse(Console.ReadLine());

            int count = 0;

            for (int i = 0; i < numbers.Length; i++)
            {
                double currentNumber = numbers[i];

                if (currentNumber >= searchNumber)
                {
                    count++;
                }
            }

            Console.WriteLine(count);
        }
    }
}
