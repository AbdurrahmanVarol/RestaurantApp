namespace RestaurantApp.Entities.Entities;
public class Entity<TId> where TId : struct
{
    public TId Id { get; set; }
}
