using RestaurantApp.Entities.Entities;

namespace RestaurantApp.DataAccess.Interfaces;
public interface IProductRepository : IEntityRepository<Product, Guid>
{
}
