using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace _01.Cards
{
   public class Cards
    {
       public static void Main()
        {
            string inputCards = Console.ReadLine();

            string pattern = @"([1]?[0-9AJKQ])([SHDC])";
            Regex cardsRegex = new Regex(pattern);

            MatchCollection matchedCards = cardsRegex.Matches(inputCards);

            List<string> validCard = new List<string>();

            foreach (Match match in matchedCards)
            {
                int power = 0;

                if (int.TryParse(match.Groups[1].Value, out power))
                {
                    if (power < 2 || power > 10) 
                    {
                        continue;
                    }
                }

                validCard.Add(match.Value); 
            }
            Console.WriteLine(string.Join(", ", validCard));
        }
    }
}