using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.IntegerInsertion
{
   public class IntegerInsertion
    {
       public static void Main()
        {
            List<int> list = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            string line = Console.ReadLine();

            while (line != "end")
            {
                char firstDigit = line[0];

                list.Insert(int.Parse(firstDigit.ToString()), int.Parse(line));

                line = Console.ReadLine();
            }
			
            Console.WriteLine(string.Join(" ", list));
        }
    }
}
