using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class AddJustificationInputType : InputObjectType<AddJustificationInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<AddJustificationInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(i => i.Date)
				.Type<NonNullType<DateType>>();

			descriptor.Field(i => i.Motive)
				.Type<NonNullType<StringType>>();

			descriptor.Field(i => i.AttendanceId)
				.Type<NonNullType<IdType>>();
		}
	}
}