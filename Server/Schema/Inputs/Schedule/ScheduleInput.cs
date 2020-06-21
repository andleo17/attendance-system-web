using System;
using System.Collections.Generic;

namespace Server.Schema.Inputs
{
	public class ScheduleInput
	{
		public int Id { get; set; }
		public DateTime StartDate { get; set; }
		public DateTime FinishDate { get; set; }
		public bool State { get; set; }
		public string EmployeeCardId { get; set; }
		public List<ScheduleDetailInput> ScheduleDetail { get; set; }
	}
}