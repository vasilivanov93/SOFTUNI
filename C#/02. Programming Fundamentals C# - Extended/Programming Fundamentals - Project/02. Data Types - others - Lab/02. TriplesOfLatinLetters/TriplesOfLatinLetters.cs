using System;

namespace _02.TriplesOfLatinLetters
{
   public class TriplesOfLatinLetters
    {
       public static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            for (char firstLetter = 'a'; firstLetter < n + 'a'; firstLetter++)
            {
                for (char secondLetter = 'a'; secondLetter < n + 'a'; secondLetter++)
                {
                    for (char thirdLetter = 'a'; thirdLetter < n + 'a'; thirdLetter++)
                    {
                        Console.WriteLine($"{firstLetter}{secondLetter}{thirdLetter}");
                    }
                }
            }
        }
    }
}