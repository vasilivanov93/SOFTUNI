using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _12.CurrencyConverter
{
    class CurrencyConverter
    {
        static void Main(string[] args)
        {
            double value = double.Parse(Console.ReadLine());
            string input = Console.ReadLine().ToUpper();
            string output = Console.ReadLine().ToUpper();

            if (input == "USD")
            {
                value *= 1.79549;
            }
            else if (input == "EUR")
            {
                value *= 1.95583;
            }
            else if (input == "GBP")
            {
                value *= 2.53405;
            }

            if (output == "USD")
            {
                value /= 1.79549;
            }
            else if (output == "EUR")
            {
                value /= 1.95583;
            }
            else if (output == "GBP")
            {
                value /= 2.53405;
            }  

            Console.WriteLine(Math.Round(value, 2) + " " + output);
        }
    }
}
