using System;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace _03.RageQuit
{
   public class RageQuit
    {
       public static void Main()
        {
            string inputLine = Console.ReadLine();

            string pattern = @"(\D+)(\d+)";
            Regex regex = new Regex(pattern);

            MatchCollection matchInputLine = regex.Matches(inputLine);

            StringBuilder result = new StringBuilder();

            foreach (Match mach in matchInputLine)
            {
                string symbol = mach.Groups[1].Value;
                int digit = int.Parse(mach.Groups[2].Value);

                for (int i = 0; i < digit; i++)
                {
                    result.Append(symbol.ToUpper());
                } 
            }

            int unique = result.ToString().Distinct().Count();

            Console.WriteLine($"Unique symbols used: {unique}");
            Console.WriteLine($"{result}");
        }
    }
}