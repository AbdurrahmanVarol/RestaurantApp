using Microsoft.EntityFrameworkCore;
using RestaurantApp.DataAccess.Interfaces;
using RestaurantApp.Entities.Entities;
using System.Linq.Expressions;

namespace RestaurantApp.DataAccess.Repositories.EntityFramework;
public class EfEntityRepositoryBase<TEntity, TContext, TId> : IEntityRepository<TEntity, TId>
        where TEntity : Entity<TId>
        where TContext : DbContext
        where TId : struct
{
    private readonly TContext _context;

    public EfEntityRepositoryBase(TContext context)
    {
        _context = context;
    }

    public async Task AddAsync(TEntity entity)
    {
        var addedEntity = _context.Entry(entity);
        addedEntity.State = EntityState.Added;
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(TEntity entity)
    {
        var deletedEntity = _context.Entry(entity);
        deletedEntity.State = EntityState.Deleted;
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> filter)
    {
        return await (filter == null ? _context.Set<TEntity>().ToListAsync() : _context.Set<TEntity>().Where(filter).ToListAsync());
    }

    public async Task<TEntity?> GetAsync(Expression<Func<TEntity, bool>> filter) => await _context.Set<TEntity>().FirstOrDefaultAsync(filter);

    public async Task UpdateAsync(TEntity entity)
    {
        var updatedEntity = _context.Entry(entity);
        updatedEntity.State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }

    public async Task<bool> IsExist(TId id) => (await _context.Set<TEntity>().FindAsync(id)) != null;

}
