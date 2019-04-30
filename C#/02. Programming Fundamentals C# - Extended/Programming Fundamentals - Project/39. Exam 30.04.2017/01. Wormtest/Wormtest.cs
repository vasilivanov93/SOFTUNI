using System;

namespace _01.Wormtest
{
   public class Wormtest
    {
       public static void Main()
        {
            decimal lenghtWormsInMeters = long.Parse(Console.ReadLine());
            decimal widhtWormsInCentimeters = decimal.Parse(Console.ReadLine());

            if (widhtWormsInCentimeters == 0)
            {
                Console.WriteLine();
                return;
                
            }

            decimal convertLenghtInCentimeters = lenghtWormsInMeters * 100;
            decimal remainder = (convertLenghtInCentimeters % widhtWormsInCentimeters);

            if (remainder == 0)
            {
                Console.WriteLine($"{(convertLenghtInCentimeters * (decimal)widhtWormsInCentimeters):F2}");
            }
            else
            {
                Console.WriteLine($"{(((convertLenghtInCentimeters / widhtWormsInCentimeters) * 100)):F2}%");
            }
        }
    }
}