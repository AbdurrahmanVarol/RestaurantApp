namespace RestaurantApp.Business.Dtos.Requests;
public class CreateOrdersRequest
{
    public IEnumerable<CreateOrderRequest> Requests { get; set; }
}
