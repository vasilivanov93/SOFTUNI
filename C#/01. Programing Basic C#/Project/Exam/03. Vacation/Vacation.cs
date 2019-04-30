using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Vacation
{
    class Vacation
    {
        static void Main(string[] args)
        {
            int oldPeople = int.Parse(Console.ReadLine());
            int childrend = int.Parse(Console.ReadLine());
            int days = int.Parse(Console.ReadLine());
            string transport = Console.ReadLine();

            double priceOldPeople = 0;
            double priceChildren = 0;

            if (transport == "train")
            {
                priceOldPeople += 24.99;
                priceChildren += 14.99;
                if ((oldPeople + childrend) > 50)
                {
                    priceOldPeople = 12.495;
                    priceChildren = 7.495;
                }
            }
            else if (transport == "bus")
            {
                priceOldPeople += 32.50;
                priceChildren += 28.50;
            }
            else if (transport == "boat")
            {
                priceOldPeople += 42.99;
                priceChildren += 39.99;
            }
            else if (transport == "airplane")
            {
                priceOldPeople += 70.00;
                priceChildren += 50.00;
            }

            double priceTransport = ((oldPeople * priceOldPeople) + (childrend * priceChildren)) * 2;
            double priceHotel = days * 82.99;
            double comision = (priceTransport + priceHotel) * 0.10;
            double total = priceTransport + priceHotel + comision;

            Console.WriteLine($"{total:F2}");

        }
    }
}
