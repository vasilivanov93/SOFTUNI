using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.WormIpsum
{
  public class WormIpsum
    {
       public static void Main()
        {
            string inputLine = Console.ReadLine();

            string result = string.Empty;
            
            while (inputLine != "Worm Ipsum")
            {
                string[] tokens = inputLine.Split(new[] { '.' }, StringSplitOptions.RemoveEmptyEntries).ToArray();

                string sentence = tokens[0];

                if (tokens.Length != 1)
                {
                    continue;
                }
                else
                {
                    string[] words = sentence.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).ToArray();

                    foreach (var word in words)
                    {
                        char[] equalChar = word.ToCharArray();

                        foreach (var symbol in equalChar)
                        {
                            symbol = word.Length;
                        }
                    }

                    Console.WriteLine($"{string.Join(" ", words)}.");
                }

                inputLine = Console.ReadLine();
            }
        }
    }
}
