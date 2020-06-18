using System;
using System.Collections.Generic;

namespace Server.Models
{
	public class Schedule
	{
		public int Id { get; set; }

		public DateTime StartDate { get; set; }

		public DateTime FinishDate { get; set; }

		public bool State { get; set; }

		public string EmployeeCardId { get; set; }

		public Employee Employee { get; set; }

		public List<ScheduleDetail> ScheduleDetail { get; set; }
	}
}