using System;

namespace _01.CharityMarathon
{
   public class CharityMarathon
    {
       public static void Main()
        {
            int marathonInDays = int.Parse(Console.ReadLine());
            int participateInMaratone = int.Parse(Console.ReadLine());
            int averageLaps = int.Parse(Console.ReadLine());
            int lapLenght = int.Parse(Console.ReadLine());
            int trackCapacityPerDay = int.Parse(Console.ReadLine());
            decimal moneyPerKilometers = decimal.Parse(Console.ReadLine());

            int totalCapacityPerDays = trackCapacityPerDay * marathonInDays;

            if (participateInMaratone > totalCapacityPerDays)
            {
                participateInMaratone = totalCapacityPerDays;
            }

            long totalMeters = (long)participateInMaratone * averageLaps * lapLenght;
            long totalKilometers = totalMeters / 1000;
            decimal totalMoneyOfMarathone = totalKilometers * moneyPerKilometers;

            Console.WriteLine($"Money raised: {totalMoneyOfMarathone:F2}");
        }
    }
}