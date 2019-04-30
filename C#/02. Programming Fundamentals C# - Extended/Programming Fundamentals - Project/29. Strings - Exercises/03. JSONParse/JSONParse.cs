using System;
using System.Collections.Generic;

namespace _03.JSONParse
{
   public class JSONParse
    {
        public class Student
        {
            public string Name { get; set; }

            public int Age { get; set; }

            public List<int> Grades { get; set; }
        }

        public static void Main()
        {
            string input = Console.ReadLine();

            string firstPattern = "{";
            string secondPattern = "}";

            int indexOfFirtst = input.IndexOf(firstPattern);
            int indexOfSecond = input.IndexOf(secondPattern);
            string partOfStudent = string.Empty;

            List<Student> students = new List<Student>();
            Student student = new Student();

            while (indexOfFirtst != -1)
            {
                partOfStudent = input.Substring(indexOfFirtst, (indexOfSecond - indexOfFirtst));
                string[] tokens = partOfStudent.Split(new char[] { '{', '}', ':', '\"', ',', '[', ']' }, StringSplitOptions.RemoveEmptyEntries);

                student.Name = tokens[1];
                student.Age = int.Parse(tokens[3]);
                student.Grades = new List<int>();

                for (int i = 5; i < tokens.Length; i++)
                {
                    student.Grades.Add(int.Parse(tokens[i]));
                }

                if (student.Grades.Count == 0)
                {
                    Console.WriteLine($"{student.Name} : {student.Age} -> None");
                }
                else
                {
                    Console.WriteLine($"{student.Name} : {student.Age} -> {string.Join(", ", student.Grades)}");
                }

                indexOfFirtst = input.IndexOf(firstPattern, indexOfFirtst + 1);
                indexOfSecond = input.IndexOf(secondPattern, indexOfFirtst + 1);
                partOfStudent = string.Empty;
            }
        }
    }
}
