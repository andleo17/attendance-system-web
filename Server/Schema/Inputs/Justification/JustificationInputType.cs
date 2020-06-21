using HotChocolate.Types;

namespace Server.Schema.Inputs
{
	public class JustificationInputType : InputObjectType<JustificationInput>
	{
		protected override void Configure(IInputObjectTypeDescriptor<JustificationInput> descriptor)
		{
			base.Configure(descriptor);

			descriptor.Field(a => a.Id)
				.Type<IdType>();

			descriptor.Field(a => a.Date)
				.Type<NonNullType<DateType>>();

			descriptor.Field(a => a.Motive)
				.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.State)
				.Type<BooleanType>();

			descriptor.Field(a => a.AttendanceId)
				.Type<IdType>();
		}
	}
}