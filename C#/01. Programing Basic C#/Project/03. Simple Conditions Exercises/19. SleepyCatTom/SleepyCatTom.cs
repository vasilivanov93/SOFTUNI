using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _19.SleepyCatTom
{
    class SleepyCatTom
    {
        static void Main(string[] args)
        {
            {
                int numberHoliday = int.Parse(Console.ReadLine());

                int minutesOfPlayWithTomInHoliday = numberHoliday * 127;
                int minutesOfPlayWithTomInWorkday = (365 - numberHoliday) * 63;
                int totalPlayWithTom = minutesOfPlayWithTomInHoliday + minutesOfPlayWithTomInWorkday;

                if (30000 >= totalPlayWithTom)
                {
                    int difference = 30000 - totalPlayWithTom;
                    int hour = difference / 60;
                    int minutes = difference % 60;

                    Console.WriteLine("Tom sleeps well");
                    Console.WriteLine("{0} hours and {1} minutes less for play", hour, minutes);
                }
                else if (30000 < totalPlayWithTom)
                {
                    int difference = Math.Abs(30000 - totalPlayWithTom);
                    int hour = difference / 60;
                    int minutes = difference % 60;

                    Console.WriteLine("Tom will run away");
                    Console.WriteLine("{0} hours and {1} minutes more for play", hour, minutes);
                }
            }
        }
    }
}