using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class LicenseTypeInputType : InputObjectType<LicenseTypeInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<LicenseTypeInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(i => i.Id)
				.Type<IdType>();

			descriptor.Field(i => i.Description)
				.Type<NonNullType<StringType>>();

			descriptor.Field(i => i.MaximumDays)
				.Type<NonNullType<IntType>>();
		}
	}
}