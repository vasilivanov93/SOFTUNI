using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.Files
{
    public class Files
    {
        public class File
        {
            public string Name { get; set; }

            public string Folder { get; set; }

            public long Size { get; set; }
        }

        public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            List<File> allFiles = new List<File>();

            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split('\\').ToArray();

                string[] fileData = input.Last().Split(';').ToArray();

                string fileName = fileData[0];
                string fileSize = fileData.Last();

                File currentFile = new File();

                currentFile.Folder = input[0];
                currentFile.Name = fileName;
                currentFile.Size = long.Parse(fileSize);

                allFiles.Add(currentFile);
            }

            string[] command = Console.ReadLine().Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).ToArray();

            string folder = command.Last();
            string ext = command.First();

            Dictionary<string, long> results = new Dictionary<string, long>();

            foreach (var file in allFiles)
            {
                if (file.Folder.Equals(folder) && file.Name.EndsWith(ext))
                {
                    results[file.Name] = file.Size;
                }
            }

            if (results.Count == 0)
            {
                Console.WriteLine("No");
            }
            else
            {
                foreach (var result in results.OrderByDescending(r => r.Value).ThenBy(r => r.Key))
                {
                    Console.WriteLine($"{result.Key} - {result.Value} KB");
                }
            }
        }
    }
}