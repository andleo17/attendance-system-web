using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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

		[Required]
		public char Genre { get; set; }

		[Required]
		public DateTime Birthdate { get; set; }

		[Required, MaxLength(50)]
		public string Address { get; set; }

		[Required, MaxLength(13)]
		public string Phone { get; set; }

		[Required, EmailAddress]
		public string Email { get; set; }

		public byte[] Photo { get; set; }

		public string PhotoName { get; set; }

		[Required]
		public bool State { get; set; }

		public List<Attendance> Attendance { get; set; }

		public List<Contract> Contract { get; set; }

		public List<License> License { get; set; }

		public List<Permission> Permission { get; set; }

		public List<Schedule> Schedule { get; set; }

		public List<User> User { get; set; }

	}
}