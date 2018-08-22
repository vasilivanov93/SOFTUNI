using System;
using System.Collections.Generic;
using System.Linq;

namespace _03.Pyramidic
{
   public class Pyramidic
    {
       public static void Main()
        {
            List<string> pyramids = new List<string>();

            int n = int.Parse(Console.ReadLine());
            string[] lines = new string[n];

            for (int i = 0; i < n; i++)
            {
                lines[i] = Console.ReadLine();
            }

            for (int i = 0; i < lines.Length; i++)
            {
                string currentLine = lines[i];

                for (int j = 0; j < currentLine.Length; j++)
                {
                    char currentSymbol = currentLine[j];
                    int layer = 1;
                    string currentPyramid = string.Empty;

                    for (int k = i; k < lines.Length; k++)
                    {
                        string currentLayer = new string(currentSymbol, layer);

                        if (lines[k].Contains(currentLayer))
                        {
                            currentPyramid += currentLayer + Environment.NewLine;
                        }
                        else
                        {
                            break;
                        }

                        layer += 2;
                    }

                    pyramids.Add(currentPyramid.Trim());
                }
            }

            Console.WriteLine(pyramids.OrderByDescending(x => x.Length).First());
        }
    }
}