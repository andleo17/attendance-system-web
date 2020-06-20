using System;

namespace Server.Schema.Inputs
{
	public class AddContractInput
	{
		public DateTime StartDate { get; set; }
		public DateTime FinishDate { get; set; }
		public decimal Mount { get; set; }
		public bool ExtraHours { get; set; }
		public string EmployeeCardId { get; set; }
	}
}