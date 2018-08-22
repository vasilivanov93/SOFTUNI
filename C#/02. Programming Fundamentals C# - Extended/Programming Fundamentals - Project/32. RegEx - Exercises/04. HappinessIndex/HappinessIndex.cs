using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace _04.HappinessIndex
{
   public class HappinessIndex
    {
       public static void Main()
        {
            string[] happyEmotes = ":), :D, ;), :*, :], ;], :}, ;}, (:, *:, c:, [:, [;"
                                    .Split(new[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries);

            string[] sadEmotes = ":(, D:, ;(, :[, ;[, :{, ;{, ):, :c, ]:, ];"
                                    .Split(new[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries);

            Regex happyPattern = new Regex(@"(\:\)|\:D|\;\)|\:\*|\:\]|\;\]|\:\}|\;\}|\*\:|c\:|\[\:|\[\;|\(\:)");
            Regex sadPattern = new Regex(@"(\:\(|D\:|\;\(|\:\[|\;\[|\:\{|\;\{|\)\:|\:c|\]\:|\]\;)");

            string inputLine = Console.ReadLine();

            MatchCollection happyMatches = happyPattern.Matches(inputLine);
            MatchCollection sadMatches = sadPattern.Matches(inputLine);

            int happyCount = 0;
            int sadCount = 0;

            foreach (Match happyMatch in happyMatches)
            {
                if (!sadEmotes.Contains(happyMatch.Value))
                {
                    happyCount++;
                }
            }

            foreach (Match sadMatch in sadMatches)
            {
                if (!happyEmotes.Contains(sadMatch.Value))
                {
                    sadCount++;
                }
            }

            double happyIndex = happyCount / (double)sadCount;
            string status = string.Empty;

            if (happyIndex >= 2)
            {
                status = ":D";
            }
            else if (happyIndex > 1)
            {
                status = ":)";
            }
            else if (happyIndex == 1)
            {
                status = ":|";
            }
            else if (happyIndex < 1)
            {
                status = ":(";
            }

            Console.WriteLine($"Happiness index: {happyIndex:F2} {status}");
            Console.WriteLine($"[Happy count: {happyCount}, Sad count: {sadCount}]");
        }
    }
}