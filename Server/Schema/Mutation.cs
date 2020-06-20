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
						var attendance = new Attendance
						{
							EmployeeCardId = employeeCardId
						};
						dBAttendanceContext.Attendance.Add(attendance);
						await dBAttendanceContext.SaveChangesAsync();
						return attendance;
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

		public async Task<Contract> AddContract([Service] DBAttendanceContext dBAttendanceContext, AddContractInput input)
		{
			try
			{
				var contract = new Contract
				{
					StartDate = input.StartDate,
					FinishDate = input.FinishDate,
					Mount = input.Mount,
					ExtraHours = input.ExtraHours,
					EmployeeCardId = input.EmployeeCardId
				};
				dBAttendanceContext.Contract.Add(contract);
				await dBAttendanceContext.SaveChangesAsync();
				return contract;
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Contract> ModifyContract([Service] DBAttendanceContext dBAttendanceContext, ModifyContractInput input)
		{
			try
			{
				var contract = await dBAttendanceContext.Contract.FindAsync(input.Id);
				if (contract != null)
				{
					contract.StartDate = input.StartDate;
					contract.FinishDate = input.FinishDate;
					contract.Mount = input.Mount;
					contract.State = input.State;
					contract.ExtraHours = input.ExtraHours;
					await dBAttendanceContext.SaveChangesAsync();
					return contract;
				}
				else
				{
					throw new QueryException("Contrato no encontrado.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Contract> DownContract([Service] DBAttendanceContext dBAttendanceContext, int contractId)
		{
			try
			{
				var contract = await dBAttendanceContext.Contract.FindAsync(contractId);
				if (contract != null)
				{
					contract.State = false;
					await dBAttendanceContext.SaveChangesAsync();
					return contract;
				}
				else
				{
					throw new QueryException("Contrato no encontrado.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Justification> AddJustification([Service] DBAttendanceContext dBAttendanceContext, AddJustificationInput input)
		{
			try
			{
				var justification = new Justification
				{
					Date = input.Date,
					Motive = input.Motive,
					AttendanceId = input.AttendanceId
				};
				dBAttendanceContext.Justification.Add(justification);
				await dBAttendanceContext.SaveChangesAsync();
				return justification;
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Justification> ModifyJustification([Service] DBAttendanceContext dBAttendanceContext, ModifyJustificationInput input)
		{
			try
			{
				var justification = await dBAttendanceContext.Justification.FindAsync(input);
				if (justification != null)
				{
					justification.Date = input.Date;
					justification.Motive = input.Motive;
					justification.State = input.State;
					await dBAttendanceContext.SaveChangesAsync();
					return justification;
				}
				else
				{
					throw new QueryException("No se encontró la justificación.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Justification> DeleteJustification([Service] DBAttendanceContext dBAttendanceContext, int justificationId)
		{
			try
			{
				var justification = await dBAttendanceContext.Justification.FindAsync(justificationId);
				if (justification != null)
				{
					dBAttendanceContext.Justification.Remove(justification);
					await dBAttendanceContext.SaveChangesAsync();
					return justification;
				}
				else
				{
					throw new QueryException("No se encontró la justificación.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<License> AddLicense([Service] DBAttendanceContext dBAttendanceContext, AddLicenseInput input)
		{
			try
			{
				var license = new License
				{
					StartDate = input.StartDate,
					FinishDate = input.FinishDate,
					Document = input.Document,
					DocumentName = input.DocumentName,
					EmployeeCardId = input.EmployeeCardId,
					LicenseTypeId = input.LicenseTypeId
				};
				dBAttendanceContext.License.Add(license);
				await dBAttendanceContext.SaveChangesAsync();
				return license;
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<License> ModifyLicense([Service] DBAttendanceContext dBAttendanceContext, ModifyLicenseInput input)
		{
			try
			{
				var license = await dBAttendanceContext.License.FindAsync(input.Id);
				if (license != null)
				{
					license.StartDate = input.StartDate;
					license.FinishDate = input.FinishDate;
					license.Document = input.Document;
					license.DocumentName = input.DocumentName;
					license.LicenseTypeId = input.LicenseTypeId;
					license.State = input.State;
					await dBAttendanceContext.SaveChangesAsync();
					return license;
				}
				else
				{
					throw new QueryException("No se encontró la licencia.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<License> DeleteLicense([Service] DBAttendanceContext dBAttendanceContext, int licenseId)
		{
			try
			{
				var license = await dBAttendanceContext.License.FindAsync(licenseId);
				dBAttendanceContext.License.Remove(license);
				await dBAttendanceContext.SaveChangesAsync();
				return license;
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

		public async Task<Permission> AddPermission([Service] DBAttendanceContext dBAttendanceContext, AddPermissionInput input)
		{
			try
			{
				var permission = new Permission
				{
					Date = input.Date,
					Motive = input.Motive,
					EmployeeCardId = input.EmployeeCardId
				};
				dBAttendanceContext.Permission.Add(permission);
				await dBAttendanceContext.SaveChangesAsync();
				return permission;
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Permission> ModifyPermission([Service] DBAttendanceContext dBAttendanceContext, ModifyPermissionInput input)
		{
			try
			{
				var permission = await dBAttendanceContext.Permission.FindAsync(input.Id);
				if (permission != null)
				{
					permission.Date = input.Date;
					permission.Motive = input.Motive;
					permission.State = input.State;
					await dBAttendanceContext.SaveChangesAsync();
					return permission;
				}
				else
				{
					throw new QueryException("No se encontró el permiso.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Permission> DeletePermission([Service] DBAttendanceContext dBAttendanceContext, int permissionId)
		{
			try
			{
				var permission = await dBAttendanceContext.Permission.FindAsync(permissionId);
				if (permission != null)
				{
					dBAttendanceContext.Permission.Remove(permission);
					await dBAttendanceContext.SaveChangesAsync();
					return permission;
				}
				else
				{
					throw new QueryException("No se encontró el permiso.");
				}
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