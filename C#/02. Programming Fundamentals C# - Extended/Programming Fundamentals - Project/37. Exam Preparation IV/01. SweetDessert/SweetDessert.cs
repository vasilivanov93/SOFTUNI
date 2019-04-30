using System;

namespace _01.SweetDessert
{
   public class SweetDessert
    {
       public static void Main()
        {
            decimal amountOfCash = decimal.Parse(Console.ReadLine());
            int numberOfGuest = int.Parse(Console.ReadLine());
            decimal priceOfBananas = decimal.Parse(Console.ReadLine());
            decimal priceOfEggs = decimal.Parse(Console.ReadLine());
            decimal priceOfBerries = decimal.Parse(Console.ReadLine());

            decimal portions = Math.Ceiling(numberOfGuest / 6M);

            decimal totalPrice = (portions * (2 * priceOfBananas)) + (portions * (4 * priceOfEggs)) + (portions * (0.2M * priceOfBerries));

            if (totalPrice <= amountOfCash)
            {
                Console.WriteLine($"Ivancho has enough money - it would cost {totalPrice:F2}lv.");
            }
            else
            {
                Console.WriteLine($"Ivancho will have to withdraw money - he will need {(totalPrice - amountOfCash):F2}lv more.");
            }
        }
    }
}
