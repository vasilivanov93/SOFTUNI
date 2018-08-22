using System;

namespace _04.Transport
{
   public class Transport
    {
       public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            int capacity = 24;
            decimal result = Math.Ceiling((decimal)n / capacity);

            Console.WriteLine(Math.Ceiling(result));
        }
    }
}