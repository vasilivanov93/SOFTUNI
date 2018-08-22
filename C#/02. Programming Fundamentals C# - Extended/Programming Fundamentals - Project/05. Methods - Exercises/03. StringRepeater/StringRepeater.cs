using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.StringRepeater
{
   public class StringRepeater
    {
       public static void Main()
        {
            string str = Console.ReadLine();
            int count = int.Parse(Console.ReadLine());

            string result = RepeatString(str, count);

            Console.WriteLine(result);
        }

        static string RepeatString(string str, int count)
        {
            string repeatedString = string.Empty;

            for (int i = 0; i < count; i++)
            {
                repeatedString += str;
            }

            return repeatedString;
        }
    }
}