using FluentValidation;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RestaurantApp.Business.Services;
using RestaurantApp.DataAccess;
using System.Reflection;

namespace RestaurantApp.Business;
public static class DependencyResolver
{
    public static void AddBusinessServices(this IServiceCollection services, IConfiguration configuration)
    {

        var assembly = Assembly.GetExecutingAssembly();
        services.AddAutoMapper(assembly);
        services.AddValidatorsFromAssembly(assembly);

        services.AddDataAccessServices(configuration);

        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IProductService, ProductService>();
        services.AddScoped<IOrderService, OrderService>();
        services.AddScoped<ICategoryService, CategoryService>();
        services.AddScoped<IAuthService, AuthService>();
    }
}

