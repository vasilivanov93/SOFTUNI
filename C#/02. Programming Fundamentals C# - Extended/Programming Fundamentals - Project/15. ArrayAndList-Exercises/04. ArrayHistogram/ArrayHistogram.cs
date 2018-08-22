using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.ArrayHistogram
{
   public class ArrayHistogram
    {
       public static void Main(string[] args)
        {
            string[] words = Console.ReadLine().Split(' ');

            List<string> foundWords = new List<string>();
            List<int> wordCount = new List<int>();

            for (int i = 0; i < words.Length; i++)
            {
                string currentWord = words[i];

                if (foundWords.Contains(currentWord))
                {
                    int wordIndex = foundWords.IndexOf(currentWord);
                    wordCount[wordIndex]++;
                }
                else
                {
                    foundWords.Add(currentWord);
                    wordCount.Add(1);
                }
            }

            bool hasSwapped = true;
            
            while (hasSwapped)
            {
                hasSwapped = false;

                for (int i = 0; i < wordCount.Count - 1; i++)
                {
                    if (wordCount[i] < wordCount[i + 1])
                    {
                        int temp = wordCount[i];
                        wordCount[i] = wordCount[i + 1];
                        wordCount[i + 1] = temp;
            
                        string tempWord = foundWords[i];
                        foundWords[i] = foundWords[i + 1];
                        foundWords[i + 1] = tempWord;
            
                        hasSwapped = true;
                    }
                }
            }

            for (int i = 0; i < foundWords.Count; i++)
            {
                double currentPercentage = (wordCount[i] * 100.0) / words.Length;
                Console.WriteLine($"{foundWords[i]} -> {wordCount[i]} times ({currentPercentage:F2}%)");
            }
        }
    }
}
