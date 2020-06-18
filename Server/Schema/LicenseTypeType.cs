using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Schema
{
	public class LicenseTypeType : ObjectType<Server.Models.LicenseType>
	{
		protected override void Configure(IObjectTypeDescriptor<Server.Models.LicenseType> descriptor)
		{
			base.Configure(descriptor);
			descriptor.Field(a => a.Id)
			.Type<NonNullType<IdType>>();

			descriptor.Field(a => a.Description)
			.Type<NonNullType<StringType>>();

			descriptor.Field(a => a.MaximumDays)
			.Type<NonNullType<IntType>>();

			descriptor.Field<LicenseTypeType>(a => ResolveLicense(default, default))
			.Name("license")
			.Type<NonNullType<ListType<NonNullType<LicenseType>>>>();
		}

		public async Task<IReadOnlyCollection<License>> ResolveLicense([Parent] Models.LicenseType licenseType, [Service] DBAttendanceContext dBAttendanceContext)
		{
			return await dBAttendanceContext.License.Where(l => l.LicenseTypeId == licenseType.Id).ToListAsync();
		}
	}
}