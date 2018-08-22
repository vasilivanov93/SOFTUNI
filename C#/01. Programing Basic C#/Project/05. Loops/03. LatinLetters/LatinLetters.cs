using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.LatinLetters
{
    class LatinLetters
    {
        static void Main(string[] args)
        {
            for (char letters = 'a'; letters < 'z'; letters++)
            {
                Console.Write("{0} ", letters);
            }
        }
    }
}
