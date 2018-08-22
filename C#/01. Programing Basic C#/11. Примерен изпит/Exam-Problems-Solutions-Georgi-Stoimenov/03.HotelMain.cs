using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Harvest
{
	// https://judge.softuni.bg/Contests/Practice/Index/274#2
    class HotelMain
    {
        static void Main(string[] args)
        {
            for (int i = 0; i < 3; i++)
            {

                string month = Console.ReadLine();
                int days = int.Parse(Console.ReadLine());

                double apartamentPricePerNight = 65;
                double studioPricePerNight = 50;

                if (month == "June" || month == "September")
                {
                    apartamentPricePerNight = 68.7;
                    studioPricePerNight = 75.2;
                }
                else if (month == "July" || month == "August")
                {
                    apartamentPricePerNight = 77;
                    studioPricePerNight = 76;
                }


                double studioPrice = studioPricePerNight * days;
                double aparatmentPrice = apartamentPricePerNight * days;

                if ((month == "May" || month == "October") && days > 7 && days <= 14)
                {
                    studioPrice = studioPrice * 0.95;
                }
                else if ((month == "May" || month == "October") && days > 14)
                {
                    studioPrice = studioPrice * 0.7;
                }
                else if ((month == "June" || month == "September") && days > 14)
                {
                    studioPrice = studioPrice * 0.8;
                }

                if (days > 14)
                {
                    aparatmentPrice *= 0.9;
                }

                Console.WriteLine("Apartment: {0:F2} lv.", aparatmentPrice);
                Console.WriteLine("Studio: {0:F2} lv.", studioPrice);
            }
        }
    }
}
