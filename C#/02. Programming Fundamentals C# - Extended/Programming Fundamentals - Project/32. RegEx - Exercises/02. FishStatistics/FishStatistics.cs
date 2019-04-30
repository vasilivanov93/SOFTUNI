using System;
using System.Text.RegularExpressions;

namespace _02.FishStatistics
{
   public class FishStatistics
    {
       public static void Main()
        {
            string inputLine = Console.ReadLine();

            Regex regex = new Regex(@"(>*)<(\(+)('|x|-)>");

            MatchCollection matches = regex.Matches(inputLine);

            bool validFishes = regex.IsMatch(inputLine);

            int count = 1;

            foreach (Match match in matches)
            {
                string TheFish = match.Value;

                int Tail = match.Groups[1].Length;
                int Body = match.Groups[2].Length;
                string status = match.Groups[3].Value;

                Console.WriteLine($"Fish {count}: {TheFish}");

                if (Tail > 5)
                {
                    Console.WriteLine($"  Tail type: Long ({Tail * 2} cm)");
                }
                else if (Tail > 1 && Tail <= 5)
                {
                    Console.WriteLine($"  Tail type: Medium ({Tail * 2} cm)");
                }
                else if (Tail == 1)
                {
                    Console.WriteLine($"  Tail type: Short ({Tail * 2} cm)");
                }
                else if (Tail == 0)
                {
                    Console.WriteLine("  Tail type: None");
                }

                if (Body > 10)
                {
                    Console.WriteLine($"  Body type: Long ({Body * 2} cm)");
                }
                else if (Body > 5 && Body <= 10)
                {
                    Console.WriteLine($"  Body type: Medium ({Body * 2} cm)");
                }
                else if (Body <= 5)
                {
                    Console.WriteLine($"  Body type: Short ({Body * 2} cm)");
                }

                if (status == "'")
                {
                    Console.WriteLine("  Status: Awake");
                }
                else if (status == "-")
                {
                    Console.WriteLine("  Status: Asleep");
                }
                else if (status == "x")
                {
                    Console.WriteLine("  Status: Dead");
                }

                count++;
            }

            if (!validFishes)
            {
                Console.WriteLine("No fish found.");
            }
        }
    }
}
