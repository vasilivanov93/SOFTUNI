using System;

namespace _05.DistanceOfTheStars
{
    public class DistanceOfTheStars
    {
       public static void Main()
        {
            decimal distanceEarthToProxymaCentauri = (decimal)4.22 * 9450000000000;
            decimal distanceMilkyWay = 260000 * 945000000000;
            decimal diameterMilkyWay = 100000 * 9450000000000;
            decimal distanceEarth = (decimal)46500000000 * 9450000000000;

            Console.WriteLine($"{distanceEarthToProxymaCentauri:e2}");
            Console.WriteLine($"{distanceMilkyWay:e2}");
            Console.WriteLine($"{diameterMilkyWay:e2}");
            Console.WriteLine($"{distanceEarth:e2}"); 
        }
    }
}
