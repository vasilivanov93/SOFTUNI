using System;

namespace _02.CountOfNegativeElementsInArray
{
   public class CountOfNegativeElementsInArray
    {
       public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            int[] numbers = new int[n];

            int count = 0;

            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i] = int.Parse(Console.ReadLine());

                int currentNumber = numbers[i];

                if (currentNumber <= 0)
                {
                    count++;
                }
            }

            Console.WriteLine(count);
        }
    }
}
