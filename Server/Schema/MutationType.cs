using HotChocolate.Types;
using Server.Schema.Inputs;

namespace Server.Schema
{
	public class MutationType : ObjectType<Mutation>
	{
		protected override void Configure(IObjectTypeDescriptor<Mutation> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(m => m.AddLicenseType(default, default))
				.Type<LicenseTypeType>()
				.Argument("input", a => a.Type<NonNullType<AddLicenseTypeInputType>>());
		}
	}
}