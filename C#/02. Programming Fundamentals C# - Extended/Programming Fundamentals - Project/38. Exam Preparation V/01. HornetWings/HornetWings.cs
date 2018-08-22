using System;

namespace _01.HornetWings
{
   public class HornetWings
    {
       public static void Main()
        {
            long n = long.Parse(Console.ReadLine());
            double m = double.Parse(Console.ReadLine());
            long p = long.Parse(Console.ReadLine());

            double dictance = (n / 1000) * m;
            double seconds = n / 100;
            double hornetseconds = (n / p) * 5.0;
            double result = seconds + hornetseconds;

            Console.WriteLine($"{dictance:F2} m.");
            Console.WriteLine($"{result} s.");
        }
    }
}
