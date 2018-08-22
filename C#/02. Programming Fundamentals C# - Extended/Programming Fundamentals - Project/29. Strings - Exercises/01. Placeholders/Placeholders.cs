using System;

namespace _01.Placeholders
{
   public class Placeholders
    {
       public static void Main()
        {
            string input = Console.ReadLine();

            while (input != "end")
            {
                string[] tokens = input.Split(new[] { '-', '>' }, StringSplitOptions.RemoveEmptyEntries);

                string sentence = tokens[0].Trim();
                string[] elements = tokens[1].Trim().Split(new[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries);
                
                for (int i = 0; i < elements.Length; i++)
                {
                    string currentPlaceholder = "{" + i + "}";

                    sentence = sentence.Replace(currentPlaceholder, elements[i]);
                }

                Console.WriteLine(sentence);

                input = Console.ReadLine();
            }
        }
    }
}