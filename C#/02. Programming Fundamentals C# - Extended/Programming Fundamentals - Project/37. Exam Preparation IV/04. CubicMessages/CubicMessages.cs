using System;
using System.Text.RegularExpressions;

namespace _04.CubicMessages
{
  public class CubicMessages
    {
       public static void Main()
        {          
            string inputLine = Console.ReadLine();

            string pattern = @"^(?<leftPart>\d+)(?<message>[a-zA-Z]+)(?<rightPart>[^a-zA-Z]+)?$";
            Regex messageRegex = new Regex(pattern);

            while (inputLine != "Over!")
            {
                Match match = messageRegex.Match(inputLine);

                int messageLength = int.Parse(Console.ReadLine());

                string message = match.Groups["message"].Value;

               if (message.Length != messageLength)
               {
                   inputLine = Console.ReadLine();
                   continue;
               }

                string leftPart = match.Groups["leftPart"].Value;
                string rightPart = match.Groups["rightPart"].Value;

                string verificationCode = string.Empty;

                string verificationsIndexes = leftPart + rightPart;

                foreach (var @char in verificationsIndexes)
                {
                    int index = 0;
                    bool isDigit = int.TryParse(@char.ToString(), out index);
                    bool isValidIndex = index >= 0 && index < message.Length;

                    if (isDigit && isValidIndex)
                    {
                        char messageChar = message[index];
                        verificationCode += messageChar;
                    }
                    else
                    {
                        verificationCode += " ";
                    }
                }

                Console.WriteLine($"{message} == {verificationCode}");

                inputLine = Console.ReadLine();
            }
        }
    }
}