using System;

namespace _08.ArraySymmetry
{
   public class ArraySymmetry
    {
       public static void Main()
        {
            string[] words = Console.ReadLine().Split(' ');

            bool isSymmetry = true;

            for (int i = 0; i < words.Length / 2; i++)
            {
                string firstWord = words[i];
                string secondWord = words[words.Length - 1 - i];

                if (firstWord != secondWord)
                {
                    isSymmetry = false;
                    break;
                }
            }

            if (isSymmetry)
            {
                Console.WriteLine("Yes");
            }
            else
            {
                Console.WriteLine("No");
            }
        }
    }
}
