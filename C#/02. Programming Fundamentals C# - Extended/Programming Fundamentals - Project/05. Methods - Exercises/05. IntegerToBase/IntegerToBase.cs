using System;

namespace _05.IntegerToBase
{
   public class IntegerToBase
    {
       public static void Main()
        {
            int number = int.Parse(Console.ReadLine());
            int toBase = int.Parse(Console.ReadLine());

            string converted = IntegersToBase(number, toBase);

            Console.WriteLine(converted);
        }

        static string IntegersToBase(int number, int toBase)
        {
            string result = string.Empty;

            while (number > 0)
            {
                int remainder = number % toBase;
                result = remainder + result;
                number /= toBase;
            }

            return result;
        }
    }
}
