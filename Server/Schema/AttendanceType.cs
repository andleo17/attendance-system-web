using Server;
using Server.Models;
using Server.Schema;
using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Linq;

namespace Server.Schema
{
	public class AttendanceType : ObjectType<Attendance>
	{
		protected override void Configure(IObjectTypeDescriptor<Attendance> descriptor)
		{
			base.Configure(descriptor);
			descriptor.Field(a => a.Id)
			.Type<NonNullType<IdType>>();

			descriptor.Field(a => a.Date)
			.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.InHour)
			.Type<NonNullType<TimeType>>();

			descriptor.Field(a => a.OutHour)
			.Type<TimeType>();

			descriptor.Field(a => a.EmployeeCardId)
			.Type<NonNullType<StringType>>();

			descriptor.Field<AttendanceType>(a => ResolveEmployee(default, default))
			.Name("employee")
			.Type<NonNullType<EmployeeType>>();

			descriptor.Field<AttendanceType>(a => ResolveJustification(default, default))
			.Name("justification")
			.Type<JustificationType>();
		}

		public async Task<Employee> ResolveEmployee([Parent] Attendance attendance, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.Employee.FindAsync(attendance.EmployeeCardId);
		}

		public async Task<Justification> ResolveJustification([Parent] Attendance attendance, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.Justification.FirstAsync(j => j.AttendanceId == attendance.Id);
		}
	}
}