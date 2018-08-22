using System;

namespace _07.GreaterOfTwoValues
{
   public class GreaterOfTwoValues
    {
       public static void Main()
        {
            string type = Console.ReadLine();

            if (type == "int")
            {
                int firstInt = int.Parse(Console.ReadLine());
                int secondInt = int.Parse(Console.ReadLine());
                Console.WriteLine(PrintGreaterInteger(firstInt, secondInt));
            }
            else if (type == "char")
            {
                char firstChar = char.Parse(Console.ReadLine());
                char secondChar = char.Parse(Console.ReadLine());
                Console.WriteLine(PrintGreaterChar(firstChar, secondChar));
            }
            else
            {
                string firstString = Console.ReadLine();
                string secondString = Console.ReadLine();
                Console.WriteLine(PringGreaterString(firstString, secondString));
            }

        }

        static int PrintGreaterInteger(int firstInt, int secondInt)
        {
            if (firstInt >= secondInt)
            {
                return firstInt;
            }
            else
            {
                return secondInt;
            }
        }

        static char PrintGreaterChar(char firstChar, char secondChar)
        {
            if (firstChar >= secondChar)
            {
                return firstChar;
            }
            else
            {
                return secondChar;
            }
        }

        static string PringGreaterString(string firstString, string secondString)
        {
            if (firstString.CompareTo(secondString) >= 0)
            {
                return firstString;
            }
            else
            {
                return secondString;
            }
        }
    }
}
