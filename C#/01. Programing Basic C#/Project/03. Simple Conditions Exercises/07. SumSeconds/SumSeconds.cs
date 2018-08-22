using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.SumSeconds
{
    class SumSeconds
    {
        static void Main(string[] args)
        {
            int t1 = int.Parse(Console.ReadLine());
            int t2 = int.Parse(Console.ReadLine());
            int t3 = int.Parse(Console.ReadLine());

            int totalSeconds = t1 + t2 + t3;

            int minutes = totalSeconds / 60;
            int seconds = totalSeconds % 60;

            if (seconds > 9)
            {
                Console.WriteLine(minutes + ":" + seconds);
            }
            else
            {
                Console.WriteLine(minutes + ":0" + seconds);
            }
        }
    }
}
