using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class AddUserInputType : InputObjectType<AddUserInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<AddUserInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(i => i.Name)
				.Type<NonNullType<StringType>>();

			descriptor.Field(i => i.Password)
				.Type<NonNullType<StringType>>();

			descriptor.Field(i => i.EmployeeCardId)
				.Type<NonNullType<StringType>>();

		}
	}
}