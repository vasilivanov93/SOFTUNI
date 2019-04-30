using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.SoftUniKaraoke
{
   public class SoftUniKaraoke
    {
       public static void Main()
        {
            string[] participants = Console.ReadLine().Split(',')
                                                      .Select(x => x.Trim())
                                                      .ToArray();

            string[] songs = Console.ReadLine().Split(',')
                                                      .Select(x => x.Trim())
                                                      .ToArray();

            Dictionary<string, SortedSet<string>> participantAwards = new Dictionary<string, SortedSet<string>>();

            string line = Console.ReadLine();

            while (line != "dawn")
            {
                string[] tokens = line.Split(',')
                                      .Select(x => x.Trim())
                                      .ToArray();

                string participant = tokens[0];
                string song = tokens[1];
                string award = tokens[2];

                if (songs.Contains(song) && participants.Contains(participant))
                {
                    if (!participantAwards.ContainsKey(participant))
                    {
                        participantAwards[participant] = new SortedSet<string>();
                    }

                    participantAwards[participant].Add(award);
                }

                line = Console.ReadLine();
            }

            if (!participantAwards.Any())
            {
                Console.WriteLine("No awards");
                return;
            }

            Dictionary<string, SortedSet<string>> sortedParticipantAwards = participantAwards.OrderByDescending(x => x.Value.Count())
                                                                                             .ThenBy(x => x.Key)
                                                                                             .ToDictionary(x => x.Key, x => x.Value);

            foreach (var participantAward in sortedParticipantAwards)
            {
                string participant = participantAward.Key;
                var awards = participantAward.Value;

                Console.WriteLine($"{participant}: {awards.Count} awards");

                foreach (var award in awards)
                {
                    Console.WriteLine($"--{award}");
                }
            }
        }
    }
}