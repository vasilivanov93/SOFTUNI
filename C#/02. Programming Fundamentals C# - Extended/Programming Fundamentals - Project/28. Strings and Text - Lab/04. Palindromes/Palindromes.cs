using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _04.Palindromes
{
   public class Palindromes
    {
       public static void Main()
        {
            string[] words = Console.ReadLine()
                                    .Split(new[] { ' ', ',', '!', '?', '.' }
                                    , StringSplitOptions.RemoveEmptyEntries)
                                    .ToArray();

            StringBuilder reversedWord = new StringBuilder();
            SortedSet<string> palindromes = new SortedSet<string>();

            foreach (var word in words)
            {
                for (int i = word.Length - 1; i >= 0; i--)
                {
                    reversedWord.Append(word[i]);
                }

                int result = string.Compare(word, reversedWord.ToString());

                if (result == 0)
                {
                    palindromes.Add(word);
                }

                reversedWord.Clear();
            }

            Console.WriteLine(string.Join(", ", palindromes));
        }
    }
}
