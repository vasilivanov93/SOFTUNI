﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.SquareOfStars
{
    class SquareOfStars
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            for (int i = 1; i <= n; i++)
            {
                if (i == 1 || i == n)
                {
                    Console.WriteLine(new string('*', n));
                }
                else
                {
                    Console.WriteLine("*{0}*", new string(' ', n - 2));
                }
            }
        }
    }
}
