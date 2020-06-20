using System;

namespace Server.Schema.Inputs
{
	public class AddPermissionInput
	{
		public DateTime Date { get; set; }
		public string Motive { get; set; }
		public string EmployeeCardId { get; set; }
	}
}