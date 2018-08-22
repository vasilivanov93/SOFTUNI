using System;
using System.Linq;

namespace _02.SmallestElementInArray
{
   public class SmallestElementInArray
    {
       public static void Main()
        {
            int[] numbers = Console.ReadLine()
                                            .Split(' ')
                                            .Select(int.Parse)
                                            .ToArray();
            int min = int.MaxValue;

            foreach (var number in numbers)
            {
                if (number < min)
                {
                    min = number;
                }
            }

            Console.WriteLine(min);
        }
    }
}
