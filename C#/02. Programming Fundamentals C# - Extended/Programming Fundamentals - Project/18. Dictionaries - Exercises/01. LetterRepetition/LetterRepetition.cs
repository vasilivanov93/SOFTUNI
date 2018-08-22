using System;
using System.Collections.Generic;

namespace _01.LetterRepetition
{
   public class LetterRepetition
    {
       public static void Main()
        {
            string input = Console.ReadLine();
            Dictionary<char, int> lettersCount = new Dictionary<char, int>();

            foreach (var letter in input)
            {
                if (!lettersCount.ContainsKey(letter))
                {
                    lettersCount[letter] = 0;
                }

                lettersCount[letter]++;
            }

            foreach (var letterCountPait in lettersCount)
            {
                char letter = letterCountPait.Key;
                int count = letterCountPait.Value;
                Console.WriteLine($"{letter} -> {count}");
            }
        }
    }
}
