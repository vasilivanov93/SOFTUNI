using System;
using System.Collections.Generic;

namespace _06.Messages
{
    public class User
    {
        public string UserName { get; set; }

        public List<string> ReceivedMessages { get; set; }
    }

    public class Message
    {
        public List<string> Content { get; set; }

        public string Sender { get; set; }
    }

    public class Messages
    {
       public static void Main()
        {
            string inputLine = Console.ReadLine();

            Dictionary<string, Message> senderDict = new Dictionary<string, Message>();
            List<string> registeredUsers = new List<string>();

            while (inputLine != "exit")
            {
                string[] tokens = inputLine.Split();

                if (tokens.Length < 3)
                {
                    registeredUsers.Add(tokens[1]);
                }
                else
                {
                    string senderName = tokens[0];
                    string currentContent = tokens[3];
                    string recipientName = tokens[2];
                    User recepientUser = new User();
                    Message senderUser = new Message();

                    if (registeredUsers.Contains(senderName) && registeredUsers.Contains(recipientName))
                    {
                        if (!senderDict.ContainsKey(senderName))
                        {
                            senderUser.Sender = senderName;
                            senderUser.Content = new List<string>();
                            senderDict.Add(senderUser.Sender, senderUser);
                        }
                        if (!senderDict.ContainsKey(recipientName))
                        {
                            Message tempMessage = new Message { Sender = recipientName, Content = new List<string>() };
                            senderDict.Add(tempMessage.Sender, tempMessage);
                        }

                        senderDict[senderName].Content.Add(currentContent);
                    }
                }

                inputLine = Console.ReadLine();
            }

            string[] users = Console.ReadLine().Split();
            string firstUser = users[0];
            string secondUser = users[1];
            bool isAnyMessage = false;

            if (senderDict.ContainsKey(firstUser) && senderDict.ContainsKey(secondUser))
            {
                int max = Math.Max(senderDict[firstUser].Content.Count, senderDict[secondUser].Content.Count);
                int firstUserCount = senderDict[firstUser].Content.Count;
                int secondUserCount = senderDict[secondUser].Content.Count;

                for (int i = 0; i < max; i++)
                {
                    if (senderDict.ContainsKey(firstUser) && firstUserCount > 0)
                    {
                        Console.WriteLine($"{senderDict[firstUser].Sender}: {senderDict[firstUser].Content[i]}");
                        isAnyMessage = true;
                    }
                    if (senderDict.ContainsKey(secondUser) && secondUserCount > 0)
                    {
                        Console.WriteLine($"{senderDict[secondUser].Content[i]} :{senderDict[secondUser].Sender}");
                        isAnyMessage = true;
                    }

                    firstUserCount--;
                    secondUserCount--;
                }
            }

            if (!isAnyMessage)
            {
                Console.WriteLine("No messages");
            }
        }
    }
}