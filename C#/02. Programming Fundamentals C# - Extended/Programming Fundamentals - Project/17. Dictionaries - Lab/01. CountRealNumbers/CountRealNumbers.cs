using System;
using System.Collections.Generic;

namespace _01.CountRealNumbers
{
    public class CountRealNumbers
    {
        public static void Main()
        {
            string[] nums = Console.ReadLine().Split(' ');
            SortedDictionary<double, int> counts = new SortedDictionary<double, int>();

            foreach (var num in nums)
            {
                double parsedNum = double.Parse(num);

                if (counts.ContainsKey(parsedNum))
                {
                    counts[parsedNum]++;
                }
                else
                {
                    counts[parsedNum] = 1;
                }
            }

            foreach (var num in counts.Keys)
            {
                Console.WriteLine($"{num} -> {counts[num]}");
            }
        }
    }
}
