using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13.PointInTheFigure
{
    class PointInTheFigure
    {
        static void Main(string[] args)
        {
            int h = int.Parse(Console.ReadLine());
            int x = int.Parse(Console.ReadLine());
            int y = int.Parse(Console.ReadLine());

            int x1 = 0;
            int y1 = 0;
            int x2 = 3 * h;
            int y2 = h;
            int x3 = h;
            int y3 = h;
            int x4 = 2 * h;
            int y4 = 4 * h;

            if (((x1 < x && x < x2) && (y1 < y && y < y2)) ||
                ((x3 < x && x < x4) && (y3 < y && y < y4)) ||
                ((x3 < x && x < x4) && y == y2))
            {
                Console.WriteLine("inside");
            }

            else if (!((x >= x1 && x <= x2) && (y >= y1 && y <= y2)) &&
                !((x >= x3 && x <= x4) && (y >= y3 && y <= y4)))
            {
                Console.WriteLine("outside");
            }
            else
            {
                Console.WriteLine("border");
            }
        }
    }
}
