using System;
using System.Linq;

namespace _02.MultiplyAnArrayOfDoubles
{
   public class MultiplyAnArrayOfDoubles
    {
       public static void Main()
        {
            double[] numbers = Console.ReadLine()
                                            .Split(' ')
                                            .Select(double.Parse)
                                            .ToArray();
            double p = double.Parse(Console.ReadLine());

            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i] *= p;
            }

            Console.WriteLine(string.Join(" ", numbers));
        }
    }
}
