using System;

namespace Server.Models
{
	public class ScheduleDetail
	{
		public int Id { get; set; }

		public int Day { get; set; }

		public TimeSpan InHour { get; set; }

		public TimeSpan OutHour { get; set; }

		public int ScheduleId { get; set; }

		public Schedule Schedule { get; set; }
	}
}