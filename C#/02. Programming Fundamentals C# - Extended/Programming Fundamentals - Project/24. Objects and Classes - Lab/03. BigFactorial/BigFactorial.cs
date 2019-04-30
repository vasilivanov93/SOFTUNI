using System;
using System.Numerics;

namespace _03.BigFactorial
{
   public class BigFactorial
    {
       public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            BigInteger factorial = 1;

            do
            {
                factorial = factorial * n;
                n--;
            }
            while (n > 1);

            Console.WriteLine(factorial);
        }
    }
}
