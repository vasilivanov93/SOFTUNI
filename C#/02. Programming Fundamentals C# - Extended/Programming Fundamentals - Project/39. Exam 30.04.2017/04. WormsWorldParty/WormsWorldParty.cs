using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.WormsWorldParty
{
   public class WormsWorldParty
    {
       public static void Main()
        {
            string inputLine = Console.ReadLine();

            Dictionary<string, Dictionary<string, long>> worms = new Dictionary<string, Dictionary<string, long>>();

            while (inputLine != "quit")
            {
                string[] tokens = inputLine.Split(new string[] { " -> " }, StringSplitOptions.RemoveEmptyEntries).ToArray();

                string wormName = tokens[0];
                string teamName = tokens[1];
                long wormScore = long.Parse(tokens[2]);


                if (!worms.ContainsKey(teamName))
                {
                    worms[teamName] = new Dictionary<string, long>();
                }

                if (!worms[teamName].ContainsKey(wormName))
                {
                    worms[teamName][wormName] = 0;
                }
              
                worms[teamName][wormName] = wormScore;

                inputLine = Console.ReadLine();
            }

            Dictionary<string, Dictionary<string, long>> sortedWorms = worms.OrderByDescending(x => x.Value.Values.Sum())
                                                                            .ThenByDescending(x => x.Value.Values.Average())
                                                                            .ToDictionary(x => x.Key, x => x.Value);
            int count = 1;

            foreach (var kvp in sortedWorms)
            {
                string teamName = kvp.Key;
                long totalScore = kvp.Value.Values.Sum();

                Console.WriteLine($"{count++}. Team: {teamName} - {totalScore}");

                foreach (var kvp1 in worms[teamName].OrderByDescending(x => x.Value))
                {
                    Console.WriteLine($"###{kvp1.Key} : {kvp1.Value}");
                }
            }
        }
    }
}