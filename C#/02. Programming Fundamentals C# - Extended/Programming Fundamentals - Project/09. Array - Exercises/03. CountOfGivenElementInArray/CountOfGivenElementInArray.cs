using System;
using System.Linq;

namespace _03.CountOfGivenElementInArray
{
   public class CountOfGivenElementInArray
    {
       public static void Main()
        {
            int[] numbers = Console.ReadLine()
                                            .Split(' ')
                                            .Select(int.Parse)
                                            .ToArray();
            int searchNumber = int.Parse(Console.ReadLine());

            int count = 0;

            for (int i = 0; i < numbers.Length; i++)
            {
                int currentNumber = numbers[i];

                if (currentNumber == searchNumber)
                {
                    count++;
                }
            }

            Console.WriteLine(count);
        }
    }
}
