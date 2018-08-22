using System;

namespace _02.CirclePerimeter_Precision12_
{
   public class CirclePerimeter
    {
       public static void Main()
        {
            double r = double.Parse(Console.ReadLine());
            double perimeter = 2 * Math.PI * r;

            Console.WriteLine($"{perimeter:F12}");
        }
    }
}