using System;

namespace _01.LargestElementInArray
{
   public class LargestElementInArray
    {
       public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            int[] numbers = new int[n];

            int largersElement = int.MinValue;

            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i] = int.Parse(Console.ReadLine());

                int currentNumber = numbers[i];

                if (currentNumber >= largersElement)
                {
                    largersElement = currentNumber;
                }
            }

            Console.WriteLine(largersElement);
        }
    }
}
