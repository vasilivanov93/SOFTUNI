using System;
using System.Linq;

namespace _03.SmallestElementInArray
{
   public class SmallestElementInArray
    {
       public static void Main()
        {
            int[] numbers = Console.ReadLine()
                                        .Split(' ')
                                        .Select(int.Parse)
                                        .ToArray();

            int smallest = int.MaxValue;

            for (int i = 0; i < numbers.Length; i++)
            {
                int currentNumber = numbers[i];

                if (currentNumber < smallest)
                {
                    smallest = currentNumber;
                }
            }

            Console.WriteLine(smallest);
        }
    }
}
