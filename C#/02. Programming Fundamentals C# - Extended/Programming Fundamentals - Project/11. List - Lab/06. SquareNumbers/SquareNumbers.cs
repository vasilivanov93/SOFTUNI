using System;
using System.Collections.Generic;
using System.Linq;

namespace _06.SquareNumbers
{
   public class SquareNumbers
    {
       public static void Main()
        {
            List<double> squares = Console.ReadLine()
                                                .Split(' ')
                                                .Select(double.Parse)
                                                .OrderByDescending(a => a)
                                                .ToList();

            foreach (var item in squares)
            {
                var num = Math.Sqrt(item);
                if (num == (int)num)
                {
                    Console.Write(item + " ");
                }
            }
            Console.WriteLine();
        }
    }
}
