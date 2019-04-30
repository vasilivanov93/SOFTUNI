using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.BonusScore
{
    class BonusScore
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            double bonusScore = 0.0;
            double bonusScore2 = 0.0;

            if (number <=100)
            {
                bonusScore = bonusScore + 5;
            }
            else if (number <=1000)
            {
                bonusScore = number * 0.2; 
            }
            else
            {
                bonusScore = number * 0.1;
            }

            if (number % 2 == 0)
            {
                bonusScore2 = 1;
            }
            else if (number % 5 == 0)
            {
                bonusScore2 = 2;
            }

            double result = bonusScore + bonusScore2;
            double secondResult = number + result;

            Console.WriteLine(result);
            Console.WriteLine(secondResult);
        }
    }
}
