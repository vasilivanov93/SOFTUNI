﻿using System;
using System.Collections.Generic;

namespace _01.ShootListElements
{
   public class ShootListElements
    {
       public static void Main()
        {
            List<int> numbers = new List<int>();
            string inputLine = Console.ReadLine();

            int lastRemoved = -1;

            string output = string.Empty;

            while (inputLine != "stop")
            {
                if (inputLine == "bang")
                {
                    if (numbers.Count == 0)
                    {
                        output = "nobody left to shoot! last one was {0}";
                        break;
                    }

                    int sum = SumElements(numbers);
                    double average = (double)sum / numbers.Count;

                    lastRemoved = ShootElement(numbers, average);
                    DecrementElements(numbers);
                }
                else
                {
                    int number = int.Parse(inputLine);
                    numbers.Insert(0, number);
                }

                inputLine = Console.ReadLine();
            }

            if (numbers.Count > 0 && output == string.Empty)
            {
                Console.WriteLine("survivors: {0}", string.Join(" ", numbers));
            }
            else if (numbers.Count == 0 && output == string.Empty)
            {
                Console.WriteLine($"you shot them all. last one was {lastRemoved}");
            }
            else
            {
                Console.WriteLine(output, lastRemoved);
            }
        }

        private static void DecrementElements(List<int> numbers)
        {
            for (int i = 0; i < numbers.Count; i++)
            {
                numbers[i]--;
            }
        }

        private static int ShootElement(List<int> numbers, double average)
        {
            int result = -1;

            if (numbers.Count == 1)
            {
                Console.WriteLine($"shot {numbers[0]}");
                result = numbers[0];
                numbers.RemoveAt(0);
                return result;
            }

            for (int i = 0; i < numbers.Count; i++)
            {
                if (numbers[i] < average)
                {
                    Console.WriteLine($"shot {numbers[i]}");
                    result = numbers[i];
                    numbers.RemoveAt(i);
                    break;
                }
            }

            return result;
        }

        private static int SumElements(List<int> numbers)
        {
            int sum = 0;

            for (int i = 0; i < numbers.Count; i++)
            {
                sum += numbers[i];
            }

            return sum;
        }
    }
}