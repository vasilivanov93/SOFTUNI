using System;
using System.Linq;

namespace _02.LargestThreeNumbers
{
   public class LargestThreeNumbers
    {
       public static void Main()
        {
            int[] numbers = Console.ReadLine()
                                        .Split(' ')
                                        .Select(int.Parse)
                                        .OrderByDescending(n => n)
                                        .Take(3)
                                        .ToArray();

            Console.WriteLine(string.Join(" ", numbers));
        }
    }
}
