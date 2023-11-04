using RestaurantApp.Entities.Entities;

namespace RestaurantApp.Business.Services;
public interface IUserService
{
    Task<Guid> AddAsync(User user);
    Task<User?> GetByUsernameAsync(string userName);
    Task<User?> GetUserByIdAsync(Guid id);
    Task<User?> GetUserByRefreshTokenAndUserId(string refreshToken, Guid userId);
}
