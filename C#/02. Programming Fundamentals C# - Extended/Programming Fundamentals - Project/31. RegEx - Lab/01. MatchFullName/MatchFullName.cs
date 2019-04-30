using System;
using System.Text.RegularExpressions;

namespace _01.MatchFullName
{
   public class MatchFullName
    {
       public static void Main()
        {
            string fullName = Console.ReadLine();

            string pattern = @"[A-Z][a-z]+\s[A-Z][a-z]+";

            Regex regex = new Regex(pattern);

            Match match = regex.Match(fullName);

            Console.WriteLine(match);
        }
    }
}
