using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
	public class Justification
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		[Required]
		public DateTime Date { get; set; }

		[Required]
		public string Motive { get; set; }

		[Required]
		public bool State { get; set; }

		[Required]
		public int AttendanceId { get; set; }

		[ForeignKey("AttendanceId")]
		public virtual Attendance Attendance { get; set; }
	}
}