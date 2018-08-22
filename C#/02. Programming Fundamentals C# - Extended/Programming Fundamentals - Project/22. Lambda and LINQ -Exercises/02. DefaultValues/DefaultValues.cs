using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.DefaultValues
{
   public class DefaultValues
    {
       public static void Main()
        {
            Dictionary<string, string> dictionary = new Dictionary<string, string>();
            string inputLine = Console.ReadLine();

            while (inputLine != "end")
            {
                string[] tokens = inputLine.Split(new[] { ' ', '-', '>' }, StringSplitOptions.RemoveEmptyEntries);

                string key = tokens[0];
                string value = tokens[1];

                dictionary[key] = value;

                inputLine = Console.ReadLine();
            }

            string defaultValue = Console.ReadLine();

            Dictionary<string, string> unchangeValues = dictionary.Where(x => x.Value != "null")
                                                                  .OrderByDescending(x => x.Value.Length)
                                                                  .ToDictionary(x => x.Key, x => x.Value);

            Dictionary<string, string> changeValues = dictionary.Where(x => x.Value == "null")
                                                                .ToDictionary(x => x.Key, x => defaultValue);

            foreach (var entry in unchangeValues)
            {
                Console.WriteLine($"{entry.Key} <-> {entry.Value}");
            }

            foreach (var entry in changeValues)
            {
                Console.WriteLine($"{entry.Key} <-> {entry.Value}");
            }
        }
    }
}
