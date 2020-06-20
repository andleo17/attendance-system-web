using HotChocolate.Types;
using Server.Schema.Inputs;

namespace Server.Schema
{
	public class MutationType : ObjectType<Mutation>
	{
		protected override void Configure(IObjectTypeDescriptor<Mutation> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(m => m.AddAttendance(default, default))
				.Type<AttendanceType>()
				.Argument("employeeCardId", a => a.Type<NonNullType<StringType>>());

			descriptor.Field(m => m.OutAttendance(default, default))
				.Type<AttendanceType>()
				.Argument("attendanceId", a => a.Type<NonNullType<IdType>>());

			descriptor.Field(m => m.AddLicenseType(default, default))
				.Type<LicenseTypeType>()
				.Argument("input", a => a.Type<NonNullType<AddLicenseTypeInputType>>());

			descriptor.Field(m => m.AddUser(default, default))
				.Type<UserType>()
				.Argument("input", a => a.Type<NonNullType<AddUserInputType>>());
		}
	}
}