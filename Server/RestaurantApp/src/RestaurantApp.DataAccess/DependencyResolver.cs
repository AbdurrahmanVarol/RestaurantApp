using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RestaurantApp.DataAccess.Interfaces;
using RestaurantApp.DataAccess.Repositories.EntityFramework;
using RestaurantApp.DataAccess.Repositories.EntityFramework.Contexts;

namespace RestaurantApp.DataAccess;
public static class DependencyResolver
{
    public static void AddDataAccessServices(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("SqlServerConnectionString");

        services.AddDbContext<RestaurantAppContext>(options =>
        {
            options.UseSqlServer(connectionString);
        });

        services.AddScoped<IOrderRepository, EfOrderRepository>();
        services.AddScoped<IProductRepository, EfProductRepository>();
        services.AddScoped<IUserRepository, EfUserRepository>();
        services.AddScoped<ICategoryRepository, EfCategoryRepository>();
        services.AddScoped<IRoleRepository, EfRoleRepository>();
    }
}
