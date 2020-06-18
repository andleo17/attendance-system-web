using HotChocolate;
using HotChocolate.Types;
using Server.Models;
using System.Threading.Tasks;

namespace Server.Schema
{
	public class UserType : ObjectType<User>
	{
		protected override void Configure(IObjectTypeDescriptor<User> descriptor)
		{
			base.Configure(descriptor);
			descriptor.Field(a => a.Id)
			.Type<NonNullType<IdType>>();

			descriptor.Field(a => a.Name)
			.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.Password)
			.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.State)
			.Type<NonNullType<BooleanType>>();

			descriptor.Field(a => a.EmployeeCardId)
			.Type<NonNullType<StringType>>();

			descriptor.Field<UserType>(a => ResolveEmployee(default, default))
			.Name("employee")
			.Type<NonNullType<EmployeeType>>();
		}

		public async Task<Employee> ResolveEmployee([Parent] User user, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.Employee.FindAsync(user.EmployeeCardId);
		}
	}
}