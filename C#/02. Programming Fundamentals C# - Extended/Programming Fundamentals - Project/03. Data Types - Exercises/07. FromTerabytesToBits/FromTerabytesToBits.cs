using System;

namespace _07.FromTerabytesToBits
{
   public class FromTerabytesToBits
    {
       public static void Main()
        {
            decimal n = decimal.Parse(Console.ReadLine());
            decimal bits = n * ((decimal)1024 *1024 *1024 *1024 * 8);

            Console.WriteLine(Math.Round(bits));
        }
    }
}