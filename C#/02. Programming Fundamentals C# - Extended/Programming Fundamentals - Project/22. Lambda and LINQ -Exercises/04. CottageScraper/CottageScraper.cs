using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.CottageScraper
{
   public class CottageScraper
    {
       public static void Main()
        {
            Dictionary<string, List<int>> treeTypesLength = new Dictionary<string, List<int>>();
            string input = Console.ReadLine();

            while (input != "chop chop")
            {
                string[] tokens = input.Split(new char[] { ' ', '-', '>' }, StringSplitOptions.RemoveEmptyEntries).ToArray();
                string tree = tokens[0];
                int length = int.Parse(tokens[1]);

                if (!treeTypesLength.ContainsKey(tree))
                {
                    treeTypesLength[tree] = new List<int>();
                }

                treeTypesLength[tree].Add(length);

                input = Console.ReadLine();
            }

            string typesTree = Console.ReadLine();
            int minLength = int.Parse(Console.ReadLine());

            int totalMeter = 0;
            int count = 0;

            foreach (var type in treeTypesLength.Values)
            {
                totalMeter += type.Sum();
                count += type.Count();
            }

            double pricePerMeter = Math.Round((totalMeter / (double)count), 2);

            List<int> tallerThanMinLength = new List<int>();

            foreach (var type in treeTypesLength)
            {
                if (type.Key == typesTree)
                {
                    tallerThanMinLength = type.Value
                        .Where(x => x >= minLength)
                        .ToList();
                }
            }

            double usedLogsPrice = Math.Round(tallerThanMinLength.Sum() * pricePerMeter, 2);

            List<int> unUsedLogs = new List<int>();

            foreach (var type in treeTypesLength)
            {
                if (type.Key != typesTree)
                {
                    foreach (var item in type.Value)
                    {
                        unUsedLogs.Add(item);
                    }
                }
                else
                {
                    foreach (var item in type.Value)
                    {
                        if (item < minLength)
                        {
                            unUsedLogs.Add(item);
                        }
                    }
                }
            }

            double unUsedLogsPrice = Math.Round(unUsedLogs.Sum() * pricePerMeter * 0.25, 2);

            Console.WriteLine($"Price per meter: ${pricePerMeter:F2}");
            Console.WriteLine($"Used logs price: ${usedLogsPrice:F2}");
            Console.WriteLine($"Unused logs price: ${unUsedLogsPrice:F2}");
            Console.WriteLine($"CottageScraper subtotal: ${(usedLogsPrice + unUsedLogsPrice):F2}");
        }
    }
}
