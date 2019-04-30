namespace _06.Digits
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

	// https://judge.softuni.bg/Contests/Practice/Index/274#5
    class DigitsMain
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
   
            int firstDigit = n / 100;
            int secondDigit = (n / 10) % 10;
            int thirdDigit = n % 10;

            int rows = firstDigit + secondDigit;
            int cols = firstDigit + thirdDigit;

            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < cols; col++)
                {
                    if (n % 5 == 0)
                    {
                        n = n - firstDigit;
                    }
                    else if (n % 3 == 0)
                    {
                        n = n - secondDigit;
                    }
                    else
                    {
                        n = n + thirdDigit;
                    }

                    Console.Write(n + " ");
                }

                Console.WriteLine();
            }
        }
    }
}
