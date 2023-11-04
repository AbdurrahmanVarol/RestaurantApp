namespace RestaurantApp.Entities.Entities;
public class Role : Entity<int>
{
    public string Name { get; set; } = string.Empty;

    public ICollection<User> Users { get; set; } = new List<User>();
}