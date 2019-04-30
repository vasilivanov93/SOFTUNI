using System;
using System.Collections.Generic;

namespace _02.CitiesbyContinentCountry
{
    public class CitiesbyContinentCountry
    {
        public static void Main()
        {
            Dictionary<string, Dictionary<string, List<string>>> continentsData =
                                    new Dictionary<string, Dictionary<string, List<string>>>();

            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string[] tokens = Console.ReadLine().Split(' ');
                string continent = tokens[0];
                string country = tokens[1];
                string city = tokens[2];

                if (!continentsData.ContainsKey(continent))
                {
                    continentsData[continent] = new Dictionary<string, List<string>>();
                }

                if (!continentsData[continent].ContainsKey(country))
                {
                    continentsData[continent][country] = new List<string>();
                }

                continentsData[continent][country].Add(city);
            }

            foreach (var continentCountries in continentsData)
            {
                string continentName = continentCountries.Key;
                Dictionary<string, List<string>> countries = continentCountries.Value;

                Console.WriteLine($"{continentName}:");

                foreach (var countryCities in countries)
                {
                    string countryName = countryCities.Key;
                    List<string> cities = countryCities.Value;

                    Console.WriteLine($"  {countryName} -> {string.Join(", ", cities)}");
                }
            }
        }
    }
}
