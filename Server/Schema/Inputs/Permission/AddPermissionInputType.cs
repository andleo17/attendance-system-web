using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class AddPermissionInputType : InputObjectType<AddPermissionInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<AddPermissionInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(i => i.Date)
				.Type<NonNullType<DateType>>();

			descriptor.Field(i => i.Motive)
				.Type<NonNullType<StringType>>();

			descriptor.Field(i => i.EmployeeCardId)
				.Type<NonNullType<IdType>>();
		}
	}
}