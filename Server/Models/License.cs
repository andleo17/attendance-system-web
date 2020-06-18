using System;

namespace Server.Models
{
	public class License
	{
		public int Id { get; set; }

		public DateTime PresentationDate { get; set; }

		public DateTime StartDate { get; set; }

		public DateTime FinishDate { get; set; }

		public byte[] Document { get; set; }

		public string DocumentName { get; set; }

		public bool State { get; set; }

		public string EmployeeCardId { get; set; }

		public int LicenseTypeId { get; set; }

		public Employee Employee { get; set; }

		public LicenseType LicenseType { get; set; }
	}
}