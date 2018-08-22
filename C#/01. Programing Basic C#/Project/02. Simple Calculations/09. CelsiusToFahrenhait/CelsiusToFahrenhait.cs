using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.CelsiusToFahrenhait
{
    class CelsiusToFahrenhait
    {
        static void Main(string[] args)
        {
            double celsius = double.Parse(Console.ReadLine());
            double result = celsius * 1.8000 + 32.00;

            Console.WriteLine("Fahrenheit = " + Math.Round(result, 2));
        }
    }
}
