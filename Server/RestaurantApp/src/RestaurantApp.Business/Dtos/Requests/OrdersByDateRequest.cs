namespace RestaurantApp.Business.Dtos.Requests;
public class OrdersByDateRequest
{
    public DateTime StartDate { get; set; } = DateTime.Now;
    public DateTime EndDate { get; set; } = DateTime.Now;
    public Guid? UserId { get; set; }
}
