using System;
using System.Collections.Generic;

namespace _04.ExamShopping
{
   public class ExamShopping
    {
       public static void Main()
        {
            string line = Console.ReadLine();
            Dictionary<string, int> products = new Dictionary<string, int>();

            while (line!= "shopping time")
            {
                string[] tokens = line.Split();

                string product = tokens[1];
                int quantity = int.Parse(tokens[2]);

                if (!products.ContainsKey(product))
                {
                    products[product] = 0;
                }

                products[product] += quantity;

                line = Console.ReadLine();
            }

            line = Console.ReadLine();
            while (line != "exam time")
            {
                string[] tokens = line.Split();

                string product = tokens[1];
                int quantity = int.Parse(tokens[2]);

                if (!products.ContainsKey(product))
                {
                    Console.WriteLine($"{product} doesn't exist");
                }
                else
                {
                    if (products[product] == 0)
                    {
                        Console.WriteLine($"{product} out of stock");
                    }
                    else
                    {
                        products[product] -= quantity;

                        if (products[product] < 0)
                        {
                            products[product] = 0;
                        }
                    }
                }

                line = Console.ReadLine();
            }

            foreach (var productQuantityPair in products)
            {
                string product = productQuantityPair.Key;
                int quantity = productQuantityPair.Value;

                if (quantity > 0)
                {
                    Console.WriteLine($"{product} -> {quantity}");
                }
            }
        }
    }
}