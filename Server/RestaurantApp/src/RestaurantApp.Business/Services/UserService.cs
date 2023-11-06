using RestaurantApp.DataAccess.Interfaces;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.Business.Services;
public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<Guid> AddAsync(User user)
    {
        await _userRepository.AddAsync(user);
        return user.Id;
    }

    public async Task<User?> GetByUsernameAsync(string userName) => await _userRepository.GetAsync(p => p.UserName.Equals(userName));

    public async Task<User?> GetUserByIdAsync(Guid id) => await _userRepository.GetAsync(p => p.Id == id);

    public async Task<User?> GetUserByRefreshTokenAndUserId(string refreshToken, Guid userId) => await _userRepository.GetAsync(p => p.RefreshToken.Equals(refreshToken) && p.Id == userId);

    public Task<bool> IsExistAsync(Guid userId) => _userRepository.IsExistAsync(userId);
}
