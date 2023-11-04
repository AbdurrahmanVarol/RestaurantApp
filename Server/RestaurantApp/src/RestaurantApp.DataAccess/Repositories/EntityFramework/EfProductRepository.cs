using RestaurantApp.DataAccess.Interfaces;
using RestaurantApp.DataAccess.Repositories.EntityFramework.Contexts;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.DataAccess.Repositories.EntityFramework;
public class EfProductRepository : EfEntityRepositoryBase<Product, RestaurantAppContext, Guid>, IProductRepository
{
    public EfProductRepository(RestaurantAppContext context) : base(context)
    {
    }
}
