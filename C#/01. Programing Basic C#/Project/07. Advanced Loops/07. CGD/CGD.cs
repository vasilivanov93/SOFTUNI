using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.CGD
{
    class CGD
    {
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());

            int greater = Math.Max(a, b);
            int lesser = Math.Min(a, b);

            while (lesser != 0)
            {
                int remainder = greater % lesser;
                greater = lesser;
                lesser = remainder;
            }
            Console.WriteLine("CGD: {0}", greater);
        }
    }
}
