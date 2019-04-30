using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.DateAfter5Days
{
    class DateAfteFiveDays
    {
        static void Main(string[] args)
        {
            int day = int.Parse(Console.ReadLine());
            int month = int.Parse(Console.ReadLine());

            switch (month)
            {
                case 2:
                    if (day + 5 > 28)
                    {
                        month++;
                        day = day + 5 - 28;
                    }
                    else
                    {
                        day = day + 5;
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    if (day + 5 > 30)
                    {
                        month++;
                        day = day + 5 - 30;
                    }
                    else
                    {
                        day = day + 5;
                    }
                    break;
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                    if (day + 5 > 31)
                    {
                        month++;
                        day = day + 5 - 31;
                    }
                    else
                    {
                        day = day + 5;
                    }
                    break;
                case 12:
                    if (day + 5 > 31)
                    {
                        month = 1;
                        day = day + 5 - 31;
                    }
                    else
                    {
                        day = day + 5;
                    }
                    break;
                default:
                    break;
            }
            Console.Write(day + ".");
            if (month < 10)
            {
                Console.Write("0");
            }
            Console.WriteLine(month);
        }
    }
}
