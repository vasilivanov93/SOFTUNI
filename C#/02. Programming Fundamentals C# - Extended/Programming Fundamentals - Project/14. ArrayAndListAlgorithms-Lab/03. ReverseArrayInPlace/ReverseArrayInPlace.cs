using System;
using System.Linq;

namespace _03.ReverseArrayInPlace
{
    public class ReverseArrayInPlace
    {
        public static void Main()
        {
            var numbers = Console.ReadLine()
                                        .Split()
                                        .Select(int.Parse)
                                        .ToArray();

            for (int i = 0; i < numbers.Length / 2; i++)
            {
                int leftIndex = i;
                int rightIndex = numbers.Length - 1 - i;

                int temp = numbers[leftIndex];
                numbers[leftIndex] = numbers[rightIndex];
                numbers[rightIndex] = temp;
            }

            Console.WriteLine(string.Join(" ", numbers));
        }
    }
}
