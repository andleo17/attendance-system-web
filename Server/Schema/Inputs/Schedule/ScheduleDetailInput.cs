using System;

namespace Server.Schema.Inputs
{
	public class ScheduleDetailInput
	{
		public int Id { get; set; }
		public byte Day { get; set; }
		public TimeSpan InHour { get; set; }
		public TimeSpan OutHour { get; set; }
		public byte Action { get; set; }
	}
}