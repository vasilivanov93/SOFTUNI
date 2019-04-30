using System;

namespace _12.VariableInHexadecimalFormat
{
   public class VariableInHexadecimalFormat
    {
       public static void Main()
        {
            string hexadecimalFormat = Console.ReadLine();
            decimal decimalFormat = Convert.ToUInt32(hexadecimalFormat, 16);

            Console.WriteLine(decimalFormat);
        }
    }
}
