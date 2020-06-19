using HotChocolate;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using Server.Schema.Inputs;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Schema
{
	public class Mutation
	{
		public async Task<Models.LicenseType> AddLicenseType([Service] DBAttendanceContext dBAttendanceContext, AddLicenseTypeInput input)
		{
			try
			{
				var licenseType = new Models.LicenseType
				{
					Description = input.Description,
					MaximumDays = input.MaximumDays
				};

				dBAttendanceContext.LicenseType.Add(licenseType);
				await dBAttendanceContext.SaveChangesAsync();
				return licenseType;

			}
			catch (System.Exception e)
			{
				Console.WriteLine(e);
				throw;
			}
		}

		public async Task<User> AddUser([Service] DBAttendanceContext dBAttendanceContext, AddUserInput input)
		{
			var newUser = new User
			{
				Name = input.Name,
				Password = input.Password,
				EmployeeCardId = input.EmployeeCardId
			};
			dBAttendanceContext.Add(newUser);
			await dBAttendanceContext.SaveChangesAsync();
			return newUser;
		}

	}
}