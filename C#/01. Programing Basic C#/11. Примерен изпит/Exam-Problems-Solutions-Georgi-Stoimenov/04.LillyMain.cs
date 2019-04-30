using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.SmartLilly
{
	// https://judge.softuni.bg/Contests/Practice/Index/181#3
    class LillyMain
    {
        static void Main(string[] args)
        {
            int birthdaysCount = int.Parse(Console.ReadLine());
            double washingMachinePrice = double.Parse(Console.ReadLine());
            int toysPrice = int.Parse(Console.ReadLine());

            int toysCount = 0;
            int totalMoney = 0;
            int currentBirthdayMoney = 0;

            for (int i = 1; i <= birthdaysCount; i++)
            {
                if (i % 2 == 1)
                {
                    toysCount++;
                }
                else
                {
                    currentBirthdayMoney += 10;
                    totalMoney += currentBirthdayMoney - 1;
                }
            }

            totalMoney += toysCount * toysPrice;

            if (totalMoney >= washingMachinePrice)
            {
                Console.WriteLine("Yes! {0:F2}", totalMoney - washingMachinePrice);
            }
            else
            {
                Console.WriteLine("No! {0:F2}", washingMachinePrice - totalMoney);
            }
        }
    }
}
