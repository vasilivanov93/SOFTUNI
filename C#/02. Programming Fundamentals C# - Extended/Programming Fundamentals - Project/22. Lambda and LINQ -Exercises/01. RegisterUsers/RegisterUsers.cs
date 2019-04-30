using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace _01.RegisterUsers
{
   public class RegisterUsers
    {
       public static void Main()
        {
            Dictionary<string, DateTime> registeredUsernames = new Dictionary<string, DateTime>();
            string inputLine = Console.ReadLine();

            while (inputLine != "end")
            {
                string[] tokens = inputLine.Split(new[] { ' ', '-', '>' }, StringSplitOptions.RemoveEmptyEntries);

                string username = tokens[0];
                DateTime registryDate = DateTime.ParseExact(tokens[1], "dd/MM/yyyy", CultureInfo.InvariantCulture);

                registeredUsernames[username] = registryDate;

                inputLine = Console.ReadLine();
            }

            Dictionary<string, DateTime> orderedUsernames = registeredUsernames.Reverse()
                                                                               .OrderBy(x => x.Value)
                                                                               .Take(5)
                                                                               .OrderByDescending(x => x.Value)
                                                                               .ToDictionary(x => x.Key, x => x.Value);

            foreach (var orderedUsername in orderedUsernames)
            {
                Console.WriteLine($"{orderedUsername.Key}");
            }
        }
    }
}
