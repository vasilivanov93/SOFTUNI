using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14.OnTimeForTheExam
{
    class OnTimeForTheExam
    {
        static void Main(string[] args)
        {
            int hourExam = int.Parse(Console.ReadLine());
            int minuteExam = int.Parse(Console.ReadLine());
            int hourArrival = int.Parse(Console.ReadLine());
            int minuteArrival = int.Parse(Console.ReadLine());

            int timeExam = hourExam * 60 + minuteExam;
            int timeArrival = hourArrival * 60 + minuteArrival;
            int timeDiff = timeArrival - timeExam;

            if (timeDiff < -30)
            {
                Console.WriteLine("Early");
            }
            else if (timeDiff <= 0)
            {
                Console.WriteLine("On time");
            }
            else
            {
                Console.WriteLine("Late");
            }

            if (timeDiff != 0)
            {
                int hours = Math.Abs(timeDiff / 60);
                int minutes = Math.Abs(timeDiff % 60);

                if (hours > 0)
                {
                    if (minutes < 10)
                    {
                        Console.Write(hours + ":0" + minutes + " hours");
                    }
                    else
                    {
                        Console.Write(hours + ":" + minutes + " hours");
                    }
                }
                else
                {
                    Console.Write(minutes + " minutes");
                }

                if (timeDiff < 0)
                {
                    Console.WriteLine(" before the start");
                }
                else
                {
                    Console.WriteLine(" after the start");
                }
            }
        }
    }
}
