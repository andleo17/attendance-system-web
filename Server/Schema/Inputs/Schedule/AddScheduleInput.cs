using System;
using System.Collections.Generic;

namespace Server.Schema.Inputs
{
	public class AddScheduleInput
	{
		public DateTime StartDate { get; set; }
		public DateTime FinishDate { get; set; }
		public string EmployeeCardId { get; set; }
		public List<ScheduleDetailInput> ScheduleDetail { get; set; }
	}
}