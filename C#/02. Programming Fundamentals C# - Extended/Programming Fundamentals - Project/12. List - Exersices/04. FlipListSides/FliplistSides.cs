using System;
using System.Linq;

namespace _04.FlipListSides
{
   public class FliplistSides
    {
       public static void Main()
        {
            int[] nums = Console.ReadLine().Split(' ')
											.Select(int.Parse)
											.ToArray();

            for (int i = 1; i < nums.Length / 2; i++)
            {
                SwapElements(nums, i, nums.Length - 1 - i);
            }

            Console.WriteLine(string.Join(" ", nums));
        }

        private static void SwapElements(int[] arr, int i, int j)
        {
            int oldElement = arr[i];
            arr[i] = arr[j];
            arr[j] = oldElement;
        }
    }
}
