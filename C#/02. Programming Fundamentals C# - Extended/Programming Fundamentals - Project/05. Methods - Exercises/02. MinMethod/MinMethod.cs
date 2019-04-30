using System;

namespace _02.MinMethod
{
   public class MinMethod
    {
       public static void Main()
        {
            int number1 = int.Parse(Console.ReadLine());
            int number2 = int.Parse(Console.ReadLine());
            int number3 = int.Parse(Console.ReadLine());

            int minNumber = GetMin(number1, number2, number3);

            Console.WriteLine(minNumber);
        }

        private static int GetMin(int number1, int number2, int number3)
        {
            int result = Math.Min(Math.Min(number1, number2), number3);
            return result;
        }
    }
}