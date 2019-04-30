using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.OptimizedBankingSystem
{
   public class OptimizedBankingSystem
    {
       public class BankAccount
       {
            public string Name { get; set; }

            public string Bank { get; set; }

            public decimal Balance { get; set; }
       }

       public static void Main()
        {
            var banksAndAccounts = new List<BankAccount>();
            string inputLine = Console.ReadLine();

            while (inputLine != "end")
            {
                string[] tokens = inputLine.Split(new[] { ' ', '|' }, StringSplitOptions.RemoveEmptyEntries);

                var currentBank = new BankAccount
                {
                    Bank = tokens[0],
                    Name = tokens[1],
                    Balance = decimal.Parse(tokens[2])
                };

                banksAndAccounts.Add(currentBank);

                inputLine = Console.ReadLine();
            }

            foreach (var kvp in banksAndAccounts.OrderByDescending(x => x.Balance).ThenBy(y => y.Bank.Length))
            {
                Console.WriteLine($"{kvp.Name} -> {kvp.Balance} ({kvp.Bank})");
            }
        }
    }
}
