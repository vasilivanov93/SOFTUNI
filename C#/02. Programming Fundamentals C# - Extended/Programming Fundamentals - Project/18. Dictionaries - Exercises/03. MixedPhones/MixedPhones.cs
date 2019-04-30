using System;
using System.Collections.Generic;

namespace _03.MixedPhones
{
   public class MixedPhones
    {
       public static void Main()
        {
            SortedDictionary<string, decimal> phoneNumbers = new SortedDictionary<string, decimal>();

            string line = Console.ReadLine();

            while (line != "Over")
            {
                string[] tokens = line.Split(" :".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);

                string firstElement = tokens[0];
                string secondElement = tokens[1];

                decimal phoneNumber = 0m;
                if (decimal.TryParse(firstElement, out phoneNumber))
                {
                    phoneNumbers[secondElement] = phoneNumber;
                }
                else if (decimal.TryParse(secondElement, out phoneNumber))
                {
                    phoneNumbers[firstElement] = phoneNumber;
                }

                line = Console.ReadLine();
            }

            foreach (var namePhonePair in phoneNumbers)
            {
                string name = namePhonePair.Key;
                decimal phone = namePhonePair.Value;

                Console.WriteLine($"{name} -> {phone}");
            }
        }
    }
}
