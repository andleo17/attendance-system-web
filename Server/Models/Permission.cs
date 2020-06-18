using System;

namespace Server.Models
{
	public class Permission
	{
		public int Id { get; set; }

		public DateTime PresentationDate { get; set; }

		public DateTime Date { get; set; }

		public string Motive { get; set; }

		public bool State { get; set; }

		public string EmployeeCardId { get; set; }

		public Employee Employee { get; set; }
	}
}