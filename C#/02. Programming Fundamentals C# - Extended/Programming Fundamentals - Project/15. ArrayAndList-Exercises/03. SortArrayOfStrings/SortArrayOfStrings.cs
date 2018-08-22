using System;

namespace _03.SortArrayOfStrings
{
    public class SortArrayOfStrings
    {
        public static void Main()
        {
            string[] input = Console.ReadLine().Split();

            for (int i = 0; i < input.Length; i++)
            {
                for (int j = i + 1; j < input.Length; j++)
                {
                    int greater = string.Compare(input[i], input[j]);
					
                    if (greater == 1)
                    {
                        string temp = input[i];
                        input[i] = input[j];
                        input[j] = temp;
                    }
                }
            }
			
            Console.WriteLine(string.Join(" ", input));
        }
    }
}