using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.RotateArrayOfStrings
{
   public class RotateArrayOfStrings
    {
       public static void Main()
        {
            string[] array = Console.ReadLine().Split().ToArray();
            string[] rotatedArray = new string[array.Length];

            for (int i = 0; i < array.Length - 1; i++)
            {
                rotatedArray[i + 1] = array[i];
            }

            string lastElement = array[rotatedArray.Length - 1];
            rotatedArray[0] = lastElement;

            Console.WriteLine(string.Join(" ", rotatedArray));
        }
    }
}
