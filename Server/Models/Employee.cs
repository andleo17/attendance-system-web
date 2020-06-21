using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
	public class Employee
	{
		[Key, StringLength(8)]
		public string CardId { get; set; }

		[Required, MaxLength(30)]
		public string Name { get; set; }

		[Required, MaxLength(60)]
		public string Lastname { get; set; }

		[Required, StringLength(1)]
		public string Genre { get; set; }

		[Required]
		public DateTime Birthdate { get; set; }

		[Required, MaxLength(50)]
		public string Address { get; set; }

		[Required, MaxLength(13)]
		public string Phone { get; set; }

		[Required, EmailAddress]
		public string Email { get; set; }

		[FileExtensions]
		public byte[] Photo { get; set; }

		[MaxLength(60)]
		public string PhotoName { get; set; }

		[Required]
		public bool State { get; set; }

		public virtual DbSet<Attendance> Attendance { get; set; }

		public virtual DbSet<Contract> Contract { get; set; }

		public virtual DbSet<License> License { get; set; }

		public virtual DbSet<Permission> Permission { get; set; }

		public virtual DbSet<Schedule> Schedule { get; set; }

		public virtual DbSet<User> User { get; set; }

	}
}