using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.RoliTheCoder
{
   public class RoliTheCoder
    {
       public static void Main()
        {
            string inputLine = Console.ReadLine();
            
            Dictionary<int, string> eventsById = new Dictionary<int, string>();
            Dictionary<string, List<string>> organizer = new Dictionary<string, List<string>>();

            while (inputLine != "Time for Code")
            {
                if (inputLine.Contains("#"))
                {
                    string[] tokens = inputLine
                        .Split(new[] { ' ', '#' }, StringSplitOptions.RemoveEmptyEntries)
                        .ToArray();

                    int ID = int.Parse(tokens[0]);
                    string eventName = tokens[1];

                    List<string> participants = new List<string>();

                    for (int i = 2; i < tokens.Length; i++)
                    {
                        participants.Add(tokens[i]);
                    }

                    if (!eventsById.ContainsKey(ID))
                    {
                        eventsById.Add(ID, eventName);
                        organizer.Add(eventName, participants);
                    }
                    else if (eventsById[ID] == eventName)
                    {
                        organizer[eventName].AddRange(participants);
                    }
                }

                inputLine = Console.ReadLine();
            }

            foreach (var events in organizer.OrderByDescending(x => x.Value.Distinct().Count()).ThenBy(x => x.Key))
            {
                Console.WriteLine($"{events.Key} - {events.Value.Distinct().Count()}");

                foreach (var participant in events.Value.OrderBy(x => x).Distinct())
                {
                    Console.WriteLine(participant);
                }
            }
        }
    }
}