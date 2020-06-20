using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class AddLicenseTypeInputType : InputObjectType<AddLicenseTypeInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<AddLicenseTypeInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(i => i.Description)
				.Type<NonNullType<StringType>>();

			descriptor.Field(i => i.MaximumDays)
				.Type<NonNullType<IntType>>();
		}
	}
}