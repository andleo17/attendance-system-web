using Server;
using Server.Models;
using Server.Schema;
using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Server.Schema
{
	public class ContractType : ObjectType<Contract>
	{
		protected override void Configure(IObjectTypeDescriptor<Contract> descriptor)
		{
			base.Configure(descriptor);
			descriptor.Field(a => a.Id)
				.Type<NonNullType<IdType>>();

			descriptor.Field(a => a.StartDate)
				.Type<NonNullType<DateTimeType>>();

			descriptor.Field(a => a.FinishDate)
				.Type<NonNullType<DateTimeType>>();

			descriptor.Field(a => a.Mount)
				.Type<NonNullType<FloatType>>();

			descriptor.Field(a => a.ExtraHours)
				.Type<NonNullType<BooleanType>>();

			descriptor.Field(a => a.State)
				.Type<NonNullType<BooleanType>>();

			descriptor.Field(a => a.EmployeeCardId)
				.Type<NonNullType<StringType>>();

			descriptor.Field<ContractType>(a => ResolveEmployee(default, default))
				.Name("employee")
				.Type<NonNullType<EmployeeType>>();
		}

		public async Task<Employee> ResolveEmployee([Parent] Contract contract, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.Employee.FindAsync(contract.EmployeeCardId);
		}
	}
}