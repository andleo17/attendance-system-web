namespace Server.Schema.Inputs
{
	public class LicenseTypeInput
	{
		public byte Id { get; set; }
		public string Description { get; set; }
		public short MaximumDays { get; set; }
	}
}