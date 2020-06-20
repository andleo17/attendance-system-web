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
				.Argument("input", a => a.Type<NonNullType<AddContractInputType>>());

			descriptor.Field(m => m.ModifyContract(default, default))
				.Type<ContractType>()
				.Argument("input", a => a.Type<NonNullType<ModifyContractInputType>>());

			descriptor.Field(m => m.AddContract(default, default))
				.Type<ContractType>()
				.Argument("contractId", a => a.Type<NonNullType<IdType>>());

			descriptor.Field(m => m.AddJustification(default, default))
				.Type<JustificationType>()
				.Argument("input", a => a.Type<NonNullType<AddJustificationInputType>>());

			descriptor.Field(m => m.ModifyJustification(default, default))
				.Type<JustificationType>()
				.Argument("input", a => a.Type<NonNullType<ModifyContractInputType>>());

			descriptor.Field(m => m.DeleteJustification(default, default))
				.Type<JustificationType>()
				.Argument("justificationId", a => a.Type<NonNullType<IdType>>());

			descriptor.Field(m => m.AddLicense(default, default))
				.Type<LicenseType>()
				.Argument("input", a => a.Type<NonNullType<AddLicenseInputType>>());

			descriptor.Field(m => m.ModifyLicense(default, default))
				.Type<LicenseType>()
				.Argument("input", a => a.Type<NonNullType<ModifyLicenseInputType>>());

			descriptor.Field(m => m.DeleteLicense(default, default))
				.Type<LicenseType>()
				.Argument("licenseId", a => a.Type<NonNullType<IdType>>());

			descriptor.Field(m => m.AddPermission(default, default))
				.Type<PermissionType>()
				.Argument("input", a => a.Type<NonNullType<AddPermissionInputType>>());

			descriptor.Field(m => m.ModifyPermission(default, default))
				.Type<PermissionType>()
				.Argument("input", a => a.Type<NonNullType<ModifyPermissionInputType>>());

			descriptor.Field(m => m.DeletePermission(default, default))
				.Type<PermissionType>()
				.Argument("permissionId", a => a.Type<NonNullType<IdType>>());

			descriptor.Field(m => m.AddLicenseType(default, default))
				.Type<LicenseTypeType>()
				.Argument("input", a => a.Type<NonNullType<AddLicenseTypeInputType>>());

			descriptor.Field(m => m.AddUser(default, default))
				.Type<UserType>()
				.Argument("input", a => a.Type<NonNullType<AddUserInputType>>());
		}
	}
}