using Microsoft.EntityFrameworkCore.Storage;

namespace RestaurantApp.DataAccess.Interfaces;
public interface IDatabaseTransaction
{
    Task<IDbContextTransaction> BeginTransactionAsync();
}
