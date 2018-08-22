using System;
using System.Linq;

namespace _02.ArrayManipulator
{
   public class ArrayManipulator
    {
       public static void Main()
        {
            int[] arr = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            string inputLine = Console.ReadLine();

            while (inputLine != "end")
            {
                string[] tokens = inputLine.Split(' ').ToArray();

                string command = tokens[0];

                switch (command)
                {
                    case "exchange":
                        int index = int.Parse(tokens[1]);

                        arr = ExchangeArrayElements(arr, index);
                        break;
                    case "max":
                    case "min":
                        string maxOrMin = command;
                        string evenOrOdd = tokens[1];

                        FindMaxOrMinEvenOrOddElement(arr, maxOrMin, evenOrOdd);
                        break;
                    case "first":
                    case "last":
                        string firstOrLast = command;
                        int count = int.Parse(tokens[1]);
                        evenOrOdd = tokens[2];

                        FindFirstOrLastEvenOrOddElement(arr, firstOrLast, count, evenOrOdd);
                        break;
                }

                inputLine = Console.ReadLine();
            }

            Console.WriteLine($"[{string.Join(", ", arr)}]");
        }

        private static int[] ExchangeArrayElements(int[] arr, int index)
        {
            bool isValidIndex = index >= 0 && index < arr.Length;

            if (!isValidIndex)
            {
                Console.WriteLine("Invalid index");
                return arr;
            }

            int[] leftPart = arr.Take(index + 1).ToArray();
            int[] rightPart = arr.Skip(index + 1).ToArray();

            int[] combinedArray = rightPart.Concat(leftPart).ToArray();
            return combinedArray;
        }


        private static void FindMaxOrMinEvenOrOddElement(int[] arr, string maxOrMin, string evenOrOdd)
        {
            var evenOrOddElementsParity = evenOrOdd == "even" ? 0 : 1;
            var evenOrOddElements = arr.Where(a => a % 2 == evenOrOddElementsParity).ToArray();

            if (!evenOrOddElements.Any())
            {
                Console.WriteLine("No matches");
                return;
            }

            int maxOrMinElement = maxOrMin == "max" ? evenOrOddElements.Max() : evenOrOddElements.Min();
            int maxOrMinElementIndex = Array.LastIndexOf(arr, maxOrMinElement);

            Console.WriteLine(maxOrMinElementIndex);
        }


        private static void FindFirstOrLastEvenOrOddElement(int[] arr, string firstOrLast, int count, string evenOrOdd)
        {
            if (count > arr.Length)
            {
                Console.WriteLine("Invalid count");
                return;
            }

            int evenOrOddElementsParity = evenOrOdd == "even" ? 0 : 1;
            int[] evenOrOddElements = arr.Where(a => a % 2 == evenOrOddElementsParity).ToArray();

            int[] foundElements;
            if (firstOrLast == "first")
            {
                foundElements = evenOrOddElements.Take(count).ToArray();
            }
            else
            {
                foundElements = evenOrOddElements.Reverse().Take(count).Reverse().ToArray();
            }

            Console.WriteLine($"[{string.Join(", ", foundElements)}]");
        }
    }
}