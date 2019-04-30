using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.IncreasingElements
{
    class IncreasingElements
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int incrElemnts = 0;
            int start = 0;
            int maxLenght = 0;

            for (int i = 1; i <= n; i++)
            {
                int num = int.Parse(Console.ReadLine());

                if (num > start || i == 0)
                {
                    incrElemnts += 1;
                }
                else
                {
                    incrElemnts = 1;
                }

                if (incrElemnts > maxLenght)
                {
                    maxLenght = incrElemnts;
                }

                start = num;
            }
            Console.WriteLine(maxLenght);
        }
    }
}
