namespace RestaurantApp.Business.Dtos.Responses;
public class OrderResponse
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public int Quantity { get; set; }
    public required Guid UserId { get; set; }
    public Guid ProductId { get; set; }
    public ProductResponse? Product { get; set; }
}
