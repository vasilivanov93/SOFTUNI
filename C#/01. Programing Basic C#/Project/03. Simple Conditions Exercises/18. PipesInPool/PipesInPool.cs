using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _18.PipesInPool
{
    class PipesInPool
    {
        static void Main(string[] args)
        {
            int v = int.Parse(Console.ReadLine()); // Debit
            int PipeOne = int.Parse(Console.ReadLine()); // Debit First Pipe
            int PipeTwo = int.Parse(Console.ReadLine()); // Debit os the second Pipe
            double hours = double.Parse(Console.ReadLine());

            double Capacity = hours * (PipeOne + PipeTwo);

            if (Capacity <= v)
            {
                double SumPercent = (Capacity / v) * 100;
                double PipeOnePercent = ((hours * PipeOne) / Capacity) * 100;
                double PipeTwoPercent = ((hours * PipeTwo) / Capacity) * 100;

                Console.WriteLine("The pool is {0}% full. Pipe 1: {1}%. Pipe 2: {2}%.", (int)SumPercent, (int)PipeOnePercent, (int)PipeTwoPercent);
            }
            if (Capacity > v)
            {
                double difference = Capacity - v;

                Console.WriteLine("For {0} hours the pool overflows with {1} liters.", hours, difference);
            }
        }
    }
}