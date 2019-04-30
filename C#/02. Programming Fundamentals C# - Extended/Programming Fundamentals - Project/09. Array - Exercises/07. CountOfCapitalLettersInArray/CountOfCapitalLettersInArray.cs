using System;

namespace _07.CountOfCapitalLettersInArray
{
   public class CountOfCapitalLettersInArray
    {
       public static void Main()
        {
            string[] words = Console.ReadLine().Split(' ');

            int count = 0;

            for (int i = 0; i < words.Length; i++)
            {
                string currentWord = words[i];

                if (currentWord.Length == 1)
                {
                    char.IsUpper((char)currentWord.Length);
                    count++;
                }
            }

            Console.WriteLine(count);
        }
    }
}
