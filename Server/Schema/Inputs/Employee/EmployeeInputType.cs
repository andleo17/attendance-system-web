using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class EmployeeInputType : InputObjectType<EmployeeInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<EmployeeInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(a => a.CardId)
				.Type<IdType>();

			descriptor.Field(a => a.Name)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.Lastname)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.Genre)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.BirthDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.Address)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.Phone)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.Email)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.Photo)
				.Type<NonNullType<AnyType>>();

			descriptor.Field(a => a.PhotoName)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.State)
				.Type<BooleanType>();

			descriptor.Field(a => a.Contract)
				.Type<ContractInputType>();

			descriptor.Field(a => a.Schedule)
				.Type<ScheduleInputType>();
		}
	}
}