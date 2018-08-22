namespace _18.EqualPairs
{
    using System;

	// https://judge.softuni.bg/Contests/Practice/Index/154#11
    class EqualMain
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int max = int.MinValue;
            int min = int.MaxValue;

            int previousSum = 0;

            for (int i = 0; i < n; i++)
            {
                int first = int.Parse(Console.ReadLine());
                int second = int.Parse(Console.ReadLine());

                if (i == 0)
                {
                    previousSum = first + second;
                }

                int currentSum = first + second;

                int difference = Math.Abs(currentSum - previousSum);

                if (difference > max)
                {
                    max = difference;
                }

                if (difference < min)
                {
                    min = difference;
                }

                previousSum = currentSum;
            }

            if (min == max)
            {
                Console.WriteLine("Yes, value=" + previousSum);
            }
            else
            {
                Console.WriteLine("No, maxdiff=" + (max - min));
            }
        }
    }
}
