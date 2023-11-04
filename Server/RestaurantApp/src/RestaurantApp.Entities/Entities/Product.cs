namespace RestaurantApp.Entities.Entities;
public class Product : Entity<Guid>
{
    public required string Name { get; set; }
    public string Description { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public required decimal Price { get; set; }

    public required int CategortId { get; set; }
    public Category? Category { get; set; }

    public ICollection<Order> Orders { get; set; } = new List<Order>();
}
