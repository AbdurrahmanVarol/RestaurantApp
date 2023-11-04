using RestaurantApp.Entities.Entities;

namespace RestaurantApp.Business.Dtos.Responses;
public class LoginResponse
{
    public string Token { get; set; }
    public string RefreshToken { get; set; }
    public string UserName { get; set; }
    public DateTime Expire { get; internal set; }
    public Role? UserRole { get; internal set; }
}
