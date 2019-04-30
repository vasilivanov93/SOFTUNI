using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.TriangleAreaInPlain
{
    class TriangleAreaInPlain
    {
        static void Main(string[] args)
        {
            double x1 = double.Parse(Console.ReadLine());
            double y1 = double.Parse(Console.ReadLine());
            double x2 = double.Parse(Console.ReadLine());
            double y2 = double.Parse(Console.ReadLine());
            double x3 = double.Parse(Console.ReadLine());
            double y3 = double.Parse(Console.ReadLine());

            double a = Math.Abs(x2 - x3);
            double h = Math.Abs(y2 - (y1));
            double area = Math.Abs(a * (h / 2));

            Console.WriteLine(area);
        }
    }
}
