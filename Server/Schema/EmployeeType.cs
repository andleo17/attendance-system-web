using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Schema
{
	public class EmployeeType : ObjectType<Employee>
	{
		protected override void Configure(IObjectTypeDescriptor<Employee> descriptor)
		{
			base.Configure(descriptor);
			descriptor.Field(a => a.CardId)
				.Type<NonNullType<IdType>>();

			descriptor.Field(a => a.Name)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.Lastname)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.Genre)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.Birthdate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.Address)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.Phone)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.Email)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.Photo)
				.Type<AnyType>();

			descriptor.Field(a => a.PhotoName)
				.Type<StringType>();

			descriptor.Field(a => a.State)
				.Type<NonNullType<BooleanType>>();

			descriptor.Field<EmployeeType>(a => ResolveAttendance(default, default))
				.Name("attendance")
				.Type<NonNullType<ListType<NonNullType<AttendanceType>>>>();

			descriptor.Field<EmployeeType>(a => ResolveContract(default, default, default))
				.Name("contract")
				.Argument("last", a => a.Type<BooleanType>())
				.Type<NonNullType<ListType<NonNullType<ContractType>>>>();

			descriptor.Field<EmployeeType>(a => ResolveLicense(default, default))
				.Name("license")
				.Type<NonNullType<ListType<NonNullType<LicenseType>>>>();

			descriptor.Field<EmployeeType>(a => ResolvePermission(default, default))
				.Name("permission")
				.Type<NonNullType<ListType<NonNullType<PermissionType>>>>();

			descriptor.Field<EmployeeType>(a => ResolverSchedule(default, default, default))
				.Name("schedule")
				.Argument("last", a => a.Type<BooleanType>())
				.Type<NonNullType<ListType<NonNullType<ScheduleType>>>>();

			descriptor.Field<EmployeeType>(a => ResolveUser(default, default))
				.Name("user")
				.Type<ListType<NonNullType<UserType>>>();
		}

		public async Task<IReadOnlyList<Attendance>> ResolveAttendance([Parent] Employee employee, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.Attendance
				.Where(a => a.EmployeeCardId == employee.CardId)
				.ToListAsync();
		}

		public async Task<IReadOnlyList<Contract>> ResolveContract([Parent] Employee employee, [Service] DBAttendanceContext dBAttendanceContext, bool last)
		{
			if (!last)
			{
				return await dBAttendanceContext.Contract
					.Where(c => c.EmployeeCardId == employee.CardId)
					.ToListAsync();

			}
			else
			{
				var list = await (from c in dBAttendanceContext.Contract where c.EmployeeCardId == employee.CardId orderby c.Id descending select c).ToListAsync();
				return list.Take(1).ToList();
			}
		}

		public async Task<IReadOnlyList<License>> ResolveLicense([Parent] Employee employee, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.License
				.Where(l => l.EmployeeCardId == employee.CardId)
				.ToListAsync();
		}

		public async Task<IReadOnlyList<Permission>> ResolvePermission([Parent] Employee employee, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.Permission
				.Where(p => p.EmployeeCardId == employee.CardId)
				.ToListAsync();
		}

		public async Task<IReadOnlyList<Schedule>> ResolverSchedule([Parent] Employee employee, [Service] DBAttendanceContext dBAttendanceContext, bool last)
		{
			if (!last)
			{
				return await dBAttendanceContext.Schedule
					.Where(s => s.EmployeeCardId == employee.CardId)
					.ToListAsync();
			}
			else
			{
				var list = await (from s in dBAttendanceContext.Schedule where s.EmployeeCardId == employee.CardId orderby s.Id descending select s).ToListAsync();
				return list.Take(1).ToList();
			}
		}

		public async Task<IReadOnlyList<User>> ResolveUser([Parent] Employee employee, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.User
				.Where(u => u.EmployeeCardId == employee.CardId)
				.ToListAsync();
		}
	}
}