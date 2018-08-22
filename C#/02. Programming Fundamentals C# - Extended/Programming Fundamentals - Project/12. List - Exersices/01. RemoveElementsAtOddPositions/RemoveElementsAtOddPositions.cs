using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.RemoveElementsAtOddPositions
{
    public class RemoveElementsAtOddPositions
    {
        public static void Main()
        {
            {
                string[] words = Console.ReadLine().Split(' ');
                List<string> result = new List<string>(words);

                for (int i = 0; i < words.Length - 1; i++)
                {
                    if (i % 2 == 0)
                    {
                        result.Add(words[i]);
                    }
                }

                Console.WriteLine(string.Join("", result));
            }
        }
    }
}
