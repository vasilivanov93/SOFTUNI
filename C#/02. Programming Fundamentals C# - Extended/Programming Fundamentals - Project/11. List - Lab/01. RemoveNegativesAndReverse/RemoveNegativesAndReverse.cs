using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.RemoveNegativesAndReverse
{
    public class RemoveNegativesAndReverse
    {
        public static void Main()
        {
            int[] nums = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            List<int> numbers = new List<int>();

            foreach (var item in nums)
            {
                if (item > 0)
                {
                    numbers.Add(item);
                }
            }

            foreach (var item in nums)
            {
                if (item < 0)
                {
                    numbers.Remove(item);
                }
            }

            numbers.Reverse();

            if (numbers.Any())
            {
                Console.WriteLine(string.Join(" ", numbers));
            }
            else
            {
                Console.WriteLine("empty");
            }
        }
    }
}
