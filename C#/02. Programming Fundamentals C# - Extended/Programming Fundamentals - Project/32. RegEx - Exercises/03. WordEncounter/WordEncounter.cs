using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace _03.WordEncounter
{
   public class WordEncounter
    {
       public static void Main()
        {
            string filter = Console.ReadLine();
            string line = Console.ReadLine();

            Regex firstRegex = new Regex(@"\w+");

            char charFilter = filter[0];
            int numberfilter = int.Parse(filter[1].ToString());

            List<string> result = new List<string>();

            Regex secondRegex = new Regex("[A-Z].+[.!?]");

            while (line != "end")
            {
                string first = secondRegex.Match(line).ToString();

                if (first == line)
                {
                    MatchCollection words = firstRegex.Matches(line);

                    foreach (Match word in words)
                    {
                        int counter = 0;

                        foreach (var symbol in word.ToString())
                        {
                            if (symbol == charFilter)
                            {
                                counter++;
                            }
                        }

                        if (counter >= numberfilter)
                        {
                            result.Add(word.ToString());
                        }
                    }
                }

                line = Console.ReadLine();
            }

            Console.WriteLine(string.Join(", ", result));
        }
    }
}