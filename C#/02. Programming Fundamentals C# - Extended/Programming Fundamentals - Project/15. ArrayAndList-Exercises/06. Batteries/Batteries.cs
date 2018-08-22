using System;
using System.Linq;

namespace _06.Batteries
{
   public class Batteries
    {
       public static void Main()
        {
            double[] capacities = Console.ReadLine()
                                                .Split(' ')
                                                .Select(double.Parse)
                                                .ToArray();

            double[] usagePerHour = Console.ReadLine()
                                                .Split(' ')
                                                .Select(double.Parse)
                                                .ToArray();

            int hour = int.Parse(Console.ReadLine());

            double sum = 0;
            double diff = 0;
            double dead = 0;

            for (int i = 0; i < usagePerHour.Length; i++)
            {
                sum = (usagePerHour[i] * hour);

                for (int j = 0; j < capacities.Length; j++)
                {
                    if (sum < capacities[j])
                    {
                        diff = Math.Abs(capacities[j] - sum);
                        
                        Console.WriteLine($"Battery {j + 1}: {diff:F2} mAh ({((diff / capacities[j]) * 100.0):F2})%");
                        break;
                    }
                    else
                    {
                        dead = Math.Ceiling(capacities[j] / usagePerHour[i]);

                        Console.WriteLine($"Battery {j + 1}: dead (lasted {dead} hours)");                   
                    }
                }
            }
        }
    }
}
