using System;

namespace _03.ExactProductOfRealNumbers
{
   public class ExactProductOfRealNumbers
    {
       public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            decimal product = 1M;

            for (int i = 0; i < n; i++)
            {
                double number = double.Parse(Console.ReadLine());
                product = product * (decimal)number;
            }

            Console.WriteLine(product);
        }
    }
}