using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _16.RepairOfTile
{
    class RepairOfTile
    {
        static void Main(string[] args)
        {
            int lengthOnSide = int.Parse(Console.ReadLine());
            double widthOfOneTile = double.Parse(Console.ReadLine());
            double lengthOfOneTile = double.Parse(Console.ReadLine());
            double widthOfBench = double.Parse(Console.ReadLine());
            double lenghtOfBench = double.Parse(Console.ReadLine());

            int totalArea = lengthOnSide * lengthOnSide;
            double benchArea = widthOfBench * lenghtOfBench;
            double areaForCover = totalArea - benchArea;
            double tileArea = widthOfOneTile * lengthOfOneTile;

            double neededTiles = areaForCover / tileArea;
            double neededTime = neededTiles * 0.2;

            Console.WriteLine(neededTiles);
            Console.WriteLine(neededTime);
        }
    }
}
