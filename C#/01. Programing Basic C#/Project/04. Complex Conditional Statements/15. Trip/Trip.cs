using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _15.Trip
{
    class Trip
    {
        static void Main(string[] args)
        {
            double budget = double.Parse(Console.ReadLine());
            string season = Console.ReadLine();

            if (budget <= 100)
            {
                Console.WriteLine("Somewhere in Bulgaria");

                if (season == "summer")
                {
                    double amountSpent = budget * 0.3;
                    Console.WriteLine($"Camp - {amountSpent:F2}");
                }
                else if (season == "winter")
                {
                    double amountSpent = budget * 0.7;
                    Console.WriteLine($"Hotel - {amountSpent:F2}");
                }
            }
            else if (budget <= 1000)
            {
                Console.WriteLine("Somewhere in Balkans");

                if (season == "summer")
                {
                    double amountSpent = budget * 0.4;
                    Console.WriteLine($"Camp - {amountSpent:F2}");
                }
                else if (season == "winter")
                {
                    double amountSpent = budget * 0.8;
                    Console.WriteLine($"Hotel - {amountSpent:F2}");
                }
            }
            else if (budget > 1000)
            {
                Console.WriteLine("Somewhere in Europe");

                if (season == "summer" || season == "winter")
                {
                    double amountSpent = budget * 0.9;
                    Console.WriteLine($"Hotel - {amountSpent:F2}");
                }
            }
        }
    }
}