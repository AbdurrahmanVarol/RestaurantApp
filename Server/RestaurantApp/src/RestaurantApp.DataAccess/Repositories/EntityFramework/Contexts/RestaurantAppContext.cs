using Microsoft.EntityFrameworkCore;
using RestaurantApp.Entities.Entities;
using System.Reflection;

namespace RestaurantApp.DataAccess.Repositories.EntityFramework.Contexts;
public class RestaurantAppContext : DbContext
{
    public RestaurantAppContext(DbContextOptions options) : base(options)
    {

    }

    public DbSet<User> Users { get; set; }
    public DbSet<Role> Roles { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Order> Orders { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}
