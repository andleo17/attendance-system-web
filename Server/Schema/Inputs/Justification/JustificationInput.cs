using System;

namespace Server.Schema.Inputs
{
	public class JustificationInput
	{
		public int Id { get; set; }
		public DateTime Date { get; set; }
		public string Motive { get; set; }
		public bool State { get; set; }
		public int AttendanceId { get; set; }
	}
}