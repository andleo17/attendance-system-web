namespace Server.Schema.Inputs
{
	public class UserInput
	{
		public short Id { get; set; }
		public string Name { get; set; }
		public string Password { get; set; }
		public bool State { get; set; }
		public string EmployeeCardId { get; set; }
	}
}