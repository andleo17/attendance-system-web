using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class ScheduleDetailInputType : InputObjectType<ScheduleDetailInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<ScheduleDetailInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(a => a.Id)
				.Type<IdType>();

			descriptor.Field(a => a.Day)
				.Type<NonNullType<ByteType>>();

			descriptor.Field(a => a.InHour)
				.Type<NonNullType<TimeType>>();

			descriptor.Field(a => a.OutHour)
				.Type<NonNullType<TimeType>>();

			descriptor.Field(a => a.Action)
				.Type<NonNullType<ByteType>>();
		}
	}
}