using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class ScheduleInputType : InputObjectType<ScheduleInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<ScheduleInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(s => s.Id)
				.Type<IdType>();

			descriptor.Field(s => s.StartDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(s => s.FinishDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(s => s.State)
				.Type<BooleanType>();

			descriptor.Field(s => s.EmployeeCardId)
				.Type<IdType>();

			descriptor.Field(s => s.ScheduleDetail)
				.Type<NonNullType<ListType<NonNullType<ScheduleDetailInputType>>>>();
		}
	}
}