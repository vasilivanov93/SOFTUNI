using System;
using System.Linq;

namespace _05.IncreasingSequenceOfElements
{
   public class IncreasingSequenceOfElements
    {
       public static void Main()
        {
            int[] numbers = Console.ReadLine()
                                        .Split(' ')
                                        .Select(int.Parse)
                                        .ToArray();
            bool increasing = true;
            int previos = numbers[0];

            for (int i = 1; i < numbers.Length; i++)
            {

                if (numbers[i] <= previos)
                {
                    increasing = false;
                    break;
                }

                previos = numbers[i];
            }

            if (increasing)
            {
                Console.WriteLine("Yes");
            }
            else
            {
                Console.WriteLine("No");
            }
        }
    }
}
