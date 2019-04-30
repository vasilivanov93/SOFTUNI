using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.USDtoBGN
{
    class USDtoBGN
    {
        static void Main(string[] args)
        {
            double usd = double.Parse(Console.ReadLine());
            double result = usd * 1.79549;

            Console.WriteLine(Math.Round(result, 2) + " BGN");
        }
    }
}
