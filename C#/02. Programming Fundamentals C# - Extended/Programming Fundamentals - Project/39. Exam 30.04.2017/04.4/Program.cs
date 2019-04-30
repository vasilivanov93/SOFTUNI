using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04._4
{
    class Program
    {
        public class Worm
        {
            public string WormName { get; set; }

            public string WormTeam { get; set; }

            public int Score { get; set; }
        }

        public static void Main()
        {
            string inputLine = Console.ReadLine();
            List<Worm> worms = new List<Worm>();

            while (inputLine != "quit")
            {
                string[] tokens = inputLine.Split(new string[] { " -> " }, StringSplitOptions.RemoveEmptyEntries).ToArray();

                string wormName = tokens[0];
                string teamName = tokens[1];
                int wormScore = int.Parse(tokens[2]);

                Worm newWorm = new Worm();

                newWorm.WormName = wormName;
                newWorm.WormTeam = teamName;
                newWorm.Score = wormScore;

                worms.Add(newWorm);


                inputLine = Console.ReadLine();
            }

            List<Worm> sortedWorms = worms.OrderByDescending(x => x.Value.Values.Sum())
                                                                           .ThenByDescending(x => x.Value.Values.Average())
                                                                           .ToDictionary(x => x.Key, x => x.Value);
            int count = 1;

            foreach (var kvp in sortedWorms)
            {
                string teamName = kvp.Key;
                int totalScore = kvp.Value.Values.Sum();

                Console.WriteLine($"{count++}. Team: {teamName} - {totalScore}");

                Dictionary<string, Dictionary<string, int>> sorted1Worms = worms.OrderByDescending(x => x.Value)
                                                                            .ToDictionary(x => x.Key, x => x.Value);

                foreach (var kvp1 in worms)
                {
                    string wormName = kvp1.Value;
                    //int wormScore = kvp1.Value.Values.Count;

                    Console.WriteLine($"###{wormName}");
                }




            }
        }
    }
}
