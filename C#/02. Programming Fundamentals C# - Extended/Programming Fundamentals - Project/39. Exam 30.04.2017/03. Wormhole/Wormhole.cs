using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Wormhole
{
  public class Wormhole
    {
       public static void Main()
        {
            int[] numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();

            int step = 1;

            int start = numbers[0];
            int next = numbers[start + 1];
            while (true)
            {
                if (start == next)
                {
                    step++;
                }
                
            }

            if (start != next)
            {
                next = 0;
                step++; 
            }
            

            Console.WriteLine(step);
        }
    }
}
