using System;

namespace _15.Calculator
{
   public class Calculator
    {
       public static void Main()
        {
            int number1 = int.Parse(Console.ReadLine());
            char symbol = char.Parse(Console.ReadLine());
            int number2 = int.Parse(Console.ReadLine());

            int sum = number1 + number2;
            int difference = number1 - number2;
            int multiplication = number1 * number2;
            int partition = number1 / number2;

            switch (symbol)
            {
                case '+':
                    Console.WriteLine($"{number1} {symbol} {number2} = {sum}");
                    break;
                case '-':
                    Console.WriteLine($"{number1} {symbol} {number2} = {difference}");
                    break;
                case '*':
                    Console.WriteLine($"{number1} {symbol} {number2} = {multiplication}");
                    break;
                case '/':
                    Console.WriteLine($"{number1} {symbol} {number2} = {partition}");
                    break;
                default:
                    break;
            }
        }
    }
}