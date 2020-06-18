using System;

namespace Server.Models
{
	public class Justification
	{
		public int Id { get; set; }

		public DateTime Date { get; set; }

		public string Motive { get; set; }

		public bool State { get; set; }

		public int AttendanceId { get; set; }

		public Attendance Attendance { get; set; }
	}
}