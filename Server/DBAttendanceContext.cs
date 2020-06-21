using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Server.Models;
using System;

namespace Server
{
	public class DBAttendanceContext : DbContext
	{
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			IConfigurationRoot configuration = new ConfigurationBuilder()
				.SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
				.AddJsonFile("appsettings.json")
				.Build();
			optionsBuilder.UseSqlServer(configuration.GetConnectionString("DBAttendance"));
			optionsBuilder.UseLazyLoadingProxies();
			base.OnConfiguring(optionsBuilder);
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Attendance>()
				.Property(c => c.Date)
				.HasDefaultValueSql("CURRENT_TIMESTAMP");

			modelBuilder.Entity<Attendance>()
				.Property(c => c.InHour)
				.HasDefaultValueSql("CURRENT_TIMESTAMP");

			modelBuilder.Entity<Contract>()
				.Property(c => c.State)
				.HasDefaultValue(true);

			modelBuilder.Entity<Employee>()
				.Property(e => e.State)
				.HasDefaultValue(true);

			modelBuilder.Entity<Justification>()
				.Property(j => j.State)
				.HasDefaultValue(true);

			modelBuilder.Entity<License>()
				.Property(l => l.PresentationDate)
				.HasDefaultValueSql("CURRENT_TIMESTAMP");

			modelBuilder.Entity<License>()
				.Property(l => l.State)
				.HasDefaultValue(false);

			modelBuilder.Entity<Permission>()
				.Property(p => p.PresentationDate)
				.HasDefaultValueSql("CURRENT_TIMESTAMP");

			modelBuilder.Entity<Permission>()
				.Property(p => p.State)
				.HasDefaultValue(false);

			modelBuilder.Entity<Schedule>()
				.Property(s => s.State)
				.HasDefaultValue(true);

			modelBuilder.Entity<User>()
				.Property(u => u.State)
				.HasDefaultValue(true);
		}

		public DbSet<Attendance> Attendance { get; set; }
		public DbSet<Contract> Contract { get; set; }
		public DbSet<Employee> Employee { get; set; }
		public DbSet<Justification> Justification { get; set; }
		public DbSet<License> License { get; set; }
		public DbSet<LicenseType> LicenseType { get; set; }
		public DbSet<Permission> Permission { get; set; }
		public DbSet<Schedule> Schedule { get; set; }
		public DbSet<ScheduleDetail> ScheduleDetail { get; set; }
		public DbSet<User> User { get; set; }

	}
}