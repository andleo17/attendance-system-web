using System;

namespace Server.Schema.Inputs
{
	public class ModifyLicenseInput
	{
		public int Id { get; set; }
		public DateTime StartDate { get; set; }
		public DateTime FinishDate { get; set; }
		public byte[] Document { get; set; }
		public string DocumentName { get; set; }
		public bool State { get; set; }
		public byte LicenseTypeId { get; set; }
	}
}