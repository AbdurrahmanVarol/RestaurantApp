namespace RestaurantApp.Entities.Entities;
public class Category : Entity<int>
{
    public required string Name { get; set; }

    public ICollection<Product> Products { get; set; } = new List<Product>();
}
