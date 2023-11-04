using RestaurantApp.Entities.Entities;
using System.Linq.Expressions;

namespace RestaurantApp.DataAccess.Interfaces;
public interface IEntityRepository<TEntity, TId>
    where TEntity : Entity<TId>
    where TId : struct
{
    Task<TEntity?> GetAsync(Expression<Func<TEntity, bool>> filter);
    Task<IEnumerable<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> filter = null);
    Task AddAsync(TEntity entity);
    Task UpdateAsync(TEntity entity);
    Task DeleteAsync(TEntity entity);
    Task<bool> IsExist(TId id);
}
