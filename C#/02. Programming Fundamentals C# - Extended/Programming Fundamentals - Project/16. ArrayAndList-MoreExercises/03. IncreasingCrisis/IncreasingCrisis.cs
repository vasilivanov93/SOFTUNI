using System;
using System.Collections.Generic;
using System.Linq;

namespace _03.IncreasingCrisis
{
   public class IncreasingCrisis
    {
       public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            List<int> numbers = new List<int>();

            for (int i = 0; i < n; i++)
            {
                List<int> numbersToInsert = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
                List<int> sortedNumbersToInsert = new List<int>();

                sortedNumbersToInsert = AddItemsToList(sortedNumbersToInsert, numbersToInsert);
                sortedNumbersToInsert.Sort();

                bool inserted = false;
                bool alreadyInserted = false;

                List<int> increasingSequenceOfNumbersToInsert = new List<int>();

                if (numbersToInsert.SequenceEqual(sortedNumbersToInsert))
                {
                    if (i == 0)
                    {
                        numbers.AddRange(numbersToInsert);
                    }
                    else
                    {
                        numbers = GetNumbersToInsert(numbers, inserted, numbersToInsert);
                    }
                }
                else
                {
                    if (i == 0)
                    {
                        numbers = GetOnlyIncreasingSequenceOfNumbersToInsert(numbersToInsert, increasingSequenceOfNumbersToInsert, alreadyInserted);
                    }
                    else
                    {
                        increasingSequenceOfNumbersToInsert = GetOnlyIncreasingSequenceOfNumbersToInsert(numbersToInsert, increasingSequenceOfNumbersToInsert, alreadyInserted);

                        numbers = InsertIncreasingSequenceToNumbers(numbers, inserted, increasingSequenceOfNumbersToInsert);
                    }
                }
            }

            Console.WriteLine(string.Join(" ", numbers));
        }

        static List<int> AddItemsToList(List<int> sortedList, List<int> sortedNumbersToInsert)
        {
            for (int o = 0; o < sortedNumbersToInsert.Count; o++)
            {
                sortedList.Add(sortedNumbersToInsert[o]);
            }

            return sortedList;
        }

        static List<int> GetNumbersToInsert(List<int> numbers, bool inserted, List<int> numbersToInsert)
        {
            for (int index = numbers.Count - 1; index >= 0; index--)
            {
                if (inserted)
                {
                    break;
                }

                int currentNumber = numbers[index];

                for (int j = 0; j < numbersToInsert.Count; j++)
                {
                    int currentNumberToInsert = numbersToInsert[j];

                    if (currentNumber <= currentNumberToInsert)
                    {
                        numbers.InsertRange(index + 1, numbersToInsert);
                        inserted = true;
                        break;
                    }
                }
            }

            return numbers;
        }

        static List<int> GetOnlyIncreasingSequenceOfNumbersToInsert(List<int> numbersToInsert, List<int> increasingSequenceOfNumbersToInsert, bool alreadyInserted)
        {
            for (int k = 0; k < numbersToInsert.Count - 1; k++)
            {
                if (numbersToInsert[k] <= numbersToInsert[k + 1])
                {
                    if (alreadyInserted == false)
                    {
                        increasingSequenceOfNumbersToInsert.Add(numbersToInsert[k]);
                    }
                    increasingSequenceOfNumbersToInsert.Add(numbersToInsert[k + 1]);
                    alreadyInserted = true;
                }
                else
                {
                    if (alreadyInserted == false)
                    {
                        increasingSequenceOfNumbersToInsert.Add(numbersToInsert[0]);
                    }
                    break;
                }
            }

            return increasingSequenceOfNumbersToInsert;
        }

        static List<int> InsertIncreasingSequenceToNumbers(List<int> numbers, bool inserted, List<int> increasingSequenceOfNumbersToInsert)
        {
            for (int k = numbers.Count - 1; k >= 0; k--)
            {
                if (inserted)
                {
                    break;
                }

                int currentNumber = numbers[k];

                for (int j = 0; j < increasingSequenceOfNumbersToInsert.Count; j++)
                {
                    int currentNumberToInsert = increasingSequenceOfNumbersToInsert[j];

                    if (currentNumber <= currentNumberToInsert)
                    {
                        if (k == numbers.Count - 1)
                        {
                            numbers.AddRange(increasingSequenceOfNumbersToInsert);

                            inserted = true;
                            break;
                        }
                        else
                        {
                            List<int> copyOfNumbers = new List<int>();

                            for (int i = 0; i < numbers.Count; i++)
                            {
                                copyOfNumbers.Add(i);
                            }

                            int indexToRemove = k + 1;

                            for (int p = k + 1; p <= copyOfNumbers.Count - 1; p++)
                            {
                                numbers.RemoveAt(indexToRemove);
                            }

                            numbers.AddRange(increasingSequenceOfNumbersToInsert);

                            inserted = true;
                            break;
                        }
                    }
                }
            }
            return numbers;
        }
    }
}