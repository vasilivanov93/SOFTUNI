using System;
using System.Linq;
using System.IO;

namespace _04.MergeFiles
{
   public class MergeFiles
    {
       public static void Main()
        {
            string[] firstInput = File.ReadAllText("../../input1.txt")
                .Split(new char[] { '\n', '\r', ' ' }
                , StringSplitOptions.RemoveEmptyEntries)
                .ToArray();

            string[] secondInput = File.ReadAllText("../../input2.txt")
                .Split(new char[] { '\n', '\r', ' ' }
                , StringSplitOptions.RemoveEmptyEntries)
                .ToArray();


            for (int i = 0; i < firstInput.Length; i++)
            {
                File.AppendAllText("../../output.txt", firstInput[i] + Environment.NewLine + secondInput[i] + Environment.NewLine);
            }
        }
    }
}
