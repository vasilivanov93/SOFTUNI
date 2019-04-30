using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.CarryingOnBricks
{
    class CarryingOnBricks
    {
        static void Main(string[] args)
        {
            double xBricks = double.Parse(Console.ReadLine());
            double wWorks = double.Parse(Console.ReadLine());
            double mCar = double.Parse(Console.ReadLine());

            double course = wWorks * mCar;
            double result = Math.Ceiling((xBricks / course));

            Console.WriteLine(result);
        }
    }
}
