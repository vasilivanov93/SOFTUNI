using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace _04.GUnit
{
    public class GUnit
    {
        public static void Main()
        {
            Regex validationRegex = new Regex(@"^([A-Z][a-zA-Z0-9]+) \| ([A-Z][a-zA-Z0-9]+) \| ([A-Z][a-zA-Z0-9]+)$");
            string inputLine = Console.ReadLine();
            Dictionary<string, Dictionary<string, List<string>>> classes = new Dictionary<string, Dictionary<string, List<string>>>();

            while (inputLine != "It's testing time!")
            {
                if (validationRegex.IsMatch(inputLine))
                {
                    Match match = validationRegex.Match(inputLine);

                    string className = match.Groups[1].Value;
                    string methodName = match.Groups[2].Value;
                    string unitTestName = match.Groups[3].Value;

                    if (!classes.ContainsKey(className))
                    {
                        classes[className] = new Dictionary<string, List<string>>();
                    }

                    if (!classes[className].ContainsKey(methodName))
                    {
                        classes[className][methodName] = new List<string>();
                    }

                    if (!classes[className][methodName].Contains(unitTestName))
                    {
                        classes[className][methodName].Add(unitTestName);
                    }                  
                }

                inputLine = Console.ReadLine();
            }

            Dictionary<string, Dictionary<string, List<string>>> sortedClasses = classes.OrderByDescending(x => x.Value.Values.Sum(y => y.Count))
                                                                                        .ThenBy(x => x.Value.Count)
                                                                                        .ThenBy(x => x.Key, StringComparer.Ordinal)
                                                                                        .ToDictionary(x => x.Key, x => x.Value);

            foreach (var classEntry in sortedClasses)
            {
                Console.WriteLine(classEntry.Key + ":");

                Dictionary<string, List<string>> sortedMethod = classEntry.Value.OrderByDescending(m => m.Value.Count)
                                                                                .ThenBy(m => m.Key, StringComparer.Ordinal)
                                                                                .ToDictionary(x => x.Key, x => x.Value);

                foreach (var methodEntry in sortedMethod)
                {
                    Console.WriteLine("##" + methodEntry.Key);

                    List<string> sortedUnitTest = methodEntry.Value.OrderBy(u => u.Length)
                                                                   .ThenBy(u => u, StringComparer.Ordinal)
                                                                   .ToList();

                    foreach (var unitTestEntry in sortedUnitTest)
                    {
                        Console.WriteLine("####" + unitTestEntry);
                    }
                }
            }
        }
    }
}