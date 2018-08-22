using System;
using System.Linq;

namespace _03.CamelBack
{
   public class CamelBack
    {
       public static void Main()
        {
            List<int> buildings = Console.ReadLine().Split().Select(int.Parse).ToList();
            int camelBack = int.Parse(Console.ReadLine());

            int rounds = 0;

            while (buildings.Count > camelBack)
            {
                buildings.RemoveAt(0);
                buildings.RemoveAt(buildings.Count - 1);
                rounds++;
            }

            if (rounds == 0)
            {
                Console.WriteLine("already stable: {0}", string.Join(" ", buildings));
            }
            else
            {
                Console.WriteLine($"{rounds} rounds");
                Console.WriteLine("remaining: {0}", string.Join(" ", buildings));
            }
        }
    }
}
