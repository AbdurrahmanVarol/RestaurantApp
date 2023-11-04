using RestaurantApp.DataAccess.Interfaces;
using RestaurantApp.DataAccess.Repositories.EntityFramework.Contexts;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.DataAccess.Repositories.EntityFramework;
public class EfCategoryRepository : EfEntityRepositoryBase<Category, RestaurantAppContext, int>, ICategoryRepository
{
    public EfCategoryRepository(RestaurantAppContext context) : base(context)
    {
    }
}
