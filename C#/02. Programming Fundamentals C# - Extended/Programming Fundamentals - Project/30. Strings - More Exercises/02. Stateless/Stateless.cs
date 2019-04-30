using System;

namespace _02.Stateless
{
   public class Stateless
    {
       public static void Main()
        {
            string states = Console.ReadLine();
            string fiction = Console.ReadLine();

            while (true)
            {
                while (fiction.Length > 0)
                {
                    if (states.Contains(fiction))
                    {
                        states = states.Replace(fiction, string.Empty).Trim();
                    }

                    fiction = fiction.Remove(0, 1).Trim();

                    if (fiction.Length != 0)
                    {
                        fiction = fiction.Remove(fiction.Length - 1, 1).Trim();
                    }
                }

                if (states.Length == 0)
                {
                    Console.WriteLine("(void)");
                }
                else
                {
                    Console.WriteLine(states);
                }

                states = Console.ReadLine();

                if (states == "collapse")
                {
                    break;
                }
                else
                {
                    fiction = Console.ReadLine();
                }
            }
        }
    }
}