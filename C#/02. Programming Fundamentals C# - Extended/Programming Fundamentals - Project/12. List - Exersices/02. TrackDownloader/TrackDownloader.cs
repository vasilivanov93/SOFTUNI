using System;
using System.Collections.Generic;

namespace _02.TrackDownloader
{
   public class TrackDownloader
    {
       public static void Main()
        {
            string[] blackList = Console.ReadLine().Split(' ');
            List<string> downloadTracks = new List<string>();

            string fileNames = Console.ReadLine();

            while (fileNames != "end")
            {
                bool isOnBlackLisit = false;

                foreach (var word in blackList)
                {
                    if (fileNames.Contains(word))
                    {
                        isOnBlackLisit = true;
                        break;
                    }
                }

                if (!isOnBlackLisit)
                {
                    downloadTracks.Add(fileNames);
                }

                fileNames = Console.ReadLine();
            }

            downloadTracks.Sort();

            foreach (var track in downloadTracks)
            {
                Console.WriteLine(track);
            }
        }
    }
}