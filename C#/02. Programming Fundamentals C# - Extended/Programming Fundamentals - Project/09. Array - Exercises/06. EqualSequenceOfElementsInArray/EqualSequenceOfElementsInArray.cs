using System;
using System.Linq;

namespace _06.EqualSequenceOfElementsInArray
{
   public class EqualSequenceOfElementsInArray
    {
       public static void Main()
        {
            int[] numbers = Console.ReadLine()
                                        .Split(' ')
                                        .Select(int.Parse)
                                        .ToArray();
            bool areAllEqual = true;
            int previos = numbers[0];

            for (int i = 1; i < numbers.Length; i++)
            {
                if (numbers[i] != previos)
                {
                    areAllEqual = false;
                    break;
                }

                previos = numbers[i];
            }

            if (areAllEqual)
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
