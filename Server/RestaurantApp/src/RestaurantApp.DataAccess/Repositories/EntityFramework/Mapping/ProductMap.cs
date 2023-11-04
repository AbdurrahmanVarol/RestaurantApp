using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.DataAccess.Repositories.EntityFramework.Mapping;
public class ProductMap : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.HasKey(p => p.Id);

        builder.Property(p => p.Id).HasDefaultValueSql("NEWID()");

        builder.HasMany(p => p.Orders)
           .WithOne(p => p.Product)
           .HasForeignKey(p => p.ProductId)
           .OnDelete(DeleteBehavior.Cascade);
    }
}
