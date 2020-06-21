using HotChocolate.Language;
using HotChocolate.Types;
using System;

namespace Server.Schema
{
	public class TimeType : ScalarType
	{
		public TimeType() : base(nameof(TimeSpan)) { }

		public override bool IsInstanceOfType(IValueNode literal)
		{
			return literal is StringValueNode;
		}

		public override object ParseLiteral(IValueNode literal)
		{
			var asString = ((StringValueNode)literal).Value;
			var time = TimeSpan.Parse(asString);
			return time;
		}

		public override IValueNode ParseValue(object value)
		{
			if (value == null)
				return new NullValueNode(null);
			var time = (TimeSpan)value;
			return new StringValueNode(time.ToString());
		}

		public override object Serialize(object value)
		{
			if (value == null)
			{
				return null;
			}

			if (value is TimeSpan timeSpan)
			{
				return timeSpan.ToString();
			}
			throw new ArgumentException("The specified value cannot be serialized by the StringType.");
		}

		public override bool TryDeserialize(object serialized, out object value)
		{
			if (serialized is null)
			{
				value = null;
				return true;
			}

			if (serialized is string s)
			{
				value = TimeSpan.Parse(s);
				return true;
			}

			value = null;
			return false;
		}

		public override Type ClrType => typeof(TimeSpan);
	}
}