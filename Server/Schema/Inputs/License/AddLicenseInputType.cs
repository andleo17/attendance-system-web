using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class AddLicenseInputType : InputObjectType<AddLicenseInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<AddLicenseInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(i => i.StartDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(i => i.FinishDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(i => i.Document)
				.Type<NonNullType<AnyType>>();

			descriptor.Field(i => i.DocumentName)
				.Type<NonNullType<StringType>>();

			descriptor.Field(i => i.EmployeeCardId)
				.Type<NonNullType<IdType>>();

			descriptor.Field(i => i.LicenseTypeId)
				.Type<NonNullType<IdType>>();
		}
	}
}