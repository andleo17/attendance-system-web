using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
	public class Contract
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		[Required]
		public DateTime StartDate { get; set; }

		[Required]
		public DateTime FinishDate { get; set; }

		[Required]
		public decimal Mount { get; set; }

		[Required]
		public bool State { get; set; }

		[Required]
		public bool ExtraHours { get; set; }

		[Required]
		public string EmployeeCardId { get; set; }

		[ForeignKey("EmployeeCardId")]
		public Employee Employee { get; set; }
	}
}