using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class ModifyPermissionInputType : InputObjectType<ModifyPermissionInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<ModifyPermissionInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(a => a.Id)
				.Type<NonNullType<IdType>>();

			descriptor.Field(a => a.Date)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.Motive)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.State)
				.Type<NonNullType<BooleanType>>();
		}
	}
}