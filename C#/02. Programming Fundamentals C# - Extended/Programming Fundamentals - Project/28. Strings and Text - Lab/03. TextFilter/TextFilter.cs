using System;
using System.Linq;

namespace _03.TextFilter
{
   public class TextFilter
    {
       public static void Main()
        {
            string[] banWords = Console.ReadLine()
                                        .Split(new[] { ' ', ',' }
                                        , StringSplitOptions.RemoveEmptyEntries)
                                        .ToArray();
            string text = Console.ReadLine();

            foreach (var banWord in banWords)
            {
                if (text.Contains(banWord))
                {
                   text = text.Replace(banWord, new string('*', banWord.Length));
                }
            }

            Console.WriteLine(text);
        }
    }
}
