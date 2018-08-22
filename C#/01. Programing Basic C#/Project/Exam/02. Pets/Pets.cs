using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Pets
{
    class Pets
    {
        static void Main(string[] args)
        {
            int day = int.Parse(Console.ReadLine());
            int foodInKg = int.Parse(Console.ReadLine());
            double foodPerDayForDog = double.Parse(Console.ReadLine());
            double foodPerDayForCat = double.Parse(Console.ReadLine());
            double foodPerDayForTurtlle = double.Parse(Console.ReadLine());

            double needFoodForDog = day * foodPerDayForDog;
            double needFoodForCat = day * foodPerDayForCat;
            double needFoodForTurtlle = day * (foodPerDayForTurtlle / 1000);

            double totalFood = needFoodForDog + needFoodForCat + needFoodForTurtlle;

            if (totalFood <= foodInKg)
            {
                Console.WriteLine("{0} kilos of food left.", Math.Floor(foodInKg - totalFood));
            }
            else
            {
                Console.WriteLine("{0} more kilos of food are needed.", Math.Ceiling(Math.Abs(foodInKg - totalFood)));
            }
        }
    }
}
