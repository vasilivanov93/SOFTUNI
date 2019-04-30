namespace _06.SpecialNumbers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

	// https://judge.softuni.bg/Contests/Practice/Index/181#5
    class SpecialNumbersMain
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            //for (int i = 1111; i <= 9999; i++)
            //{
            //    int firstDigit = i / 1000;
            //    int secondDigit = (i / 100) % 10;
            //    int thirdDigit = (i / 10) % 10;
            //    int fourthDigit = i % 10;

            //    if (firstDigit == 0 || secondDigit == 0 || thirdDigit == 0 || fourthDigit == 0)
            //    {
            //        continue;
            //    }

            //    if (n % firstDigit == 0 && 
            //        n % secondDigit == 0 &&
            //        n % thirdDigit== 0 &&
            //        n % fourthDigit == 0)
            //    {
            //        Console.Write(i + " ");
            //    }
            //}

            for (int firstDigit = 1; firstDigit <= 9; firstDigit++)
            {
                for (int secondDigit = 1; secondDigit <= 9; secondDigit++)
                {
                    for (int thirdDigit= 1; thirdDigit <= 9; thirdDigit++)
                    {
                        for (int fourthDigit = 1; fourthDigit <= 9; fourthDigit++)
                        {
                            if (n % firstDigit == 0 &&
                                n % secondDigit == 0 &&
                                n % thirdDigit == 0 &&
                                n % fourthDigit == 0)
                            {
                                Console.Write("" + firstDigit + secondDigit + thirdDigit + fourthDigit + " ");
                            }
                        }
                    }
                }
            }
            
            Console.WriteLine();

            bool isPrime = false;

            if (isPrime)
            {
                Console.WriteLine();
            }

            if (isPrime)
            {

            }
            else
            {

            }
        }
    }
}
