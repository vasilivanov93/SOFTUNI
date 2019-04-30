using System;
using System.IO;

namespace _02.LineNumbers
{
   public class LineNumbers
    {
       public static void Main()
        {
            string[] text = File.ReadAllLines("../../input.txt");

            int count = 1;

            for (int i = 0; i < text.Length; i++)
            {
                File.AppendAllText("../../output.txt", $"{count}. {text[i] + Environment.NewLine}");
                count++;
            }
        }
    }
}
