using System;
using System.Collections.Generic;

namespace _07.SalesReport
{
   public class Sale
   {
        public string Town { get; set; }

        public string Product { get; set; }

        public decimal Price { get; set; }

        public decimal Quantity { get; set; }

        public static Sale Parse(string saleAsString)
        {
            string[] saleParts = saleAsString.Split(' ');

            return new Sale
            {
                Town = saleParts[0],
                Product = saleParts[1],
                Price = decimal.Parse(saleParts[2]),
                Quantity = decimal.Parse(saleParts[3])
            };
        }
    }

   public class SalesReport
    {
       public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            SortedDictionary<string, decimal> result = new SortedDictionary<string, decimal>();

            for (int i = 0; i < n; i++)
            {
                string currentSaleAsString = Console.ReadLine();
                Sale currentSale = Sale.Parse(currentSaleAsString);

                if (!result.ContainsKey(currentSale.Town))
                {
                    result[currentSale.Town] = 0;
                }

                result[currentSale.Town] += currentSale.Price * currentSale.Quantity;
            }

            foreach (var town in result)
            {
                Console.WriteLine($"{town.Key} -> {town.Value:F2}");
            }
        }
    }
}
