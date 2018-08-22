using System;
using System.Linq;

namespace _04.SortArrayUsingBubbleSort
{
   public class SortArrayUsingBubbleSort
    {
       public static void Main()
        {
            int[] numbers = Console.ReadLine()
                                        .Split(' ')
                                        .Select(int.Parse)
                                        .ToArray();

            bool swapped;

            do
            {
                swapped = false;

                for (int i = 0; i < numbers.Length - 1; i++)
                {
                    int currentNumber = numbers[i];
                    int nextNumber = numbers[i + 1];

                    if (currentNumber > nextNumber)
                    {
                        numbers[i + 1] = currentNumber;
                        numbers[i] = nextNumber;
                        swapped = true;
                    }
                }
            } while (swapped);

            Console.WriteLine(string.Join(" ", numbers));
        }
    }
}
