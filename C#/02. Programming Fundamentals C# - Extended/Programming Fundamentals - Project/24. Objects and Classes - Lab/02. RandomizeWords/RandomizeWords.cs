using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.RandomizeWords
{
   public class RandomizeWords
    {
       public static void Main()
        {
            string[] words = Console.ReadLine().Split(' ').ToArray();
            var rnd = new Random();

            for (int i = 0; i < words.Length; i++)
            {
                string currentWord = words[i];
                var randomPosition = rnd.Next(words.Length);

                var tmp = words[randomPosition];
                words[randomPosition] = currentWord;
                words[i] = tmp;
            }

            Console.WriteLine(string.Join("\r\n", words));
        }
    }
}
