using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.ArrayContainsElement
{
    class ArrayContainsElement
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine()
                                            .Split(' ')
                                            .Select(int.Parse)
                                            .ToArray();

            int element = int.Parse(Console.ReadLine());
            bool containsElements = false;

            foreach (var number in numbers)
            {
                if (number == element)
                {
                    containsElements = true;
                    Console.WriteLine("yes");
                    break;
                }
            }

            if (!containsElements)
            {
                Console.WriteLine("no");
            }
        }
    }
}
