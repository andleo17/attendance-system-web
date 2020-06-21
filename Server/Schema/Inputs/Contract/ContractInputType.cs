using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class ContractInputType : InputObjectType<ContractInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<ContractInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(a => a.Id)
				.Type<IdType>();

			descriptor.Field(a => a.StartDate)
				.Type<NonNullType<DateTimeType>>();

			descriptor.Field(a => a.FinishDate)
				.Type<NonNullType<DateTimeType>>();

			descriptor.Field(a => a.Mount)
				.Type<NonNullType<FloatType>>();

			descriptor.Field(a => a.ExtraHours)
				.Type<NonNullType<BooleanType>>();

			descriptor.Field(a => a.State)
				.Type<BooleanType>();

			descriptor.Field(a => a.EmployeeCardId)
				.Type<IdType>();

		}
	}
}