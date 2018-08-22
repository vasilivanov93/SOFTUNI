using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.CommandInterpreter
{
   public class CommandInterpreter
    {
       public static void Main()
        {
            List<string> commandInterpreter = Console.ReadLine().Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).ToList();
            string inputLine = Console.ReadLine();

            while (inputLine != "end")
            {
                string[] tokens = inputLine.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).ToArray();

                string command = tokens[0];

                switch (command)
                {
                    case "reverse":
                        int startReverse = int.Parse(tokens[2]);
                        int countReverse = int.Parse(tokens[4]);

                        if (IsValid(commandInterpreter, startReverse, countReverse))
                        {
                            Reverse(commandInterpreter, startReverse, countReverse);
                        }
                        else
                        {
                            Console.WriteLine("Invalid input parameters.");
                        }
                        break;
                    case "sort":
                        int startSort = int.Parse(tokens[2]);
                        int countSort = int.Parse(tokens[4]);

                        if (IsValid(commandInterpreter, startSort, countSort))
                        {
                            Sort(commandInterpreter, startSort, countSort);
                        }
                        else
                        {
                            Console.WriteLine("Invalid input parameters.");
                        }
                        break;
                    case "rollLeft":
                        int countRollLeft = int.Parse(tokens[1]);

                        if (countRollLeft >= 0)
                        {
                            RollLeft(commandInterpreter, countRollLeft);
                        }
                        else
                        {
                            Console.WriteLine("Invalid input parameters.");
                        }
                        break;
                    case "rollRight":
                        int countRollRight = int.Parse(tokens[1]);

                        if (countRollRight >= 0)
                        {
                            RollRight(commandInterpreter, countRollRight);
                        }
                        else
                        {
                            Console.WriteLine("Invalid input parameters.");
                        }
                        break;
                }

                inputLine = Console.ReadLine();
            }

            Console.WriteLine($"[{string.Join(", ", commandInterpreter)}]");

        }

        private static void Reverse(List<string> commandInterpreter, int startReverse, int countReverse)
        {
            commandInterpreter.Reverse(startReverse, countReverse);
        }

        private static void Sort(List<string> commandInterpreter, int startSort, int countSort)
        {
            commandInterpreter.Sort(startSort, countSort, null);
        }

        private static void RollLeft(List<string> commandInterpreter, int countRollLeft)
        {
            int rotations = countRollLeft % commandInterpreter.Count;

            for (int i = 0; i < rotations; i++)
            {
                string firtsElement = commandInterpreter[0];

                for (int j = 0; j < commandInterpreter.Count - 1; j++)
                {
                    commandInterpreter[j] = commandInterpreter[j + 1];
                }

                commandInterpreter[commandInterpreter.Count - 1] = firtsElement; 
            }
        }

        private static void RollRight(List<string> commandInterpreter, int countRollRight)
        {
            int rotations = countRollRight % commandInterpreter.Count;

            for (int i = 0; i < rotations; i++)
            {
                string lastElement = commandInterpreter[commandInterpreter.Count - 1];

                for (int j = commandInterpreter.Count - 1; j > 0; j--)
                {
                    commandInterpreter[j] = commandInterpreter[j - 1];
                }

                commandInterpreter[0] = lastElement;
            }
        }

        private static bool IsValid(List<string> commandInterpreter, int start, int count)
        {
            bool result = start >= 0 && start < commandInterpreter.Count && count >= 0 && (start + count) <= commandInterpreter.Count;
            return result;
        }
    }
}