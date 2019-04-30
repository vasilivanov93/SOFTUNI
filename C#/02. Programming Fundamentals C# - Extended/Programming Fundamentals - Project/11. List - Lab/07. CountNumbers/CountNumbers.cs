using System;
using System.Collections.Generic;
using System.Linq;

namespace _07.CountNumbers
{
   public class CountNumbers
    {
       public static void Main()
        {
            List<int> nums = Console.ReadLine()
                                        .Split(' ')
                                        .Select(int.Parse)
                                        .ToList();

            int[] counts = new int[nums.Max() + 1];

            foreach (var num in nums)
            {
                counts[num]++;
            }

            for (int i = 0; i < counts.Length; i++)
            {
                if (counts[i] > 0)
                {
                    Console.WriteLine($"{i} -> {counts[i]}");
                }
            }
        }
    }
}