using System;
using System.ComponentModel.DataAnnotations;

namespace MiniForum.Models
{
    public class Article
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Будь ласка, введіть заголовок.")]
        [StringLength(100, ErrorMessage = "Заголовок не може перевищувати 100 символів.")]
        public required string Title { get; set; }

        [Required(ErrorMessage = "Будь ласка, введіть автора.")]
        [StringLength(50, ErrorMessage = "Ім'я автора не може перевищувати 50 символів.")]
        public required string Author { get; set; }

        [Required(ErrorMessage = "Будь ласка, введіть текст статті.")]
        public required string Content { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}