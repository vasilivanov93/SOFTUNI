using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Battles
{
    class Battles
    {
        static void Main(string[] args)
        {
            int firstPlayer = int.Parse(Console.ReadLine());
            int secondPlayer = int.Parse(Console.ReadLine());
            int maxBattles = int.Parse(Console.ReadLine());

            for (int firstPlayerWithPokemon = 1; firstPlayerWithPokemon <= secondPlayer; firstPlayerWithPokemon++)
            {
                for (int secondPlayerWithPokemon = 1; secondPlayerWithPokemon <= firstPlayer; secondPlayerWithPokemon++)
                {
                    for (int i = 2; i <= secondPlayer ; i++)
                    {
                        for (int i2 = 2; 2 <= firstPlayer; i2++)
                        {
                            if ((firstPlayerWithPokemon == secondPlayerWithPokemon && secondPlayerWithPokemon == firstPlayerWithPokemon) || (i == i2 && i2 == i))

                            {
                                Console.Write($"({firstPlayerWithPokemon} <-> {secondPlayerWithPokemon})" + " ");
                            }
                        }
                    }
                }
            }
        }
    }
}
