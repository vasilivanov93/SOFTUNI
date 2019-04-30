using System;
using System.Collections.Generic;

namespace _02.DictRef
{
   public class DictRef
    {
       public static void Main()
        {
            string line = Console.ReadLine();
            Dictionary<string, int> resultDict = new Dictionary<string, int>();

            while (line != "end")
            {
                string[] tokens = line.Split();
                string firstElemen = tokens[0];
                string lastElement = tokens[tokens.Length - 1];

                int number = 0;

                if (int.TryParse(lastElement, out number))
                {
                    resultDict[firstElemen] = number;
                }
                else
                {
                    if (resultDict.ContainsKey(lastElement))
                    {
                        int referencedValue = resultDict[lastElement];
                        resultDict[firstElemen] = referencedValue;
                    }
                }

                line = Console.ReadLine();
            }

            foreach (var itemPricePair in resultDict)
            {
                string item = itemPricePair.Key;
                int price = itemPricePair.Value;

                Console.WriteLine($"{item} === {price}");
            }
        }
    }
}
