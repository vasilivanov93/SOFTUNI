using System;

namespace _04.NthDigit
{
   public class NthDigit
    {
       public static void Main()
        {
            long number = long.Parse(Console.ReadLine());
            int index = int.Parse(Console.ReadLine());

            int nthDgits = FindNthDigit(number, index);

            Console.WriteLine(nthDgits);
        }

        static int FindNthDigit(long number, int index)
        {
            int currentindex = 1;

            while (number > 0)
            {
                if (currentindex == index)
                {
                    return (int)(number % 10);
                }

                currentindex++;
                number /= 10;
            }

            return (int)(number % 10);
        }
    }
}