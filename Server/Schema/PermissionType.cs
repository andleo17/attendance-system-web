using HotChocolate;
using HotChocolate.Types;
using Server.Models;
using System.Threading.Tasks;

namespace Server.Schema
{
	public class PermissionType : ObjectType<Permission>
	{
		protected override void Configure(IObjectTypeDescriptor<Permission> descriptor)
		{
			base.Configure(descriptor);
			descriptor.Field(a => a.Id)
				.Type<NonNullType<IdType>>();

			descriptor.Field(a => a.PresentationDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.Date)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.Motive)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.State)
				.Type<NonNullType<BooleanType>>();

			descriptor.Field(a => a.EmployeeCardId)
				.Type<NonNullType<StringType>>();

			descriptor.Field<PermissionType>(a => ResolveEmployee(default, default))
				.Name("employee")
				.Type<NonNullType<EmployeeType>>();
		}

		public async Task<Employee> ResolveEmployee([Parent] Permission permission, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.Employee.FindAsync(permission.EmployeeCardId);
		}
	}
}