using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14.Time_15Minutes
{
    class Time
    {
        static void Main(string[] args)
        {
            int hour = int.Parse(Console.ReadLine());
            int minutes = int.Parse(Console.ReadLine());

            int beginTime = hour * 60 + minutes;
            int endTime = beginTime + 15;

            int endHour = (endTime / 60) % 24;
            int endMinutes = endTime % 60;

            Console.WriteLine("{0}:{1:00}", endHour, endMinutes);
        }
    }
}
