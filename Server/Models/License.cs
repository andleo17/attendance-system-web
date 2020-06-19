using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
	public class License
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		[Required]
		public DateTime PresentationDate { get; set; }

		[Required]
		public DateTime StartDate { get; set; }

		[Required]
		public DateTime FinishDate { get; set; }

		[FileExtensions]
		public byte[] Document { get; set; }

		[MaxLength(50)]
		public string DocumentName { get; set; }

		[Required]
		public bool State { get; set; }

		[Required]
		public string EmployeeCardId { get; set; }

		[Required]
		public byte LicenseTypeId { get; set; }

		[ForeignKey("EmployeeCardId")]
		public Employee Employee { get; set; }

		[ForeignKey("LicenseTypeId")]
		public LicenseType LicenseType { get; set; }
	}
}