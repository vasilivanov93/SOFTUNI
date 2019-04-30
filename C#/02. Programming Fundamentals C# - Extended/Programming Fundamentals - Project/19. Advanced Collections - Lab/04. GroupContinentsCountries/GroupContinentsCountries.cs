using System;
using System.Collections.Generic;

namespace _04.GroupContinentsCountries
{
   public class GroupContinentsCountries
    {
       public static void Main()
        {
            SortedDictionary<string, SortedDictionary<string, SortedSet<string>>> continentsData =
                                    new SortedDictionary<string, SortedDictionary<string, SortedSet<string>>>();

            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string[] tokens = Console.ReadLine().Split(' ');
                string continent = tokens[0];
                string country = tokens[1];
                string city = tokens[2];

                if (!continentsData.ContainsKey(continent))
                {
                    continentsData[continent] = new SortedDictionary<string, SortedSet<string>>();
                }

                if (!continentsData[continent].ContainsKey(country))
                {
                    continentsData[continent][country] = new SortedSet<string>();
                }

                continentsData[continent][country].Add(city);
            }

            foreach (var continentCountries in continentsData)
            {
                string continentName = continentCountries.Key;
                SortedDictionary<string, SortedSet<string>> countries = continentCountries.Value;

                Console.WriteLine($"{continentName}:");

                foreach (var countryCities in countries)
                {
                    string countryName = countryCities.Key;
                    SortedSet<string> cities = countryCities.Value;

                    Console.WriteLine($"  {countryName} -> {string.Join(", ", cities)}");
                }
            }
        }
    }
}
