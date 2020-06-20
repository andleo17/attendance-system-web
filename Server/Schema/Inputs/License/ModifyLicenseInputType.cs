using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class ModifyLicenseInputType : InputObjectType<ModifyLicenseInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<ModifyLicenseInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(a => a.Id)
				.Type<NonNullType<IdType>>();

			descriptor.Field(a => a.StartDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.FinishDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.Document)
				.Type<NonNullType<AnyType>>();

			descriptor.Field(a => a.DocumentName)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.State)
				.Type<NonNullType<BooleanType>>();

			descriptor.Field(a => a.LicenseTypeId)
				.Type<NonNullType<IdType>>();
		}
	}
}