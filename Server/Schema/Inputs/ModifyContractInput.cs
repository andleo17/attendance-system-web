using System;

namespace Server.Schema.Inputs
{
	public class ModifyContractInput
	{
		public int Id { get; set; }
		public DateTime StartDate { get; set; }
		public DateTime FinishDate { get; set; }
		public decimal Mount { get; set; }
		public bool State { get; set; }
		public bool ExtraHours { get; set; }
	}
}