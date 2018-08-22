using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _15.VegetableMarket
{
    class VegetableMarket
    {
        static void Main(string[] args)
        {
            double pricePerKgOfVegetables = double.Parse(Console.ReadLine());
            double pricePerKgOfFruits = double.Parse(Console.ReadLine());
            int totalKgOnVegetables = int.Parse(Console.ReadLine());
            int totalKgOnFruits = int.Parse(Console.ReadLine());

            double priceVegetables = pricePerKgOfVegetables * totalKgOnVegetables;
            double priveFruits = pricePerKgOfFruits * totalKgOnFruits;
            double total = (priceVegetables + priveFruits) / 1.94;

            Console.WriteLine(total);
        }
    }
}
