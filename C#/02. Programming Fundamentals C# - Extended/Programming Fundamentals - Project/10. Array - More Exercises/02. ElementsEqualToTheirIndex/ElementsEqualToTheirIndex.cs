using System;
using System.Linq;

namespace _02.ElementsEqualToTheirIndex
{
   public class ElementsEqualToTheirIndex
    {
       public static void Main()
        {
            int[] numbers = Console.ReadLine()
                                        .Split(' ')
                                        .Select(int.Parse)
                                        .ToArray();

            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] == i)
                {
                    Console.Write(numbers[i] + " ");
                }
            }

            Console.WriteLine();
        }
    }
}
