using HotChocolate;
using HotChocolate.Execution;
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
		public async Task<Attendance> AddAttendance([Service] DBAttendanceContext dBAttendanceContext, string employeeCardId)
		{
			try
			{
				var currentSchedule = await dBAttendanceContext.Schedule.SingleOrDefaultAsync(s => s.EmployeeCardId == employeeCardId && s.State);
				if (currentSchedule != null)
				{
					var currentDay = await currentSchedule.ScheduleDetail.FirstOrDefaultAsync(sd => DateTime.Today.DayOfWeek.Equals(sd.Day));
					if (currentDay != null)
					{
						var now = DateTime.Now.TimeOfDay;
						var tolerance = TimeSpan.FromMinutes(10);
						if (now.Subtract(tolerance) <= now)
						{
							var attendance = new Attendance
							{
								Date = DateTime.Today,
								InHour = now,
								EmployeeCardId = employeeCardId
							};
							dBAttendanceContext.Attendance.Add(attendance);
							await dBAttendanceContext.SaveChangesAsync();
							return attendance;
						}
						else
						{
							throw new QueryException("Aún no le toca marcar asistencia.");
						}
					}
					else
					{
						throw new QueryException("Hoy no le toca marcar asistencia.");
					}
				}
				else
				{
					throw new QueryException("Horario no encontrado.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Attendance> OutAttendance([Service] DBAttendanceContext dBAttendanceContext, int attendanceId)
		{
			try
			{
				var attendance = await dBAttendanceContext.Attendance.FindAsync(attendanceId);
				if (attendance != null)
				{
					attendance.OutHour = DateTime.Now.TimeOfDay;
					await dBAttendanceContext.SaveChangesAsync();
					return attendance;
				}
				else
				{
					throw new QueryException("Asistencia no encontrada.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

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
				throw new QueryException(e.Message);
			}
		}

		public async Task<User> AddUser([Service] DBAttendanceContext dBAttendanceContext, AddUserInput input)
		{
			try
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
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

	}
}