using HotChocolate;
using HotChocolate.Types;
using Server.Models;
using System.Threading.Tasks;

namespace Server.Schema
{
	public class LicenseType : ObjectType<License>
	{
		protected override void Configure(IObjectTypeDescriptor<License> descriptor)
		{
			base.Configure(descriptor);
			descriptor.Field(a => a.Id)
				.Type<NonNullType<IdType>>();

			descriptor.Field(a => a.PresentationDate)
				.Type<NonNullType<DateTimeType>>();

			descriptor.Field(a => a.StartDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.FinishDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.Document)
				.Type<NonNullType<AnyType>>();

			descriptor.Field(a => a.DocumentName)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.State)
				.Type<NonNullType<BooleanType>>();

			descriptor.Field(a => a.EmployeeCardId)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.LicenseTypeId)
				.Type<NonNullType<IntType>>();

			descriptor.Field<LicenseType>(a => ResolveEmployee(default, default))
				.Name("employee")
				.Type<NonNullType<EmployeeType>>();

			descriptor.Field<LicenseType>(a => ResolveLicenseType(default, default))
				.Name("licenseType")
				.Type<NonNullType<LicenseTypeType>>();
		}

		public async Task<Employee> ResolveEmployee([Parent] License license, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.Employee.FindAsync(license.EmployeeCardId);
		}

		public async Task<Models.LicenseType> ResolveLicenseType([Parent] License license, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.LicenseType.FindAsync(license.LicenseTypeId);
		}
	}
}