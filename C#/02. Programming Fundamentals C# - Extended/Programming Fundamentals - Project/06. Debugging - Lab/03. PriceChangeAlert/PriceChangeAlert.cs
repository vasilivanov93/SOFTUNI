﻿using System;

namespace _03.PriceChangeAlert
{
   public class PriceChangeAlert
    {
       public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            decimal threshold = decimal.Parse(Console.ReadLine());
            decimal lastPrice = decimal.Parse(Console.ReadLine());

            for (int i = 0; i < n - 1; i++)
            {
                decimal currentPrice = decimal.Parse(Console.ReadLine());
                decimal diff = GetPercentageDiff(lastPrice, currentPrice);
                bool isSignificant = IsSignificantDiff(diff, threshold);
                string message = GetMessage(currentPrice, lastPrice, diff, isSignificant);
                Console.WriteLine(message);
                lastPrice = currentPrice;
            }
        }

        public static string GetMessage(decimal current, decimal last, decimal diff, bool isSignif)
        {
            string message = "";
            decimal diffInPercent = diff * 100;
            //decimal eps = 0.000001m;

            if (Math.Abs(diff) == 0)
            {
                message = string.Format("NO CHANGE: {0}", current);
            }
            else if (!isSignif && Math.Abs(diff) > 0)
            {
                message = string.Format("MINOR CHANGE: {0} to {1} ({2:F2}%)", last, current, diffInPercent);
            }
            else if (isSignif && (diff > 0))
            {
                message = string.Format("PRICE UP: {0} to {1} ({2:F2}%)", last, current, diffInPercent);
            }
            else if (isSignif && (diff < 0))
                message = string.Format("PRICE DOWN: {0} to {1} ({2:F2}%)", last, current, diffInPercent);

            return message;
        }

        public static bool IsSignificantDiff(decimal diff, decimal threshold)
        {
            if (Math.Abs(diff) < threshold)
            {
                return false;
            }
            return true;
        }

        public static decimal GetPercentageDiff(decimal last, decimal current)
        {
            decimal diff = (current - last) / last;
            return diff;
        }
    }
}
