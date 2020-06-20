using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
	public class LicenseType
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public byte Id { get; set; }

		[Required, MaxLength(50)]
		public string Description { get; set; }

		public short MaximumDays { get; set; }

		public DbSet<License> License { get; set; }
	}
}