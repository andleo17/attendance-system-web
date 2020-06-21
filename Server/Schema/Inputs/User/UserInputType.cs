using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class UserInputType : InputObjectType<UserInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<UserInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(i => i.Id)
				.Type<IdType>();

			descriptor.Field(i => i.Name)
				.Type<NonNullType<StringType>>();

			descriptor.Field(i => i.Password)
				.Type<NonNullType<StringType>>();

			descriptor.Field(i => i.State)
				.Type<BooleanType>();

			descriptor.Field(i => i.EmployeeCardId)
				.Type<IdType>();

		}
	}
}