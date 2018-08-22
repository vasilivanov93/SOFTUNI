using System;
using System.Collections.Generic;
using System.Linq;


namespace _07.LargestNElements
{
    class LargestNElements
    {
        static void Main()
        {
            List<int> numbers = Console.ReadLine()
                                            .Split(' ')
                                            .Select(int.Parse)
                                            .ToList();
            int totalNumber = int.Parse(Console.ReadLine());

            numbers.Sort();
            numbers.Reverse();

            var result = numbers.Take(totalNumber);

            Console.WriteLine(string.Join(" ", result));
        }
    }
}
