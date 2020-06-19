using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
	public class User
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public short Id { get; set; }

		[Required, MaxLength(30)]
		public string Name { get; set; }

		[Required, MaxLength(30)]
		public string Password { get; set; }

		[Required]
		public bool State { get; set; }

		[Required]
		public string EmployeeCardId { get; set; }

		[ForeignKey("EmployeeCardId")]
		public Employee Employee { get; set; }
	}
}