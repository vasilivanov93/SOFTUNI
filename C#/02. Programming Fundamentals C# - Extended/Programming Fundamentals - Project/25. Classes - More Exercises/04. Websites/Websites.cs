using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.Websites
{
   public class Website
    {
        public string Host { get; set; }

        public string Domain { get; set; }

        public List<string> Queries { get; set; }
    }

   public class Websites
    {
       public static void Main()
        {
            List<Website> websites = new List<Website>();
            string inputLine = Console.ReadLine();

            while (inputLine != "end")
            {
                string[] tokens = inputLine.Split(new[] { ' ', '|', ',' }, StringSplitOptions.RemoveEmptyEntries);
                
                if (tokens.Length > 2)
                {
                    string host = tokens[0];
                    string domain = tokens[1];
                    List<string> queries = tokens.Skip(2).ToList();

                    Website newWebsite = new Website();

                    newWebsite.Host = host;
                    newWebsite.Domain = domain;
                    newWebsite.Queries = queries;

                    websites.Add(newWebsite);  
                }
                else
                {
                    string host = tokens[0];
                    string domain = tokens[1];

                    Website newWebsite = new Website();

                    newWebsite.Host = host;
                    newWebsite.Domain = domain;

                    websites.Add(newWebsite);
                }

                inputLine = Console.ReadLine();
            }

            foreach (var website in websites)
            {
                var host = website.Host;
                var domain = website.Domain;

                if (website.Queries != null)
                {
                    Console.Write($"https://www.{host}.{domain}/query?=");
                    Console.WriteLine("[" + string.Join("]&[", website.Queries) + "]");
                }
                else
                {
                    Console.WriteLine($"https://www.{host}.{domain}");
                }
            }
        }
    }
}