using System;

namespace _01.SpecialNumbers
{
   public class SpecialNumbers
    {
       public static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            for (int i = 1; i <= n; i++)
            {
                int currentNumber = i;
                int sum = 0;

                foreach (var symbol in currentNumber.ToString())
                {
                    int digit = symbol - '0';
                    sum += digit;
                }

                bool result = sum == 5 || sum == 7 || sum == 11;
                Console.WriteLine($"{currentNumber} -> {result}");
            }
        }
    }
}