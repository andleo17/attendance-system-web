using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class AddContractInputType : InputObjectType<AddContractInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<AddContractInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(i => i.StartDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(i => i.FinishDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(i => i.Mount)
				.Type<NonNullType<DecimalType>>();

			descriptor.Field(i => i.ExtraHours)
				.Type<NonNullType<BooleanType>>();

			descriptor.Field(i => i.EmployeeCardId)
				.Type<NonNullType<IdType>>();
		}
	}
}