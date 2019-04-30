using System;
using System.Collections.Generic;
using System.Linq;

namespace _06.InsertionSortUsingList
{
   public class InsertionSortUsingList
    {
       public static void Main()
        {
            List<int> numbers = Console.ReadLine()
                                        .Split(' ')
                                        .Select(int.Parse)
                                        .ToList();

            for (int i = 0; i < numbers.Count - 1; i++)
            {
                int nextNumber = i + 1;

                while (nextNumber > 0)
                {
                    if (numbers[nextNumber] < numbers[nextNumber - 1])
                    {
                        int temp = numbers[nextNumber];
                        numbers[nextNumber] = numbers[nextNumber - 1];
                        numbers[nextNumber - 1] = temp;
                    }

                    nextNumber--;
                }
            }

            Console.WriteLine(string.Join(" ", numbers));
        }
    }
}
