using System;
using System.Linq;

namespace _05.ArrayUsingInsertionSort
{
   public class ArrayUsingInsertionSort
    {
       public static void Main()
        {
            int[] numbers = Console.ReadLine()
                                        .Split(' ')
                                        .Select(int.Parse)
                                        .ToArray();

            for (int i = 0; i < numbers.Length - 1; i++)
            {
                int nextNumber = i + 1;

                while (nextNumber > 0)
                {
                    if (numbers[nextNumber] < numbers[nextNumber - 1])
                    {
                        int temp = numbers[nextNumber];
                        numbers[nextNumber] = numbers[nextNumber - 1];
                        numbers[nextNumber - 1] = temp;
                    }

                    nextNumber--;
                }
            }

            Console.WriteLine(string.Join(" ", numbers));
        }
    }
}
