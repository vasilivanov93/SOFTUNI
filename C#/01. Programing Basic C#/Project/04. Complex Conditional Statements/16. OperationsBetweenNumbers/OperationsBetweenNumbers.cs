using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _16.OperationsBetweenNumbers
{
    class OperationsBetweenNumbers
    {
        static void Main(string[] args)
        {
            {
                int n1 = int.Parse(Console.ReadLine());
                int n2 = int.Parse(Console.ReadLine());
                string symbol = Console.ReadLine();

                double result = 0;

                if (symbol == "+")
                {
                    result = n1 + n2;

                    if (result % 2 == 0)
                    {
                        Console.WriteLine($"{n1} + {n2} = {result} - even");
                    }
                    else
                    {
                        Console.WriteLine($"{n1} + {n2} = {result} - odd");
                    }
                }
                else if (symbol == "-")
                {
                    result = n1 - n2;

                    if (result % 2 == 0)
                    {
                        Console.WriteLine($"{n1} - {n2} = {result} - even");
                    }
                    else
                    {
                        Console.WriteLine($"{n1} - {n2} = {result} - odd");
                    }
                }
                else if (symbol == "*")
                {
                    result = n1 * n2;

                    if (result % 2 == 0)
                    {
                        Console.WriteLine($"{n1} * {n2} = {result} - even");
                    }
                    else
                    {
                        Console.WriteLine($"{n1} * {n2} = {result} - odd");
                    }
                }
                else if (symbol == "/")
                {
                    result = (double)n1 / (double)n2;

                    if (n2 == 0)
                    {
                        Console.WriteLine($"Cannot divide {n1} by zero");
                    }
                    else
                    {
                        Console.WriteLine($"{n1} / {n2} = {result:F2}");
                    }
                }
                else if (symbol == "%")
                {
                    result = (double)n1 % (double)n2;

                    if (n2 == 0)
                    {
                        Console.WriteLine($"Cannot divide {n1} by zero");
                    }
                    else
                    {
                        Console.WriteLine($"{n1} % {n2} = {result}");
                    }
                }
            }
        }
    }
}