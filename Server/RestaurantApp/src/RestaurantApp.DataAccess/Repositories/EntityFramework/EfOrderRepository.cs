using RestaurantApp.DataAccess.Interfaces;
using RestaurantApp.DataAccess.Repositories.EntityFramework.Contexts;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.DataAccess.Repositories.EntityFramework;
public class EfOrderRepository : EfEntityRepositoryBase<Order, RestaurantAppContext, Guid>, IOrderRepository
{
    public EfOrderRepository(RestaurantAppContext context) : base(context)
    {
    }
}
