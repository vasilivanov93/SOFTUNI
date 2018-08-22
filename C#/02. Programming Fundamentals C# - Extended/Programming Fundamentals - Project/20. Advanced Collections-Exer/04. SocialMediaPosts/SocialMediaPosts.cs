using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.SocialMediaPosts
{
   public class SocialMediaPosts
    {
       public static void Main()
        {
            Dictionary<string, Dictionary<string, List<string>>> socialMedia = new Dictionary<string, Dictionary<string, List<string>>>();
            string input = Console.ReadLine();

            while (input != "drop the media")
            {
                string[] tokens = input.Split(' ').ToArray();
                string command = tokens[0];
                string postName = tokens[1];

                if (!socialMedia.ContainsKey(postName))
                {
                    socialMedia[postName] = new Dictionary<string, List<string>>();
                }

                if (command == "like")
                {
                    if (!socialMedia[postName].ContainsKey("Like"))
                    {
                        socialMedia[postName]["Like"] = new List<string>();
                    }

                    socialMedia[postName]["Like"].Add(command);
                }
                else if (command == "dislike")
                {
                    if (!socialMedia[postName].ContainsKey("Dislike"))
                    {
                        socialMedia[postName]["Dislike"] = new List<string>();
                    }

                    socialMedia[postName]["Dislike"].Add(command);
                }
                else if (command == "comment")
                {
                    string writer = tokens[2];
                    int length = command.Length + postName.Length + writer.Length + 3;
                    string comment = input.Substring(length);

                    if (!socialMedia[postName].ContainsKey(writer))
                    {
                        socialMedia[postName][writer] = new List<string>();
                    }

                    socialMedia[postName][writer].Add(comment);
                }

                input = Console.ReadLine();
            }

            foreach (var post in socialMedia)
            {
                int likes = 0;
                int dislikes = 0;
                Dictionary<string, List<string>> writers = post.Value;

                foreach (var item in post.Value)
                {
                    if (item.Key == "Like")
                    {
                        likes = item.Value.Count;
                    }
                    else if (item.Key == "Dislike")
                    {
                        dislikes = item.Value.Count;
                    }
                }

                Console.WriteLine($"Post: {post.Key} | Likes: {likes} | Dislikes: {dislikes}");
                Console.WriteLine("Comments:");

                bool noComment = true;

                foreach (var comment in writers)
                {
                    if (comment.Key != "Like" && comment.Key != "Dislike")
                    {
                        noComment = false;

                        foreach (var com in comment.Value)
                        {
                            Console.WriteLine($"*  {comment.Key}: {com}");
                        }
                    }
                }

                if (noComment)
                {
                    Console.WriteLine("None");
                }
            }
        }
    }
}