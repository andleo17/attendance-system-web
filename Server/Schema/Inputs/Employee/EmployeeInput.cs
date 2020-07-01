using System;

namespace Server.Schema.Inputs
{
	public class EmployeeInput
	{
		public string CardId { get; set; }
		public string Name { get; set; }
		public string Lastname { get; set; }
		public string Genre { get; set; }
		public DateTime BirthDate { get; set; }
		public string Address { get; set; }
		public string Phone { get; set; }
		public string Email { get; set; }
		public string PhotoName { get; set; }
		public bool State { get; set; }
		public ContractInput Contract { get; set; }
		public ScheduleInput Schedule { get; set; }
	}
}