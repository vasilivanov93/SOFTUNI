using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.RadiansToDegrees
{
    class RadiansToDegrees
    {
        static void Main(string[] args)
        {
            double rad = double.Parse(Console.ReadLine());
            double result = rad * 57.296;

            Console.WriteLine("Degrees = " + Math.Round(result, 0));
        }
    }
}
