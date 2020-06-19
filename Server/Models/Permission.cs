using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
	public class Permission
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		[Required]
		public DateTime PresentationDate { get; set; }

		[Required]
		public DateTime Date { get; set; }

		[Required, MaxLength(100)]
		public string Motive { get; set; }

		[Required]
		public bool State { get; set; }

		[Required]
		public string EmployeeCardId { get; set; }

		[ForeignKey("EmployeeCardId")]
		public Employee Employee { get; set; }
	}
}