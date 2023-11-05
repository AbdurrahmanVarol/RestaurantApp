namespace RestaurantApp.Entities.Entities;
public class Order : Entity<Guid>
{
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public int Quantity { get; set; }

    public required Guid ProductId { get; set; }
    public Product? Product { get; set; }

    public required Guid UserId { get; set; }
    public User? User { get; set; }
}
