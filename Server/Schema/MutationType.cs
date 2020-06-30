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
				.Argument("employeeCardId", a => a.Type<NonNullType<IdType>>());

			descriptor.Field(m => m.OutAttendance(default, default))
				.Type<AttendanceType>()
				.Argument("attendanceId", a => a.Type<NonNullType<IdType>>());

			descriptor.Field(m => m.AddContract(default, default))
				.Type<ContractType>()
				.Argument("input", a => a.Type<NonNullType<ContractInputType>>());

			descriptor.Field(m => m.ModifyContract(default, default))
				.Type<ContractType>()
				.Argument("input", a => a.Type<NonNullType<ContractInputType>>());

			descriptor.Field(m => m.DownContract(default, default))
				.Type<ContractType>()
				.Argument("contractId", a => a.Type<NonNullType<IdType>>());

			descriptor.Field(m => m.AddEmployee(default, default))
				.Type<EmployeeType>()
				.Argument("input", a => a.Type<NonNullType<EmployeeInputType>>());

			descriptor.Field(m => m.ModifyEmployee(default, default))
				.Type<EmployeeType>()
				.Argument("input", a => a.Type<NonNullType<EmployeeInputType>>());

			descriptor.Field(m => m.DownEmployee(default, default))
				.Type<EmployeeType>()
				.Argument("employeeCardId", a => a.Type<NonNullType<IdType>>());

			descriptor.Field(m => m.DeleteEmployee(default, default))
				.Type<EmployeeType>()
				.Argument("employeeCardId", a => a.Type<NonNullType<IdType>>());

			descriptor.Field(m => m.AddJustification(default, default))
				.Type<JustificationType>()
				.Argument("input", a => a.Type<NonNullType<JustificationInputType>>());

			descriptor.Field(m => m.ModifyJustification(default, default))
				.Type<JustificationType>()
				.Argument("input", a => a.Type<NonNullType<JustificationInputType>>());

			descriptor.Field(m => m.DeleteJustification(default, default))
				.Type<JustificationType>()
				.Argument("justificationId", a => a.Type<NonNullType<IdType>>());

			descriptor.Field(m => m.AddLicense(default, default))
				.Type<LicenseType>()
				.Argument("input", a => a.Type<NonNullType<LicenseInputType>>());

			descriptor.Field(m => m.ModifyLicense(default, default))
				.Type<LicenseType>()
				.Argument("input", a => a.Type<NonNullType<LicenseInputType>>());

			descriptor.Field(m => m.DeleteLicense(default, default))
				.Type<LicenseType>()
				.Argument("licenseId", a => a.Type<NonNullType<IdType>>());

			descriptor.Field(m => m.AddLicenseType(default, default))
				.Type<LicenseTypeType>()
				.Argument("input", a => a.Type<NonNullType<LicenseTypeInputType>>());

			descriptor.Field(m => m.ModifyLicenseType(default, default))
				.Type<LicenseTypeType>()
				.Argument("input", a => a.Type<NonNullType<LicenseTypeInputType>>());

			descriptor.Field(m => m.DeleteLicenseType(default, default))
				.Type<LicenseTypeType>()
				.Argument("licenseTypeId", a => a.Type<NonNullType<ByteType>>());

			descriptor.Field(m => m.AddPermission(default, default))
				.Type<PermissionType>()
				.Argument("input", a => a.Type<NonNullType<PermissionInputType>>());

			descriptor.Field(m => m.ModifyPermission(default, default))
				.Type<PermissionType>()
				.Argument("input", a => a.Type<NonNullType<PermissionInputType>>());

			descriptor.Field(m => m.DeletePermission(default, default))
				.Type<PermissionType>()
				.Argument("permissionId", a => a.Type<NonNullType<IntType>>());

			descriptor.Field(m => m.AddSchedule(default, default))
				.Type<ScheduleType>()
				.Argument("input", a => a.Type<NonNullType<ScheduleInputType>>());

			descriptor.Field(m => m.ModifySchedule(default, default))
				.Type<ScheduleType>()
				.Argument("input", a => a.Type<NonNullType<ScheduleInputType>>());

			descriptor.Field(m => m.DownSchedule(default, default))
				.Type<ScheduleType>()
				.Argument("scheduleId", a => a.Type<NonNullType<IdType>>());

			descriptor.Field(m => m.AddUser(default, default))
				.Type<UserType>()
				.Argument("input", a => a.Type<NonNullType<UserInputType>>());

			descriptor.Field(m => m.ModifyUser(default, default))
				.Type<UserType>()
				.Argument("input", a => a.Type<NonNullType<UserInputType>>());

			descriptor.Field(m => m.DownUser(default, default))
				.Type<UserType>()
				.Argument("userId", a => a.Type<NonNullType<IdType>>());

			descriptor.Field(m => m.DownPermission(default, default))
				.Type<PermissionType>()
				.Argument("permissionId", a => a.Type<NonNullType<IntType>>());
		}
	}
}