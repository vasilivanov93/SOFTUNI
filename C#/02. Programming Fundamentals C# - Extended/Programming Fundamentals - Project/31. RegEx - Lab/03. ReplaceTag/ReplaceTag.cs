using System;
using System.Text.RegularExpressions;

namespace _03.ReplaceTag
{
    class ReplaceTag
    {
        static void Main(string[] args)
        {
            string text = Console.ReadLine();

            while (text != "end")
            {
                string pattern = @"<a.*?href.*?=(.*)>(.*?)<\/a>";
                Regex regex = new Regex(pattern);

                string replacement = @"[URL href=$1]$2[/URL]";
                string result = Regex.Replace(text, pattern, replacement);

                Console.WriteLine(result);

                text = Console.ReadLine();
            }
        }
    }
}