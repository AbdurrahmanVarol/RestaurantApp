using RestaurantApp.Entities.Entities;

namespace RestaurantApp.DataAccess.Interfaces;
public interface IOrderRepository : IEntityRepository<Order, Guid>
{
}
