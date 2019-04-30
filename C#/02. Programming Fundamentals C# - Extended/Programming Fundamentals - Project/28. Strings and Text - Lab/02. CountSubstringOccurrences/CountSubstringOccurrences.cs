using System;

namespace _02.CountSubstringOccurrences
{
   public class CountSubstringOccurrences
    {
       public static void Main()
        {
            string input = Console.ReadLine().ToLower();
            string pattern = Console.ReadLine().ToLower();

            int count = 0;

            int index = input.IndexOf(pattern);

            while (index != -1)
            {
                count++;
                index = input.IndexOf(pattern, index + 1);
            }

            Console.WriteLine(count);
        }
    }
}
