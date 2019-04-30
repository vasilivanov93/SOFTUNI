using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.JSONStringify
{
    public class Student
    {
        public string Name { get; set; }

        public int Age { get; set; }
        
        public int[] Grades { get; set; }
    }

    public class JSONStringify
    {
        public static void Main()
        {
            List<Student> students = new List<Student>();

            string input = Console.ReadLine();

            while (input != "stringify")
            {
                string[] tokens = input.Split(new[] { ' ', ':', '-', '>', ',' }
                                             , StringSplitOptions.RemoveEmptyEntries);

                string name = tokens[0];
                int age = int.Parse(tokens[1]);
                int[] grades = tokens.Skip(2).Select(int.Parse).ToArray();

                Student newStudent = new Student();

                newStudent.Name = name;
                newStudent.Age = age;
                newStudent.Grades = grades;

                students.Add(newStudent);

                input = Console.ReadLine();
            }

            string output = string.Empty;

            output += "[";

            for (int i = 0; i < students.Count; i++)
            {
                Student currentStudent = students[i];

                output += "{";

                output += "name:\"" + currentStudent.Name + "\"" + ",";
                output += "age:" + currentStudent.Age + ",";
                output += "grades:[" + string.Join(", ", currentStudent.Grades) + "]";

                output += "}";

                if (i < students.Count - 1)
                {
                    output += ",";
                }
            }

            output += "]";

            Console.WriteLine(output);
        }
    }
}