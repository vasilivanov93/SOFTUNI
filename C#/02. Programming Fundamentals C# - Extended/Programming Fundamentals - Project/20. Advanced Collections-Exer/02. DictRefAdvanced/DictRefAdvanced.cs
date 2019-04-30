using System;
using System.Collections.Generic;

namespace _02.DictRefAdvanced
{
   public class DictRefAdvanced
    {
       public static void Main()
        {
            Dictionary<string, List<int>> dictionary = new Dictionary<string, List<int>>();
            string inputLine = Console.ReadLine();

            while (inputLine != "end")
            {
                string[] tokens = inputLine.Split(new[] { ' ', '-', '>', ',' }, StringSplitOptions.RemoveEmptyEntries);

                string name = tokens[0];
                int number = -1;

                if (int.TryParse(tokens[1], out number))
                {
                    if (!dictionary.ContainsKey(name))
                    {
                        dictionary[name] = new List<int>();
                    }

                    for (int i = 1; i < tokens.Length; i++)
                    {
                        dictionary[name].Add(int.Parse(tokens[i]));
                    }
                }
                else
                {
                    string otherName = tokens[1];

                    if (dictionary.ContainsKey(otherName))
                    {
                        dictionary[name] = new List<int>(dictionary[otherName]);
                    }
                }

                inputLine = Console.ReadLine();
            }
            foreach (var nameNumbersPair in dictionary)
            {
                string name = nameNumbersPair.Key;
                List<int> numbers = nameNumbersPair.Value;

                Console.WriteLine($"{name} === {string.Join(", ", numbers)}");
            }
        }
    }
}
