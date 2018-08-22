using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _17.TransportPrice
{
    class TransportPrice
    {
        static void Main(string[] args)
        {
            {
                int km = int.Parse(Console.ReadLine());
                string dayOrNight = Console.ReadLine();

                double taxi = 0;
                double bus = 0;
                double train = 0;

                if (km < 20)
                {
                    if (dayOrNight == "day")
                    {
                        taxi = 0.70 + (km * 0.79);
                        Console.WriteLine(taxi);
                    }
                    else if (dayOrNight == "night")
                    {
                        taxi = 0.70 + (km * 0.90);
                        Console.WriteLine(taxi);
                    }

                }
                else if (km >= 20 && km < 100)
                {
                    if (dayOrNight == "day" || dayOrNight == "night")
                    {
                        bus = 0.09 * km;
                        Console.WriteLine(bus);
                    }
                }
                else if (km >= 100)
                {
                    if ((dayOrNight == "day" || dayOrNight == "night"))
                    {
                        train = 0.06 * km;
                        Console.WriteLine(train);
                    }
                }
            }
        }
    }
}