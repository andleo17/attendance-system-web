using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class PermissionInputType : InputObjectType<PermissionInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<PermissionInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(a => a.Id)
				.Type<IdType>();

			descriptor.Field(a => a.Date)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.Motive)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.State)
				.Type<BooleanType>();

			descriptor.Field(a => a.EmployeeCardId)
				.Type<IdType>();
		}
	}
}