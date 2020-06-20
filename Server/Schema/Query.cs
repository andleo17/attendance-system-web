using Server;
using Server.Models;
using HotChocolate;
using HotChocolate.Execution;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Schema
{
	public class Query
	{
		public async Task<IReadOnlyList<Employee>> GetEmployees([Service] DBAttendanceContext dBAttendanceContext)
		{
			return await (from e in dBAttendanceContext.Employee orderby e.Lastname select e).ToListAsync();
		}

		public async Task<IReadOnlyList<Attendance>> GetAttendances([Service] DBAttendanceContext dBAttendanceContext, string employeeCardId)
		{
			if (employeeCardId != null)
			{
				return await (from a in dBAttendanceContext.Attendance where a.EmployeeCardId == employeeCardId select a).ToListAsync();
			}
			else
			{
				return await dBAttendanceContext.Attendance.ToListAsync();
			}
		}

		public async Task<IReadOnlyList<Contract>> GetContracts([Service] DBAttendanceContext dBAttendanceContext, string employeeCardId)
		{
			if (employeeCardId != null)
			{
				return await (from c in dBAttendanceContext.Contract where c.EmployeeCardId == employeeCardId select c).ToListAsync();
			}
			else
			{
				return await dBAttendanceContext.Contract.Where(c => c.State).ToListAsync();
			}
		}

		public async Task<IReadOnlyList<Justification>> GetJustifications([Service] DBAttendanceContext dBAttendanceContext, string employeeCardId)
		{
			if (employeeCardId != null)
			{
				return await (from j in dBAttendanceContext.Justification
							  join a in dBAttendanceContext.Attendance on j.AttendanceId equals a.Id
							  where a.EmployeeCardId == employeeCardId
							  select j)
							.ToListAsync();
			}
			else
			{
				return await dBAttendanceContext.Justification.ToListAsync();
			}
		}

		public async Task<IReadOnlyList<License>> GetLicenses([Service] DBAttendanceContext dBAttendanceContext, string employeeCardId)
		{
			if (employeeCardId != null)
			{
				return await (from l in dBAttendanceContext.License where l.EmployeeCardId == employeeCardId select l).ToListAsync();
			}
			else
			{
				return await dBAttendanceContext.License.ToListAsync();
			}
		}

		public async Task<IReadOnlyList<Models.LicenseType>> GetLicenseTypes([Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.LicenseType.ToListAsync();
		}

		public async Task<IReadOnlyList<Schedule>> GetSchedules([Service] DBAttendanceContext dBAttendanceContext, string employeeCardId)
		{
			if (employeeCardId != null)
			{
				return await (from s in dBAttendanceContext.Schedule where s.EmployeeCardId == employeeCardId select s).ToListAsync();
			}
			else
			{
				return await dBAttendanceContext.Schedule.ToListAsync();
			}
		}

		public async Task<IReadOnlyList<User>> GetUsers([Service] DBAttendanceContext dBAttendanceContext, string employeeCardId)
		{
			if (employeeCardId != null)
			{
				return await (from u in dBAttendanceContext.User where u.EmployeeCardId == employeeCardId select u).ToListAsync();
			}
			else
			{
				return await dBAttendanceContext.User.ToListAsync();
			}
		}

		public async Task<Employee> Login([Service] DBAttendanceContext dBAttendanceContext, string username, string password)
		{
			var user = await (from u in dBAttendanceContext.User where u.Name == username && u.Password == password select u).FirstOrDefaultAsync();
			if (user != null)
			{
				if (user.State)
				{
					return user.Employee;
				}
				else
				{
					throw new QueryException("Usuario no vigente");
				}
			}
			else
			{
				throw new QueryException("Usuario no encontrado");
			}
		}
	}
}