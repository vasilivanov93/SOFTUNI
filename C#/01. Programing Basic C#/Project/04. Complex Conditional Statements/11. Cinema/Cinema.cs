using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Cinema
{
    class Cinema
    {
        static void Main(string[] args)
        {
            string project = Console.ReadLine();
            int rows = int.Parse(Console.ReadLine());
            int columns = int.Parse(Console.ReadLine());

            double price = 0.0;

            if (project == "Premiere")
            {
                price = 12.00;
            }
            else if (project == "Normal")
            {
                price = 7.50;
            }
            else if (project == "Discount")
            {
                price = 5.00;
            }

            Console.WriteLine("{0:f2} leva", price * rows * columns);
        }
    }
}
