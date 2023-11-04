using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.DataAccess.Repositories.EntityFramework.Mapping;
public class CategoryMap : IEntityTypeConfiguration<Category>
{
    public void Configure(EntityTypeBuilder<Category> builder)
    {
        builder.HasKey(p => p.Id);

        builder.HasMany(p => p.Products)
            .WithOne(p => p.Category)
            .HasForeignKey(p => p.CategortId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
