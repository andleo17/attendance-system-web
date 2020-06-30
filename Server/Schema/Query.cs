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

		public async Task<Employee> GetEmployee([Service] DBAttendanceContext dBAttendanceContext, string cardId)
		{
			try
			{
				var employee = await dBAttendanceContext.Employee.FindAsync(cardId);
				if (employee != null)
				{
					return employee;
				}
				else
				{
					throw new QueryException("Empleado no encontrado");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
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

		public async Task<IReadOnlyList<Permission>> GetPermissions([Service] DBAttendanceContext dBAttendanceContext, string employeeCardId)
		{
			if (employeeCardId != null)
			{
				return await (from p in dBAttendanceContext.Permission where p.EmployeeCardId == employeeCardId select p).ToListAsync();
			}
			else
			{
				return await dBAttendanceContext.Permission.ToListAsync();
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

		public async Task<IReadOnlyList<Attendance>> GetDelay([Service] DBAttendanceContext dBAttendanceContext)
		{
			DateTime firstSunday = new DateTime(1753, 1, 7);
			var DbF = Microsoft.EntityFrameworkCore.EF.Functions;
			try
			{
				// return await dBAttendanceContext.Attendance
				// 				.Where(a => DbF.DateDiffDay(firstSunday, a.Date) % 7 == 1 ).ToListAsync();

				return await (from a in dBAttendanceContext.Attendance
							  join s in dBAttendanceContext.Schedule on a.EmployeeCardId equals s.EmployeeCardId
							  join sd in dBAttendanceContext.ScheduleDetail on s.Id equals sd.ScheduleId
							  where (DbF.DateDiffDay(firstSunday, a.Date) % 7 == sd.Day) && a.InHour > sd.InHour
							  select a).ToListAsync();
			}
			catch (System.Exception e)
			{

				throw new QueryException(e.Message);
			}


		}
	}
}