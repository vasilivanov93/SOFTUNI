using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _12.Volleyball
{
    class Volleyball
    {
        static void Main(string[] args)
        {
            string year = Console.ReadLine().ToLower();
            int p = int.Parse(Console.ReadLine());
            int h = int.Parse(Console.ReadLine());

            double volleyballOverall = h + (48 - h) * (3.0 / 4) + p * (2.0 / 3);

            switch (year)
            {
                case "normal":
                    Console.WriteLine(Math.Floor(volleyballOverall));
                    break;
                case "leap":
                    double leap = volleyballOverall + 0.15 * volleyballOverall;
                    Console.WriteLine(Math.Floor(leap));
                    break;
            }
        }
    }
}
