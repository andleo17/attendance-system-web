using HotChocolate;
using HotChocolate.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Server.Schema;

namespace Server
{
	public class Startup
	{
		readonly string allowSpecificOrigins = "AllowSpecificOrigins";
		// This method gets called by the runtime. Use this method to add services to the container.
		// For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddCors(options =>
			{
				options.AddPolicy(name: allowSpecificOrigins, builder =>
				{
					builder.WithOrigins("*")
							.AllowAnyHeader()
							.AllowAnyMethod();
				});
			});

			services
				.AddEntityFrameworkSqlServer()
				.AddTransient<DBAttendanceContext>();

			services
				.AddDataLoaderRegistry()
				.AddGraphQL(sp => SchemaBuilder
					.New()
					.AddQueryType<QueryType>()
					.AddMutationType<MutationType>()
					.AddType<TimeType>()
					.Create()
				);
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app
				.UseCors(allowSpecificOrigins)
				.UseRouting()
				.UseWebSockets()
				.UseGraphQL()
				.UsePlayground();
		}
	}
}
