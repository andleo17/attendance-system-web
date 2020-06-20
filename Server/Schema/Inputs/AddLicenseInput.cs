using System;

namespace Server.Schema.Inputs
{
	public class AddLicenseInput
	{
		public DateTime StartDate { get; set; }
		public DateTime FinishDate { get; set; }
		public byte[] Document { get; set; }
		public string DocumentName { get; set; }
		public string EmployeeCardId { get; set; }
		public byte LicenseTypeId { get; set; }
	}
}