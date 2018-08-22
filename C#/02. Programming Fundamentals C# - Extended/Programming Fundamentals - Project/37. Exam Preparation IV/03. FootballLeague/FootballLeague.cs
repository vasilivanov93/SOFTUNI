using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace _03.FootballLeague
{
    public class FootballLeague
    {
        public class Score
        {
            public decimal Points { get; set; }

            public decimal Goals { get; set; }
        }

        public static void Main()
        {
            string key = Regex.Escape(Console.ReadLine());

            string pattern = $@"^.*(?:{key})(?<team1Name>[a-zA-Z]*)(?:{key}).* .*(?:{key})(?<team2Name>[a-zA-Z]*)(?:{key}).* (?<team1Scores>\d+):(?<team2Scores>\d+).*$";
            Regex keyRegex = new Regex(pattern);

            Dictionary<string, Score> teamScores = new Dictionary<string, Score>();

            string inputLine = Console.ReadLine();

            while (inputLine != "final")
            {
                Match match = keyRegex.Match(inputLine);

                string team1Name = new string(match.Groups["team1Name"].Value.ToUpper().Reverse().ToArray());
                string team2Name = new string(match.Groups["team2Name"].Value.ToUpper().Reverse().ToArray());
                int team1Goals = int.Parse(match.Groups["team1Scores"].Value);
                int team2Goals = int.Parse(match.Groups["team2Scores"].Value);

                if (!teamScores.ContainsKey(team1Name))
                {
                    teamScores[team1Name] = new Score();
                }

                if (!teamScores.ContainsKey(team2Name))
                {
                    teamScores[team2Name] = new Score();
                }

                if (team1Goals > team2Goals)
                {
                    teamScores[team1Name].Points += 3;
                }
                else if (team1Goals == team2Goals)
                {
                    teamScores[team1Name].Points++;
                    teamScores[team2Name].Points++;
                }
                else
                {
                    teamScores[team2Name].Points += 3;
                }

                teamScores[team1Name].Goals += team1Goals;
                teamScores[team2Name].Goals += team2Goals;

                inputLine = Console.ReadLine();
            }

            Console.WriteLine("League standings:");

            Dictionary<string, Score> leagueStandings = teamScores.OrderByDescending(x => x.Value.Points)
                                                                   .ThenBy(x => x.Key)
                                                                   .ToDictionary(x => x.Key, x => x.Value);

            int count = 1;

            foreach (var leagueStanding in leagueStandings)
            {
                string teamName = leagueStanding.Key;
                var teamPoints = leagueStanding.Value;

                Console.WriteLine($"{count++}. {teamName} {teamPoints.Points}");
            }

            Console.WriteLine("Top 3 scored goals:");

            Dictionary<string, Score> top3ScoresGoals = teamScores.OrderByDescending(x => x.Value.Goals)
                                                                  .ThenBy(x => x.Key)
                                                                  .Take(3)
                                                                  .ToDictionary(x => x.Key, x => x.Value); ;

            foreach (var top3ScoresGoal in top3ScoresGoals)
            {
                string teamName = top3ScoresGoal.Key;
                var teamGoals = top3ScoresGoal.Value;

                Console.WriteLine($"- {teamName} -> {teamGoals.Goals}");
            }
        }
    }   
}