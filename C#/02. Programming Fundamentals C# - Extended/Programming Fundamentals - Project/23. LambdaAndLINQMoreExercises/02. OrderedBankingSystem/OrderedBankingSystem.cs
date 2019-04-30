using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.OrderedBankingSystem
{
   public class OrderedBankingSystem
    {
      public static void Main()
        {
            Dictionary<string, Dictionary<string, decimal>> banksAndAcounts = new Dictionary<string, Dictionary<string, decimal>>();
            string inputLine = Console.ReadLine();

            while (inputLine != "end")
            {
                string[] tokens = inputLine.Split(new[] { ' ', '-', '>' }, StringSplitOptions.RemoveEmptyEntries);

                string bankName = tokens[0];
                string bankAcountName = tokens[1];
                decimal bankAcountBalance = decimal.Parse(tokens[2]);

                if (!banksAndAcounts.ContainsKey(bankName))
                {
                    banksAndAcounts.Add(bankName, new Dictionary<string, decimal>());
                }

                if (!banksAndAcounts[bankName].ContainsKey(bankAcountName))
                {
                    banksAndAcounts[bankName].Add(bankAcountName, 0);
                }

                banksAndAcounts[bankName][bankAcountName] += bankAcountBalance;

                inputLine = Console.ReadLine();
            }

            foreach (var bank in banksAndAcounts.OrderByDescending(bank => bank.Value.Sum(acount => acount.Value))
                                                .ThenByDescending(bank => bank.Value.Max(acount => acount.Value)))
            {
                foreach (var acount in bank.Value.OrderByDescending(acount => acount.Value))
                {
                    Console.WriteLine($"{acount.Key} -> {acount.Value} ({bank.Key})");
                }
            }
        }
    }
}
