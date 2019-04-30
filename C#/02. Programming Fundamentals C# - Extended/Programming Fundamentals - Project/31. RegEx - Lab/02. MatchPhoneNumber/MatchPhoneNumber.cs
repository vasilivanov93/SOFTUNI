using System;
using System.Text.RegularExpressions;

namespace _02.MatchPhoneNumber
{
    class MatchPhoneNumber
    {
        static void Main(string[] args)
        {
            string pattern = @"\+\d{3}(?:\s|-)\d{1}(?:\s|-)\d{3}(?:\s|-)\d{4}";

            Regex regex = new Regex(pattern);

            string phoneNumber = Console.ReadLine();

            var match = regex.Match(phoneNumber);

            Console.WriteLine(match);
        }
    }
}
