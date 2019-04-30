using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.PointOnSegment
{
    class PointOnSegment
    {
        static void Main(string[] args)
        {
            int first = int.Parse(Console.ReadLine());
            int second = int.Parse(Console.ReadLine());
            int point = int.Parse(Console.ReadLine());

            int leftPoint = Math.Min(first, second);
            int rightPoint = Math.Max(first, second);

            int distanceFromLeft = Math.Abs(leftPoint - point);
            int distanceFromRight = Math.Abs(rightPoint - point);

            if (point >= leftPoint && point <= rightPoint)
            {
                Console.WriteLine("in");
                Console.WriteLine(Math.Min(distanceFromLeft, distanceFromRight));
            }
            else
            {
                Console.WriteLine("out");
                Console.WriteLine(Math.Min(distanceFromLeft, distanceFromRight));
            }
        }
    }
}
