using System;

namespace _01.ReverseString
{
   public class ReverseString
    {
       public static void Main()
        {
            string input = Console.ReadLine();
            char[] cArray = input.ToCharArray();

            string reverse = string.Empty;

            for (int i = cArray.Length - 1; i >= 0; i--)
            {
                reverse += cArray[i];
            }

            Console.WriteLine(reverse);  
        }
    }
}
