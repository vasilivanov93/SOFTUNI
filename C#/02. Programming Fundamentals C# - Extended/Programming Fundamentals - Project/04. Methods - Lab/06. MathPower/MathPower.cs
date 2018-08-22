using System;

namespace _06.MathPower
{
   public class MathPower
    {
       public static void Main()
        {
            double number = double.Parse(Console.ReadLine());
            int power = int.Parse(Console.ReadLine());

            RaiseToPower(number, power);
        }

        private static double RaiseToPower(double number, int power)
        {
            double result = 0d;
            result = Math.Pow(number, power);

            Console.WriteLine(result);
            return result;
        }
    }
}