using System;

namespace Server.Schema.Inputs
{
	public class AddJustificationInput
	{
		public DateTime Date { get; set; }
		public string Motive { get; set; }
		public int AttendanceId { get; set; }
	}
}