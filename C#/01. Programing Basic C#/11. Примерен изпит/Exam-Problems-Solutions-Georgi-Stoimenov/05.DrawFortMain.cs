namespace _05.DrawFort
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

	// https://judge.softuni.bg/Contests/Practice/Index/169#4
    class DrawFortMain
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            // First row.
            Console.Write("/");
            Console.Write(new string('^', n / 2));
            Console.Write("\\");

            Console.Write(new string('_', n - 4 + n % 2));

            Console.Write("/");
            Console.Write(new string('^', n / 2));
            Console.WriteLine("\\");

            // Middle rows
            for (int i = 0; i < n - 3; i++)
            {
                Console.WriteLine("|{0}|", new string(' ', (2 * n) - 2));
            }

            // Last middle row.
            Console.Write("|{0}", new string(' ', (n / 2) + 1));
            Console.Write(new string('_', n - 4 + n % 2));
            Console.WriteLine("{0}|", new string(' ', (n / 2) + 1));

            // Last row.
            Console.WriteLine("\\{0}/{1}\\{0}/",
                new string('_', n / 2), 
                new string(' ', n - 4 + n % 2));
        }
    }
}
