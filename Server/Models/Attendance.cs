using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
	public class Attendance
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		[Required]
		public DateTime Date { get; set; }

		[Required]
		public TimeSpan InHour { get; set; }

		public TimeSpan OutHour { get; set; }

		[Required]
		public string EmployeeCardId { get; set; }

		[ForeignKey("EmployeeCardId")]
		public virtual Employee Employee { get; set; }

		public virtual Justification Justification { get; set; }

	}
}