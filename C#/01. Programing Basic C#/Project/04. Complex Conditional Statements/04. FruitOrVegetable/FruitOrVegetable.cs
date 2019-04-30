using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.FruitOrVegetable
{
    class FruitOrVegetable
    {
        static void Main(string[] args)
        {
            string fruit = Console.ReadLine();

            if (fruit == "banana" || fruit == "apple" || fruit == "kiwi" || fruit == "cherry" || fruit == "lemon" || fruit == "grapes")
            {
                Console.WriteLine("fruit");
            }
            else if (fruit == "tomato" || fruit == "cucumber" || fruit == "pepper" || fruit == "carrot")
            {
                Console.WriteLine("vegetable");
            }
            else
            {
                Console.WriteLine("unknown");
            }
        }
    }
}
