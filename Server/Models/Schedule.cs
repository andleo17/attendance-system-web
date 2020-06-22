using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
	public class Schedule
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		[Required]
		public DateTime StartDate { get; set; }

		[Required]
		public DateTime FinishDate { get; set; }

		[Required]
		public bool State { get; set; }

		[Required]
		public string EmployeeCardId { get; set; }

		[ForeignKey("EmployeeCardId")]
		public virtual Employee Employee { get; set; }

		public virtual ICollection<ScheduleDetail> ScheduleDetail { get; set; }
	}
}