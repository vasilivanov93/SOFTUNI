using System;

namespace _04.DrawAFilledSquare
{
   public class DrawAFilledSquare
    {
       public static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            PrintFilledSquare(n);
        }

        private static void PrintFilledSquare(int n)
        {
            PrintHeaderRow(n);
            PrintMiddleRow(n);
            PrintFooterRow(n);
        }

        private static void PrintFooterRow(int n)
        {
            Console.WriteLine(new string('-', 2 * n));
        }

        private static void PrintHeaderRow(int n)
        {
            Console.WriteLine(new string('-', 2 * n));
        }

        private static void PrintMiddleRow(int n)
        {
            for (int i = 0; i < n - 2; i++)
            {
                Console.Write("-");

                for (int j = 1; j < n; j++)
                {
                    Console.Write("\\/");
                }

                Console.WriteLine("-");
            }
        }
    }
}