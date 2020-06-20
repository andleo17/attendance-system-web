using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class AddScheduleInputType : InputObjectType<AddScheduleInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<AddScheduleInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(s => s.StartDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(s => s.FinishDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(s => s.EmployeeCardId)
				.Type<NonNullType<IdType>>();

			descriptor.Field(s => s.ScheduleDetail)
				.Type<NonNullType<ListType<NonNullType<ScheduleDetailInputType>>>>();
		}
	}
}