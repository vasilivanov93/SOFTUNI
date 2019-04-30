using System;

namespace _01.MelrahShake
{
   public class MelrahShake
    {
       public static void Main()
        {
            string inputLine = Console.ReadLine();
            string pattern = Console.ReadLine();

            while (true)
            {
                int lastIndex = inputLine.LastIndexOf(pattern);
                int firstIndex = inputLine.IndexOf(pattern);

                if (firstIndex != -1 && lastIndex != -1 && firstIndex != lastIndex && pattern.Length > 0)
                {
                    Console.WriteLine("Shaked it.");
                    inputLine = inputLine.Remove(firstIndex, pattern.Length);
                    lastIndex = inputLine.LastIndexOf(pattern);
                    inputLine = inputLine.Remove(lastIndex, pattern.Length);
                }
                else
                {
                    Console.WriteLine("No shake.");
                    Console.WriteLine(inputLine);
                    break;
                }

                int indexToRemove = pattern.Length / 2;
                pattern = pattern.Remove(indexToRemove, 1);
            }
        }
    }
}