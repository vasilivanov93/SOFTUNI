using System;

namespace _01.MultiplyEvensByOdds
{
   public class MultiplyEvensByOdds
    {
       public static void Main()
        {
            int number = Math.Abs(int.Parse(Console.ReadLine()));

            SumOfEvensDigits(number);
            SumOfOddsDigits(number);

            Console.WriteLine(GetMultiplyEvensByOddsSum(number));
        }

        private static int GetMultiplyEvensByOddsSum(int number)
        {
            int sumEven = SumOfEvensDigits(number);
            int sumOdd = SumOfOddsDigits(number);
            return sumEven * sumOdd;
        }

        private static int SumOfOddsDigits(int number)
        {
            int sum = 0;
            while (number > 0)
            {
                int lastDigit = number % 10;
                if (lastDigit % 2 != 0)
                {
                    sum += lastDigit;
                }
                number /= 10;
            }
            return sum;
        }

        private static int SumOfEvensDigits(int number)
        {
            int sum = 0;
            while (number > 0)
            {
                int lastDigit = number % 10;
                if (lastDigit % 2 == 0)
                {
                    sum += lastDigit;
                }
                number /= 10;
            }
            return sum;
        }
    }
}
