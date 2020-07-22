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
					var currentDay = currentSchedule.ScheduleDetail.FirstOrDefault(sd => ((byte)DateTime.Today.DayOfWeek == 0 ? 7 : (byte)DateTime.Today.DayOfWeek) == sd.Day);
					if (currentDay != null)
					{
						var existingAttendance = await dBAttendanceContext.Attendance.FirstAsync(a => a.Date == DateTime.Today && a.EmployeeCardId == employeeCardId);
						if (existingAttendance == null)
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
							throw new QueryException("Ya marcó asistencia");
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
					if (attendance.OutHour == null)
					{
						attendance.OutHour = DateTime.Now.TimeOfDay;
						await dBAttendanceContext.SaveChangesAsync();
						return attendance;
					}
					else
					{
						throw new QueryException("Ya marcó salida.");
					}
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

		public async Task<Contract> AddContract([Service] DBAttendanceContext dBAttendanceContext, ContractInput input)
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

		public async Task<Contract> ModifyContract([Service] DBAttendanceContext dBAttendanceContext, ContractInput input)
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

		public async Task<Employee> AddEmployee([Service] DBAttendanceContext dBAttendanceContext, EmployeeInput input)
		{
			try
			{
				var employee = new Employee
				{
					CardId = input.CardId,
					Name = input.Name,
					Lastname = input.Lastname,
					Genre = input.Genre,
					Birthdate = input.BirthDate,
					Address = input.Address,
					Phone = input.Phone,
					Email = input.Email,
					PhotoName = input.PhotoName
				};
				var contractInput = input.Contract;
				employee.Contract.Add(new Contract
				{
					StartDate = contractInput.StartDate,
					FinishDate = contractInput.FinishDate,
					Mount = contractInput.Mount,
					ExtraHours = contractInput.ExtraHours
				});
				var scheduleInput = input.Schedule;
				var schedule = new Schedule
				{
					StartDate = scheduleInput.StartDate,
					FinishDate = scheduleInput.FinishDate
				};
				scheduleInput.ScheduleDetail.ForEach(sd =>
				{
					var scheduleDetail = new ScheduleDetail
					{
						Day = sd.Day,
						InHour = sd.InHour,
						OutHour = sd.OutHour
					};
					schedule.ScheduleDetail.Add(scheduleDetail);
				});
				employee.Schedule.Add(schedule);
				await dBAttendanceContext.SaveChangesAsync();
				return employee;
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Employee> ModifyEmployee([Service] DBAttendanceContext dBAttendanceContext, EmployeeInput input)
		{
			try
			{
				var employee = await dBAttendanceContext.Employee.FindAsync(input.CardId);
				if (employee != null)
				{
					employee.Name = input.Name;
					employee.Lastname = input.Lastname;
					employee.Genre = input.Genre;
					employee.Birthdate = input.BirthDate;
					employee.Address = input.Address;
					employee.Phone = input.Phone;
					employee.Email = input.Email;
					employee.PhotoName = input.PhotoName;
					employee.State = input.State;
					await dBAttendanceContext.SaveChangesAsync();
					return employee;
				}
				else
				{
					throw new QueryException("No se encontró al empleado.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Employee> DownEmployee([Service] DBAttendanceContext dBAttendanceContext, string employeeCardId)
		{
			try
			{
				var employee = await dBAttendanceContext.Employee.FindAsync(employeeCardId);
				if (employee != null)
				{
					employee.State = false;
					var contract = employee.Contract.FirstOrDefault(c => c.State);
					if (contract != null)
					{
						contract.State = false;
					}
					var schedule = employee.Schedule.FirstOrDefault(s => s.State);
					if (schedule != null)
					{
						contract.State = false;
					}
					await dBAttendanceContext.SaveChangesAsync();
					return employee;
				}
				else
				{
					throw new QueryException("No se encontró al empleado.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Employee> DeleteEmployee([Service] DBAttendanceContext dBAttendanceContext, string employeeCardId)
		{
			try
			{
				var employee = await dBAttendanceContext.Employee.FindAsync(employeeCardId);
				if (employee != null)
				{
					dBAttendanceContext.Employee.Remove(employee);
					await dBAttendanceContext.SaveChangesAsync();
					return employee;
				}
				else
				{
					throw new QueryException("No se encontró al empleado.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Justification> AddJustification([Service] DBAttendanceContext dBAttendanceContext, JustificationInput input)
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

		public async Task<Justification> ModifyJustification([Service] DBAttendanceContext dBAttendanceContext, JustificationInput input)
		{
			try
			{
				var justification = await dBAttendanceContext.Justification.FindAsync(input.Id);
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

		public async Task<License> AddLicense([Service] DBAttendanceContext dBAttendanceContext, LicenseInput input)
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

		public async Task<License> ModifyLicense([Service] DBAttendanceContext dBAttendanceContext, LicenseInput input)
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

		public async Task<Models.LicenseType> AddLicenseType([Service] DBAttendanceContext dBAttendanceContext, LicenseTypeInput input)
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

		public async Task<Models.LicenseType> ModifyLicenseType([Service] DBAttendanceContext dBAttendanceContext, LicenseTypeInput input)
		{
			try
			{
				var licenseType = await dBAttendanceContext.LicenseType.FindAsync(input.Id);
				if (licenseType != null)
				{
					licenseType.Description = input.Description;
					licenseType.MaximumDays = input.MaximumDays;
					await dBAttendanceContext.SaveChangesAsync();
					return licenseType;
				}
				else
				{
					throw new QueryException("Tipo de licencia no encontrada.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Models.LicenseType> DeleteLicenseType([Service] DBAttendanceContext dBAttendanceContext, byte licenseTypeId)
		{
			try
			{
				var licenseType = await dBAttendanceContext.LicenseType.FindAsync(licenseTypeId);
				dBAttendanceContext.LicenseType.Remove(licenseType);
				await dBAttendanceContext.SaveChangesAsync();
				return licenseType;
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Permission> AddPermission([Service] DBAttendanceContext dBAttendanceContext, PermissionInput input)
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

		public async Task<Permission> ModifyPermission([Service] DBAttendanceContext dBAttendanceContext, PermissionInput input)
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

		public async Task<Schedule> AddSchedule([Service] DBAttendanceContext dBAttendanceContext, ScheduleInput input)
		{
			try
			{
				var schedule = new Schedule
				{
					StartDate = input.StartDate,
					FinishDate = input.FinishDate,
					EmployeeCardId = input.EmployeeCardId
				};
				input.ScheduleDetail.ForEach(sd =>
				{
					var scheduleDetail = new ScheduleDetail
					{
						Day = sd.Day,
						InHour = sd.InHour,
						OutHour = sd.OutHour
					};
					schedule.ScheduleDetail.Add(scheduleDetail);
				});
				dBAttendanceContext.Schedule.Add(schedule);
				await dBAttendanceContext.SaveChangesAsync();
				return schedule;
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Schedule> ModifySchedule([Service] DBAttendanceContext dBAttendanceContext, ScheduleInput input)
		{
			try
			{
				var schedule = await dBAttendanceContext.Schedule.FindAsync(input.Id);
				if (schedule != null)
				{
					schedule.StartDate = input.StartDate;
					schedule.FinishDate = input.FinishDate;
					schedule.State = input.State;
					input.ScheduleDetail.ForEach(sd =>
					{
						switch (sd.Action)
						{
							case 0:
								var scheduleDetail = new ScheduleDetail
								{
									Day = sd.Day,
									InHour = sd.InHour,
									OutHour = sd.OutHour
								};
								schedule.ScheduleDetail.Add(scheduleDetail);
								break;
							case 1:
								var scheduleDetail1 = schedule.ScheduleDetail.SingleOrDefault(sd1 => sd1.Id == sd.Id);
								scheduleDetail1.Day = sd.Day;
								scheduleDetail1.InHour = sd.InHour;
								scheduleDetail1.OutHour = sd.OutHour;
								break;
							case 2:
								var scheduleDetail2 = schedule.ScheduleDetail.SingleOrDefault(sd1 => sd1.Id == sd.Id);
								schedule.ScheduleDetail.Remove(scheduleDetail2);
								break;
						}
					});
					await dBAttendanceContext.SaveChangesAsync();
					return schedule;
				}
				else
				{
					throw new QueryException("No se encontró el horario.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Schedule> DownSchedule([Service] DBAttendanceContext dBAttendanceContext, int scheduleId)
		{
			try
			{
				var schedule = await dBAttendanceContext.Schedule.FindAsync(scheduleId);
				schedule.State = false;
				await dBAttendanceContext.SaveChangesAsync();
				return schedule;
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<User> AddUser([Service] DBAttendanceContext dBAttendanceContext, UserInput input)
		{
			try
			{
				var user = new User
				{
					Name = input.Name,
					Password = input.Password,
					EmployeeCardId = input.EmployeeCardId
				};
				dBAttendanceContext.Add(user);
				await dBAttendanceContext.SaveChangesAsync();
				return user;
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<User> ModifyUser([Service] DBAttendanceContext dBAttendanceContext, UserInput input)
		{
			try
			{
				var user = await dBAttendanceContext.User.FindAsync(input.Id);
				if (user != null)
				{
					user.Name = input.Name;
					user.Password = input.Password;
					user.State = input.State;
					await dBAttendanceContext.SaveChangesAsync();
					return user;
				}
				else
				{
					throw new QueryException("No se encontró el usuario.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<User> DownUser([Service] DBAttendanceContext dBAttendanceContext, short userId)
		{
			try
			{
				var user = await dBAttendanceContext.User.FindAsync(userId);
				if (user != null)
				{
					user.State = false;
					await dBAttendanceContext.SaveChangesAsync();
					return user;
				}
				else
				{
					throw new QueryException("No se encontró el usuario.");
				}
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

		public async Task<Permission> DownPermission([Service] DBAttendanceContext dBAttendanceContext, int permissionId)
		{
			try
			{
				var permission = await dBAttendanceContext.Permission.FindAsync(permissionId);
				permission.State = false;
				await dBAttendanceContext.SaveChangesAsync();
				return permission;
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}


		public async Task<Justification> DownJustification([Service] DBAttendanceContext dBAttendanceContext, int justificationId)
		{
			try
			{
				var justification = await dBAttendanceContext.Justification.FindAsync(justificationId);
				justification.State = false;
				await dBAttendanceContext.SaveChangesAsync();
				return justification;
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}


		public async Task<License> DownLicense([Service] DBAttendanceContext dBAttendanceContext, int licenseId)
		{
			try
			{
				var license = await dBAttendanceContext.License.FindAsync(licenseId);
				license.State = false;
				await dBAttendanceContext.SaveChangesAsync();
				return license;
			}
			catch (System.Exception e)
			{
				throw new QueryException(e.Message);
			}
		}

	}

}