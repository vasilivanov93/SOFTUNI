using System;
using System.Linq;

namespace _03.HornetAssault
{
    public class HornetAssault
    {
        public static void Main()
        {
            long[] beehives = Console.ReadLine()
                                     .Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                                     .Select(long.Parse)
                                     .ToArray();

            long[] hornets = Console.ReadLine()
                                    .Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                                    .Select(long.Parse)
                                    .ToArray();

            long power = hornets.Sum();
            int currentFirstHornetsIndex = 0;

            for (int i = 0; i < beehives.Length; i++)
            {
                long bees = beehives[i];

                if (bees >= power)
                {
                    beehives[i] -= power;

                    if (currentFirstHornetsIndex < hornets.Length)
                    {
                        power -= hornets[currentFirstHornetsIndex];
                        currentFirstHornetsIndex++;
                    }
                }
                else
                {
                    beehives[i] -= power;
                }
            }

            if (beehives.Any(b => b > 0))
            {
                long[] result = beehives.Where(b => b > 0).ToArray();

                Console.WriteLine(string.Join(" ", result));
            }
            else
            {
                long[] result = hornets.Skip(currentFirstHornetsIndex).ToArray();

                Console.WriteLine(string.Join(" ", result));
            }
        }
    }
}