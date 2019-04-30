using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.VowelsSum
{
    class VowelsSum
    {
        static void Main(string[] args)
        {
            string text = Console.ReadLine().ToLower();
            int sum = 0;

            for (int index = 0; index < text.Length; index++)
            {
                int currentChar = text[index];

                if (currentChar == 'a')
                {
                    sum += 1;
                }
                else if (currentChar == 'e')
                {
                    sum += 2;
                }
                else if (currentChar == 'i')
                {
                    sum += 3;
                }
                else if (currentChar == 'o')
                {
                    sum += 4;
                }
                else if (currentChar == 'u')
                {
                    sum += 5;
                }
            }
            Console.WriteLine(sum);
        }
    }
}
