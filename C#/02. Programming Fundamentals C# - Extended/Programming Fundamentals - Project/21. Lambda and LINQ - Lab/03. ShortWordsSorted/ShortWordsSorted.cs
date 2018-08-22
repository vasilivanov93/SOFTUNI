using System;
using System.Linq;

namespace _03.ShortWordsSorted
{
   public class ShortWordsSorted
    {
       public static void Main()
        {
            string[] words = Console.ReadLine()
                          .Split(new[] { '.', ',', ':', ';', '(', ')', '[', ']', '"', '\'', '\\', '/', '!', '?', ' ' }, StringSplitOptions.RemoveEmptyEntries)
                          .Where(w => w.Length < 5)
                          .Select(w => w.ToLower())
                          .OrderBy(w => w)
                          .Distinct()
                          .ToArray();

            Console.WriteLine(string.Join(", ", words));
        }
    }
}
