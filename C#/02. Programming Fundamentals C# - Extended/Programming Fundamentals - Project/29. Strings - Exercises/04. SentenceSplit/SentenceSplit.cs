using System;

namespace _04.SentenceSplit
{
    public class SentenceSplit
    {
        public static void Main()
        {
            string sentence = Console.ReadLine();
            string delimiter = Console.ReadLine();

            string result = sentence.Replace(delimiter, ", ");

            Console.WriteLine($"[{result}]");
        }
    }
}