using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Fish
{
    class Program
    {
        static void Main(string[] args)
        {
            double skumria = double.Parse(Console.ReadLine());
            double caca = double.Parse(Console.ReadLine());
            double kgPalamud = double.Parse(Console.ReadLine());
            double kgSafrid = double.Parse(Console.ReadLine());
            int kgMidi = int.Parse(Console.ReadLine());

            double pricePalamud = skumria + skumria * 0.60;
            double sumPalamud = kgPalamud * pricePalamud;
            double priceSafrid = caca + caca * 0.80;
            double sumSafrid = kgSafrid * priceSafrid;
            double sumMidi = kgMidi * 7.50;

            double totalSum = sumPalamud + sumSafrid + sumMidi - skumria;

            Console.WriteLine(Math.Round(totalSum, 2));
        }
    }
}
