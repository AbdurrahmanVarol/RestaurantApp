namespace RestaurantApp.Entities.Entities;
public class User : Entity<Guid>
{
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public string? Email { get; set; }
    public required string UserName { get; set; }
    public required string PasswordHash { get; set; }
    public required string PasswordSalt { get; set; }
    public required string RefreshToken { get; set; }

    public int RoleId { get; set; }
    public Role? Role { get; set; }

    public ICollection<Order> Orders { get; set; } = new List<Order>();
}
