using RestaurantApp.DataAccess.Interfaces;
using RestaurantApp.DataAccess.Repositories.EntityFramework.Contexts;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.DataAccess.Repositories.EntityFramework;
public class EfUserRepository : EfEntityRepositoryBase<User, RestaurantAppContext, Guid>, IUserRepository
{
    public EfUserRepository(RestaurantAppContext context) : base(context)
    {
    }
}
