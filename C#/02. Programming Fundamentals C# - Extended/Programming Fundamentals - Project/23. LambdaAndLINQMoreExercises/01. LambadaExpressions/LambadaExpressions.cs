using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.LambadaExpressions
{
   public class LambadaExpressions
    {
      public static void Main()
        {
            Dictionary<string, Dictionary<string, string>> lambadaExpressions = new Dictionary<string, Dictionary<string, string>>();
            string inputLine = Console.ReadLine();

            while (inputLine != "lambada")
            {
                string[] tokens = inputLine.Split(new[] { ' ', '=', '>', '.' }, StringSplitOptions.RemoveEmptyEntries);

                if (tokens.Length > 1)
                {
                    string selector = tokens[0];
                    string selectorObject = tokens[1];
                    string property = tokens[2];

                    if (!lambadaExpressions.ContainsKey(selector))
                    {
                        lambadaExpressions.Add(selector, new Dictionary<string, string>());
                    }

                    lambadaExpressions[selector][selectorObject] = property;
                }
                else
                {
                    lambadaExpressions = lambadaExpressions.ToDictionary(x => x.Key, x => x.Value.ToDictionary(y => y.Key, y => y.Key + "." + y.Value));                         
                }

                inputLine = Console.ReadLine();
            }

            foreach (var selector in lambadaExpressions)
            {
                foreach (var selectorObject in selector.Value)
                {
                    Console.WriteLine($"{selector.Key} => {selectorObject.Key}.{selectorObject.Value}");
                }
            }
        }
    }
}
