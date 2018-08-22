using System;
using System.Linq;

namespace _02.Ladybugs
{
    public class Ladybugs
    {
        public static void Main()
        {
            int size = int.Parse(Console.ReadLine());
            int[] ladybugIndexes = Console.ReadLine()
                                           .Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                                           .Select(int.Parse)
                                           .ToArray();
            int[] field = new int[size];

            foreach (var ladybugIndex in ladybugIndexes)
            {
                if (ladybugIndex < 0 || ladybugIndex >= size)
                {
                    continue;
                }

                field[ladybugIndex] = 1;   
            }

            while (true)
            {
                string command = Console.ReadLine();

                if (command == "end")
                {
                    break;
                }

                string[] commandParts = command.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).ToArray();

                int currentladybugIndex = int.Parse(commandParts[0]);
                string directions = commandParts[1];
                int flyLenght = int.Parse(commandParts[2]);

                if (currentladybugIndex < 0 || currentladybugIndex >= size)
                {
                    continue;
                }

                if (field[currentladybugIndex] == 0)
                {
                    continue;
                }

                field[currentladybugIndex] = 0;
                int possition = currentladybugIndex;

                while (true)
                {
                    if (directions == "right")
                    {
                        possition += flyLenght;
                    }
                    else
                    {
                        possition -= flyLenght;
                    }

                    if (possition < 0 || possition >= size)
                    {
                        break;
                    }

                    if (field[possition] == 1)
                    {
                        continue;
                    }
                    else
                    {
                        field[possition] = 1;
                        break;
                    }
                }
            }

            Console.WriteLine(string.Join(" ", field));
        }
    }
}