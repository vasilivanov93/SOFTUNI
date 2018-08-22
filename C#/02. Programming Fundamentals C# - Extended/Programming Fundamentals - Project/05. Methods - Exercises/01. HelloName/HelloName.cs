using System;

namespace _01.HelloName
{
   public class HelloName
    {
       public static void Main()
        {
            string name = Console.ReadLine();

            GetGreting(name);
        }

        private static void GetGreting(string name)
        {
            Console.WriteLine($"Hello, {name}!");
        }
    }
}