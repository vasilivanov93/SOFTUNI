using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.BlockFix
{
	// https://judge.softuni.bg/Contests/Practice/Index/181#0
    class BlockFixMain
    {
        static void Main(string[] args)
        {
            int playgroundSide = int.Parse(Console.ReadLine());

            double tileWidth = double.Parse(Console.ReadLine());
            double tileHeight = double.Parse(Console.ReadLine());

            int benchWidth = int.Parse(Console.ReadLine());
            int benchHeight = int.Parse(Console.ReadLine());

            int playgroundArea = playgroundSide * playgroundSide;
            double tileArea = tileWidth * tileHeight;
            int benchArea = benchWidth * benchHeight;

            int totalArea = playgroundArea - benchArea;
            double tilesCount = totalArea / tileArea;

            Console.WriteLine(tilesCount);
            Console.WriteLine(tilesCount * 0.2);

        }
    }
}
