using Microsoft.EntityFrameworkCore.Storage;
using RestaurantApp.DataAccess.Interfaces;
using RestaurantApp.DataAccess.Repositories.EntityFramework.Contexts;

namespace RestaurantApp.DataAccess.Transaction;
public class EfDatabaseTransaction : IDatabaseTransaction
{
    private readonly RestaurantAppContext _appContext;


    public EfDatabaseTransaction(RestaurantAppContext context)
    {
        _appContext = context;
    }
    public async Task<IDbContextTransaction> BeginTransactionAsync()
    {
        return await _appContext.Database.BeginTransactionAsync();
    }
}
