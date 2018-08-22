using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace _04.WinningTicket
{
   public class WinningTicket
    {
       public static void Main()
        {
            
            string[] tickets = Console.ReadLine().Split(',')
                                                .Select(x => x.Trim())
                                                .ToArray();
            string pattern = @"([$@^#])\1{5,}";
            Regex ticketRegex = new Regex(pattern);

            foreach (var ticket in tickets)
            {
                if (ticket.Length != 20)
                {
                    Console.WriteLine("invalid ticket");
                    continue;
                }

                string leftHaft = ticket.Substring(0, ticket.Length / 2);
                string rightHaft = ticket.Substring(ticket.Length / 2);

                Match leftMatch = ticketRegex.Match(leftHaft);
                Match rightMatch = ticketRegex.Match(rightHaft);

                if (leftMatch.Success && rightMatch.Success)
                {
                    char winningSymbol = leftMatch.Value[0];
                    int shorterMatch = Math.Min(leftMatch.Length, rightMatch.Length);

                    string jackpot = string.Empty;

                    if (shorterMatch == 10)
                    {
                        jackpot = "Jackpot!";
                    }

                    Console.WriteLine($"ticket \"{ticket}\" - {shorterMatch}{winningSymbol} {jackpot}");
                }
                else
                {
                    Console.WriteLine($"ticket \"{ticket}\" - no match");     
                }
            }
        }
    }
}