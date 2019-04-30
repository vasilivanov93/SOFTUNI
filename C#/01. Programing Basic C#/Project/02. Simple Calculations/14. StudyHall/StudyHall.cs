using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14.StudyHall
{
    class StudyHall
    {
        static void Main(string[] args)
        {
            double height = double.Parse(Console.ReadLine());
            double width = double.Parse(Console.ReadLine());

            double workplace = 120;
            double corridor = 100;
            double bureau = 70;

            double totalRows = Math.Floor((height * 100) / workplace);
            double widthWithoutCorridor = Math.Floor((width * 100) - corridor);
            double totalBureau = Math.Floor(widthWithoutCorridor / bureau);
            double totalPlaces = Math.Floor((totalRows * totalBureau) - 3);

            Console.WriteLine(Math.Floor(totalPlaces));
        }
    }
}
