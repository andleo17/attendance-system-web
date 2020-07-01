using HotChocolate.Types;

namespace Server.Schema
{
	public class QueryType : ObjectType<Query>
	{
		protected override void Configure(IObjectTypeDescriptor<Query> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(q => q.GetAttendances(default, default))
				.Type<NonNullType<ListType<NonNullType<AttendanceType>>>>();

			descriptor.Field(q => q.GetContracts(default, default))
				.Type<NonNullType<ListType<NonNullType<ContractType>>>>();

			descriptor.Field(q => q.GetEmployees(default))
				.Type<NonNullType<ListType<NonNullType<EmployeeType>>>>();

			descriptor.Field(q => q.GetEmployee(default, default))
				.Argument("cardId", a => a.Type<NonNullType<IdType>>())
				.Type<EmployeeType>();

			descriptor.Field(q => q.GetJustifications(default, default))
				.Type<NonNullType<ListType<NonNullType<JustificationType>>>>();

			descriptor.Field(q => q.GetLicenses(default, default))
				.Type<NonNullType<ListType<NonNullType<LicenseType>>>>();

			descriptor.Field(q => q.GetPermissions(default, default))
				.Type<NonNullType<ListType<NonNullType<PermissionType>>>>();

			descriptor.Field(q => q.GetLicenseTypes(default))
				.Type<NonNullType<ListType<NonNullType<LicenseTypeType>>>>();

			descriptor.Field(q => q.GetSchedules(default, default))
				.Type<NonNullType<ListType<NonNullType<ScheduleType>>>>();

			descriptor.Field(q => q.GetUsers(default, default))
				.Type<NonNullType<ListType<NonNullType<UserType>>>>();

			descriptor.Field(q => q.Login(default, default, default))
				.Argument("username", a => a.Type<NonNullType<StringType>>())
				.Argument("password", a => a.Type<NonNullType<StringType>>());

			descriptor.Field(q => q.GetDelay(default,default))
				.Type<NonNullType<ListType<NonNullType<AttendanceType>>>>();
			
			descriptor.Field(q => q.GetNonAttendance(default))
				.Type<NonNullType<ListType<NonNullType<ScheduleDetailType>>>>();
			
			descriptor.Field(q => q.GetAttendancesDate(default, default, default));
		}
	}
}