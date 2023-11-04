using RestaurantApp.Entities.Entities;

namespace RestaurantApp.DataAccess.Interfaces;
public interface IUserRepository : IEntityRepository<User, Guid>
{
}
