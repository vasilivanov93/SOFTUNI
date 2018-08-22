using System;
using System.Collections.Generic;
using System.Linq;

namespace _03.ForumTopics
{
   public class ForumTopics
    {
       public static void Main()
        {
            string input = Console.ReadLine();
            Dictionary<string, HashSet<string>> forumTopics = new Dictionary<string, HashSet<string>>();

            while (input != "filter")
            {
                string[] tokens = input.Split(new char[] { '-', '>', ',', ' ' }, StringSplitOptions.RemoveEmptyEntries).ToArray();
                string nameTopics = tokens[0];

                if (!forumTopics.ContainsKey(nameTopics))
                {
                    forumTopics[nameTopics] = new HashSet<string>();
                }

                for (int i = 1; i < tokens.Length; i++)
                {
                    forumTopics[nameTopics].Add(tokens[i]);
                }

                input = Console.ReadLine();
            }

            input = Console.ReadLine();
			
            List<string> tags = new List<string>();
			
            string[] sequenceOfTags = input.Split(new char[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries).ToArray();

            for (int i = 0; i < sequenceOfTags.Length; i++)
            {
                tags.Add(sequenceOfTags[i]);
            }

            foreach (var name in forumTopics.Keys)
            {
                bool isContain = true;

                for (int i = 0; i < tags.Count; i++)
                {
                    if (!forumTopics[name].Contains(tags[i]))
                    {
                        isContain = false;
                    }
                }

                if (isContain)
                {
                    Console.WriteLine($"{name} | #{string.Join(", #", forumTopics[name])}");
                }
            }
        }
    }
}
