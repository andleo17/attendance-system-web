using System;

namespace Server.Schema.Inputs
{
	public class PermissionInput
	{
		public int Id { get; set; }
		public DateTime Date { get; set; }
		public string Motive { get; set; }
		public bool State { get; set; }
		public string EmployeeCardId { get; set; }
	}
}