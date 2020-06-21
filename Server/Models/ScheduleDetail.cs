using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
	public class ScheduleDetail
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		[Required, Range(1, 6)]
		public byte Day { get; set; }

		[Required]
		public TimeSpan InHour { get; set; }

		[Required]
		public TimeSpan OutHour { get; set; }

		[Required]
		public int ScheduleId { get; set; }

		[ForeignKey("ScheduleId")]
		public virtual Schedule Schedule { get; set; }
	}
}