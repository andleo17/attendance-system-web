using System;
using System.Collections.Generic;

namespace Server.Models
{
	public class LicenseType
	{
		public int Id { get; set; }

		public string Description { get; set; }

		public int MaximumDays { get; set; }

		public List<License> License { get; set; }
	}
}