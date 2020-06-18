using HotChocolate;
using HotChocolate.Types;
using Server.Models;
using System.Threading.Tasks;

namespace Server.Schema
{
	public class JustificationType : ObjectType<Justification>
	{
		protected override void Configure(IObjectTypeDescriptor<Justification> descriptor)
		{
			base.Configure(descriptor);
			descriptor.Field(a => a.Id)
			.Type<NonNullType<IdType>>();

			descriptor.Field(a => a.Date)
			.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.Motive)
			.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.State)
			.Type<NonNullType<BooleanType>>();

			descriptor.Field(a => a.AttendanceId)
			.Type<NonNullType<IntType>>();

			descriptor.Field<JustificationType>(a => ResolveAttendance(default, default))
			.Name("attendance")
			.Type<NonNullType<AttendanceType>>();
		}

		public async Task<Attendance> ResolveAttendance([Parent] Justification justification, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.Attendance.FindAsync(justification.AttendanceId);
		}
	}
}