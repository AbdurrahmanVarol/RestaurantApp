namespace RestaurantApp.Business.Dtos.Requests;
public class CreateOrderRequest
{
    public Guid ProductId { get; set; }
    public Guid? UserId { get; set; }
    public int Quantity { get; set; }
    public DateTime? CreatedDate { get; set; }

}
