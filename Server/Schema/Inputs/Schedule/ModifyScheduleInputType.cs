using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class ModifyScheduleInputType : InputObjectType<ModifyScheduleInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<ModifyScheduleInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(s => s.Id)
				.Type<NonNullType<IdType>>();

			descriptor.Field(s => s.StartDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(s => s.FinishDate)
				.Type<NonNullType<DateType>>();

			descriptor.Field(s => s.State)
				.Type<NonNullType<BooleanType>>();

			descriptor.Field(s => s.ScheduleDetail)
				.Type<NonNullType<ListType<NonNullType<ScheduleDetailInputType>>>>();
		}
	}
}