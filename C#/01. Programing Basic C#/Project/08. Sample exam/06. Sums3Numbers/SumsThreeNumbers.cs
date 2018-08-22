using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Sums3Numbers
{
    class SumsThreeNumbers
    {
        static void Main(string[] args)
        {
            int number1 = int.Parse(Console.ReadLine());
            int number2 = int.Parse(Console.ReadLine());
            int number3 = int.Parse(Console.ReadLine());

            int smallestNumber = Math.Min(number1, Math.Min(number2, number3));
            int biggestNumber = Math.Max(number1, Math.Max(number2, number3));

            int midNumber = (number1 + number2 + number3 - smallestNumber - biggestNumber);

            if (smallestNumber + midNumber == biggestNumber)
            {
                Console.WriteLine("{0} + {1} = {2}", smallestNumber, midNumber, biggestNumber);
            }
            else
            {
                Console.WriteLine("No");
            }
        }
    }
}
