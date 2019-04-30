using System.ComponentModel.DataAnnotations;

namespace SoftUniLabs.Models
{
    public class Lab
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public int Capacity { get; set; }

        public string Status { get; set; }
    }
}
