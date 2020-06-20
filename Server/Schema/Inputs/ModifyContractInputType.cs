using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class ModifyContractInputType : InputObjectType<ModifyContractInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<ModifyContractInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(a => a.Id)
				.Type<NonNullType<IdType>>();

			descriptor.Field(a => a.StartDate)
				.Type<NonNullType<DateTimeType>>();

			descriptor.Field(a => a.FinishDate)
				.Type<NonNullType<DateTimeType>>();

			descriptor.Field(a => a.Mount)
				.Type<NonNullType<FloatType>>();

			descriptor.Field(a => a.ExtraHours)
				.Type<NonNullType<BooleanType>>();

			descriptor.Field(a => a.State)
				.Type<NonNullType<BooleanType>>();

		}
	}
}