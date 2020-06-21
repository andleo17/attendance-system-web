using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class LicenseInputType : InputObjectType<LicenseInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<LicenseInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(a => a.Id)
				.Type<IdType>();

			descriptor.Field(a => a.StartDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.FinishDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.Document)
				.Type<NonNullType<AnyType>>();

			descriptor.Field(a => a.DocumentName)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.State)
				.Type<BooleanType>();

			descriptor.Field(a => a.EmployeeCardId)
				.Type<IdType>();

			descriptor.Field(a => a.LicenseTypeId)
				.Type<NonNullType<IdType>>();
		}
	}
}