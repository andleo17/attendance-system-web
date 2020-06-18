using System;

namespace Server.Models
{
	public class User
	{
		public Int16 Id { get; set; }

		public string Name { get; set; }

		public string Password { get; set; }

		public bool State { get; set; }

		public string EmployeeCardId { get; set; }

		public Employee Employee { get; set; }
	}
}