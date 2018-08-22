using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.Exercises
{
   public class Exercise
   {
        public string Topic { get; set; }

        public string CourseName { get; set; }

        public string JudgeContestLink { get; set; }

        public List<string> Problems { get; set; }
   }

   public class Exercises
    {
       public static void Main()
        {
            List<Exercise> exercises = new List<Exercise>();
            string inputLine = Console.ReadLine();

            while (inputLine != "go go go")
            {
                string[] tokens = inputLine.Split(new[] { ' ', '-', '>', ',' }, StringSplitOptions.RemoveEmptyEntries);

                string topic = tokens[0];
                string courceName = tokens[1];
                string judgeContestLink = tokens[2];
                List<string> problems = tokens.Skip(3).ToList();

                Exercise newExercise = new Exercise();

                newExercise.Topic = topic;
                newExercise.CourseName = courceName;
                newExercise.JudgeContestLink = judgeContestLink;
                newExercise.Problems = problems;

                exercises.Add(newExercise);

                inputLine = Console.ReadLine();
            }

            foreach (var exercise in exercises)
            {
                Console.WriteLine($"Exercises: {exercise.Topic}");
                Console.WriteLine($"Problems for exercises and homework for the \"{exercise.CourseName}\" course @ SoftUni.");
                Console.WriteLine($"Check your solutions here: {exercise.JudgeContestLink}");

                int count = 1;

                foreach (var problem in exercise.Problems)
                {
                    Console.WriteLine($"{count}. {problem}");
                    count++;
                }
            }
        }
    }
}
