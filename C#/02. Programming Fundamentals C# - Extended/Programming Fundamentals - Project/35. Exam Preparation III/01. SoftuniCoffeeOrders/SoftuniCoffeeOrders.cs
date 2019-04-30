using System;
using System.Globalization;

namespace _01.SoftuniCoffeeOrders
{
    public class SoftuniCoffeeOrders
    {
        public static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            decimal orderPrice = 0M;
            decimal totalMoney = 0M;

            for (int i = 0; i < n; i++)
            {
                decimal pricePerCapsule = decimal.Parse(Console.ReadLine());
                DateTime orderDate = DateTime.ParseExact(Console.ReadLine(), "d/M/yyyy", CultureInfo.InvariantCulture);
                int countCapsule = int.Parse(Console.ReadLine());

                decimal daysInMonth = DateTime.DaysInMonth(orderDate.Year, orderDate.Month);

                orderPrice = (daysInMonth * countCapsule) * pricePerCapsule;
                totalMoney += orderPrice;

                Console.WriteLine($"The price for the coffee is: ${orderPrice:F2}");  
            }
            
            Console.WriteLine($"Total: ${totalMoney:F2}");
        }
    }
}
