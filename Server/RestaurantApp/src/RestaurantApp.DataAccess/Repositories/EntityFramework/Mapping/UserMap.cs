using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.DataAccess.Repositories.EntityFramework.Mapping;
public class UserMap : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(p => p.Id);

        builder.Property(p => p.Id).HasDefaultValueSql("NEWID()");

        builder.HasOne(p => p.Role)
            .WithMany(p => p.Users)
            .HasForeignKey(p => p.RoleId)
            .OnDelete(DeleteBehavior.NoAction);

        builder.HasMany(p => p.Orders)
           .WithOne(p => p.User)
           .HasForeignKey(p => p.UserId)
           .OnDelete(DeleteBehavior.Cascade);
    }
}
