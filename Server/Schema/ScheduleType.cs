using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Schema
{
	public class ScheduleType : ObjectType<Schedule>
	{
		protected override void Configure(IObjectTypeDescriptor<Schedule> descriptor)
		{
			base.Configure(descriptor);
			descriptor.Field(a => a.Id)
				.Type<NonNullType<IdType>>();

			descriptor.Field(a => a.StartDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.FinishDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.State)
				.Type<NonNullType<BooleanType>>();

			descriptor.Field(a => a.EmployeeCardId)
				.Type<NonNullType<StringType>>();

			descriptor.Field<ScheduleType>(a => ResolveEmployee(default, default))
				.Name("schedule")
				.Type<NonNullType<EmployeeType>>();

			descriptor.Field<ScheduleType>(a => ResolveScheduleDetail(default, default))
				.Name("scheduleDetail")
				.Type<NonNullType<ListType<NonNullType<ScheduleDetailType>>>>();
		}

		public async Task<Employee> ResolveEmployee([Parent] Schedule schedule, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.Employee.FindAsync(schedule.EmployeeCardId);
		}

		public async Task<IReadOnlyCollection<ScheduleDetail>> ResolveScheduleDetail([Parent] Schedule schedule, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.ScheduleDetail.Where(sd => sd.ScheduleId == schedule.Id).ToListAsync();
		}
	}
}