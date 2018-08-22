using System;
using System.Linq;
using System.Text;
using System.Numerics;
using System.Globalization;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace ConsoleApplication1
{
    public class Program
    {
        public static void Main()
        {
            {
                string inputLine = Console.ReadLine();
                string pattern = Console.ReadLine();

                while (true)
                {
                    int lastIndex = inputLine.LastIndexOf(pattern);
                    int firstIndex = inputLine.IndexOf(pattern);

                    if (firstIndex != -1 && lastIndex != -1 && firstIndex != lastIndex && pattern.Length > 0)
                    {
                        Console.WriteLine("Shaked it.");
                        inputLine = inputLine.Remove(firstIndex, pattern.Length);
                        lastIndex = inputLine.LastIndexOf(pattern);
                        inputLine = inputLine.Remove(lastIndex, pattern.Length);
                    }
                    else
                    {
                        Console.WriteLine("No shake.");
                        Console.WriteLine(inputLine);
                        break;
                    }

                    int indexToRemove = pattern.Length / 2;
                    pattern = pattern.Remove(indexToRemove, 1);
                }
            }
        }
    }
}