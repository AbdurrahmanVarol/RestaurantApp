using RestaurantApp.DataAccess.Interfaces;
using RestaurantApp.DataAccess.Repositories.EntityFramework.Contexts;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.DataAccess.Repositories.EntityFramework;
public class EfRoleRepository : EfEntityRepositoryBase<Role, RestaurantAppContext, int>, IRoleRepository
{
    public EfRoleRepository(RestaurantAppContext context) : base(context)
    {
    }
}
