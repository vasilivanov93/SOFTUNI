using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.AverageCharacterDelimiter
{
    public class AverageCharacterDelimiter
    {
        public static void Main()
        {
            string[] array = Console.ReadLine().Split(' ').ToArray();

            List<char> list = new List<char>();

            for (int i = 0; i < array.Length; i++)
            {
                char[] element = array[i].ToCharArray();

                for (int j = 0; j < element.Length; j++)
                {
                    list.Add(element[j]);
                }
            }

            int sum = 0;

            for (int i = 0; i < list.Count; i++)
            {
                sum += (int)list[i];
            }

            int average = sum / list.Count;

            char delimiter = (char)average;
            string toUpper = delimiter.ToString();

            Console.WriteLine(string.Join(toUpper.ToUpper(), array));
        }
    }
}