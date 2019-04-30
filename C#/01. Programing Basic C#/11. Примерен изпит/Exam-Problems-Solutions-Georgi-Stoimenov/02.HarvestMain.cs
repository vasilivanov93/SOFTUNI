namespace _02.Harvest
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    class HarvestMain
    {
		// https://judge.softuni.bg/Contests/Practice/Index/233#1
        static void Main(string[] args)
        {
            int wineArea = int.Parse(Console.ReadLine());
            double kgPerArea = double.Parse(Console.ReadLine());
            int neededWine = int.Parse(Console.ReadLine());
            int workersCount = int.Parse(Console.ReadLine());

            double totalKG = wineArea * kgPerArea * 0.4;
            double wineInLitres = totalKG / 2.5;

            if (Math.Ceiling(wineInLitres) >= neededWine)
            {
                Console.WriteLine("Good harvest this year! Total wine: {0} liters.", Math.Floor(wineInLitres));
                Console.WriteLine(
                    "{0} liters left -> {1} liters per person.",
                    Math.Ceiling(wineInLitres - neededWine),
                    Math.Ceiling (wineInLitres - neededWine / workersCount));
            }
            else
            {
                Console.WriteLine("It will be a tough winter! More {0} liters wine needed.", Math.Floor(neededWine - wineInLitres));
            }
        }
    }
}
