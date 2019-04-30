using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _02.HornetComm
{
    public class HornetComm
    {
        public static void Main()
        {
            List<string> messages = new List<string>();
            List<string> broadcast = new List<string>();

            while (true)
            {
                string inputLine = Console.ReadLine();

                if (inputLine == "Hornet is Green")
                {
                    break;
                }

                string[] tokens = inputLine.Split(new string[] { " <-> " }, StringSplitOptions.RemoveEmptyEntries).ToArray();

                if (tokens.Length != 2)
                {
                    continue;
                }

                string firstQuery = tokens[0];
                string secondQuery = tokens[1];

                if (firstQuery.All(char.IsDigit) && secondQuery.All(char.IsLetterOrDigit))
                {
                    string reversed = new string(firstQuery.Reverse().ToArray());

                    messages.Add($"{reversed} -> {secondQuery}");
                }
                else if (firstQuery.All(s => !char.IsDigit(s)) && secondQuery.All(char.IsLetterOrDigit))
                {
                    StringBuilder transformed = new StringBuilder();

                    foreach (var symbol in secondQuery)
                    {
                        if (char.IsUpper(symbol))
                        {
                            transformed.Append(symbol.ToString().ToLower());
                        }
                        else if (char.IsLower(symbol))
                        {
                            transformed.Append(symbol.ToString().ToUpper());
                        }
                        else
                        {
                            transformed.Append(symbol);
                        }
                    }

                    broadcast.Add($"{transformed} -> {firstQuery}");
                }
            }

            Console.WriteLine("Broadcasts:");

            if (!broadcast.Any())
            {
                Console.WriteLine("None");
            }
            else
            {
                foreach (var item in broadcast)
                {
                    Console.WriteLine(item);
                }
            }

            Console.WriteLine("Messages:");

            if (!messages.Any())
            {
                Console.WriteLine("None");
            }
            else
            {
                foreach (var item in messages)
                {
                    Console.WriteLine(item);
                }
            }
        }
    }
}