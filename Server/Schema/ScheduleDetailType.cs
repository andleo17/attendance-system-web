using HotChocolate;
using HotChocolate.Types;
using Server.Models;
using System.Threading.Tasks;

namespace Server.Schema
{
	public class ScheduleDetailType : ObjectType<ScheduleDetail>
	{
		protected override void Configure(IObjectTypeDescriptor<ScheduleDetail> descriptor)
		{
			base.Configure(descriptor);
			descriptor.Field(a => a.Id)
				.Type<NonNullType<IdType>>();

			descriptor.Field(a => a.Day)
				.Type<NonNullType<IntType>>();

			descriptor.Field(a => a.InHour)
				.Type<NonNullType<TimeType>>();

			descriptor.Field(a => a.OutHour)
				.Type<NonNullType<TimeType>>();

			descriptor.Field(a => a.ScheduleId)
				.Type<NonNullType<IntType>>();

			descriptor.Field<ScheduleDetailType>(a => ResolveSchedule(default, default))
				.Name("schedule")
				.Type<NonNullType<ScheduleType>>();
		}

		public async Task<Schedule> ResolveSchedule([Parent] ScheduleDetail scheduleDetail, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.Schedule.FindAsync(scheduleDetail.ScheduleId);
		}
	}
}