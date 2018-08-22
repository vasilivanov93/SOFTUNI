using System;
using System.Collections.Generic;

namespace _01.SerializeString
{
   public class SerializeString
    {
       public static void Main()
        {
            string inputLine = Console.ReadLine();
            List<char> symbols = new List<char>();

            foreach (var letter in inputLine)
            {
                if (!symbols.Contains(letter))
                {
                    symbols.Add(letter);
                }
            }

            foreach (var symbol in symbols)
            {
                List<int> counts = new List<int>();

                int index = inputLine.IndexOf(symbol);
                counts.Add(index);

                while (true)
                {
                    index = inputLine.IndexOf(symbol, index + 1);

                    if (index == -1)
                    {
                        break;
                    }

                    counts.Add(index);
                }

                Console.WriteLine($"{symbol}:{string.Join("/", counts)}");
            }
        }
    }
}