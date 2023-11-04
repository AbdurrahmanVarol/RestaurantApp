using RestaurantApp.Business.Dtos.Requests;
using RestaurantApp.Business.Dtos.Responses;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.Business.Services;
public interface IAuthService
{
    Task<LoginResponse> LoginAsync(LoginRequest request);
    Task<LoginResponse> RefreshTokenAsync(RefreshTokenRequest refreshTokenRequest);
    Task RegisterAsync(RegisterRequest request);
    void CreatePasswordHash(string password, out string passwordHash, out string passwordSalt);
    bool VerifyPasswordHash(string password, string passwordHash, string passwordSalt);
    string GenerateToken(User user);
}
