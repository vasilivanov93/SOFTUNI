using System;
using System.Globalization;

namespace _01.SinoTheWalker
{
   public class SinoTheWalker
    {
       public static void Main()
        {
            string timeFormat = @"HH:mm:ss";
            DateTime leavingTime = DateTime.ParseExact(Console.ReadLine(), timeFormat, CultureInfo.InvariantCulture);
            decimal numbersOfSteps = decimal.Parse(Console.ReadLine());
            decimal secondPerStep = decimal.Parse(Console.ReadLine());

            int totalseconsNeed = (int)(numbersOfSteps * secondPerStep % 86400);

            DateTime arrivalTime = leavingTime.AddSeconds(totalseconsNeed);

            Console.WriteLine($"Time Arrival: {arrivalTime.ToString(timeFormat)}");
        }
    }
}