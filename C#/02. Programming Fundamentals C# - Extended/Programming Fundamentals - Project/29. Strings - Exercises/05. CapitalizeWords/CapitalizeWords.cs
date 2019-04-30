using System;
using System.Collections.Generic;

namespace _05.CapitalizeWords
{
   public class CapitalizeWords
    {
       public static void Main()
        {
            string inputLine = Console.ReadLine().ToLower();

            while (inputLine != "end")
            {
                string[] tokens = inputLine.Split(new[] 
                                            { ' ', '.', '!', ',', '?', '(', ')', '{', '}', '[', ']', ':', ';', '-', '/' }
                                            , StringSplitOptions.RemoveEmptyEntries);

                List<string> words = new List<string>();

                foreach (var word in tokens)
                {
                    string firstLetter = word.Substring(0, 1).ToUpper();
                    string secondPart = word.Substring(1);

                    string newWords = firstLetter + secondPart;

                    words.Add(newWords);
                }

                Console.WriteLine(string.Join(", ", words));

                inputLine = Console.ReadLine().ToLower();
            }
        }
    }
}