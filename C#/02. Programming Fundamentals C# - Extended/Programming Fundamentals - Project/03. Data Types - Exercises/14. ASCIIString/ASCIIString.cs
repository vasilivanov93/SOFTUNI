using System;

namespace _14.ASCIIString
{
   public class ASCIIString
    {
       public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            string word = "";

            for (int i = 0; i < n; i++)
            {
                int number = int.Parse(Console.ReadLine());
                word += System.Convert.ToChar(number); 
            }
            Console.WriteLine(word);
        }
    }
}
