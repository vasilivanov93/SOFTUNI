using System;

namespace _03.Phonebook
{
   public class Phonebook
    {
       public static void Main()
        {
            string[] phoneNumbers = Console.ReadLine().Split(' ');
            string[] names = Console.ReadLine().Split(' ');

            string inputLine = Console.ReadLine();

            while (inputLine != "done")
            {
                PrintElement(phoneNumbers, names, inputLine);
                inputLine = Console.ReadLine();
            }
        }

        private static void PrintElement(string[] phoneNumbers, string[] names, string inputLine)
        {
            for (int i = 0; i < names.Length; i++)
            {
                if (names[i] == inputLine)
                {
                    Console.WriteLine($"{names[i]} -> {phoneNumbers[i]}");
                }
            }
        }
    }
}
