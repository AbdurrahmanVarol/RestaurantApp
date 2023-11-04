namespace RestaurantApp.Business.Dtos.Requests;
public class RefreshTokenRequest
{
    public string RefreshToken { get; set; }
    public Guid UserId { get; set; }
}
