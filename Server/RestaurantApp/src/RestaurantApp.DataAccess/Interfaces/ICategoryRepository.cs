using RestaurantApp.Entities.Entities;

namespace RestaurantApp.DataAccess.Interfaces;
public interface ICategoryRepository : IEntityRepository<Category, int>
{
}
