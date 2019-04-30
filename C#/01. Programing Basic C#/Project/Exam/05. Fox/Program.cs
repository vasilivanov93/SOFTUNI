using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Fox
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            
            for (int i = 1; i <= n; i++)
            {
                Console.Write(new string('*', n - i));
                Console.Write("\\");
                Console.Write(new string('-'), n * 2);
            }
        }
    }
}
