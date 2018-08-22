using System;
using System.Collections.Generic;

namespace _02.OddOccurrences
{
    public class OddOccurrences
    {
        public static void Main()
        {
            string input = Console.ReadLine().ToLower();
            string[] words = input.Split(' ');
            Dictionary<string, int> counts = new Dictionary<string, int>();

            foreach (string word in words)
            {
                if (counts.ContainsKey(word))
                {
                    counts[word]++;
                }
                else
                {
                    counts[word] = 1;
                }
            }

            List<string> results = new List<string>();

            foreach (KeyValuePair<string, int> pair in counts)
            {
                if (pair.Value % 2 == 1)
                {
                    results.Add(pair.Key);
                }
            }

            Console.WriteLine(string.Join(", ", results));
        }
    }
}
