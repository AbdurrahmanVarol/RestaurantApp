using RestaurantApp.Business.Dtos.Requests;
using RestaurantApp.Business.Dtos.Responses;

namespace RestaurantApp.Business.Services;
public interface IProductService
{
    Task<IEnumerable<ProductResponse>> GetProductsAsync();
    Task<ProductResponse> GetProductAsync(Guid id);
    Task<Guid> AddAsync(CreateProductRequest createProductRequest);
    Task<bool> IsExistAsync(Guid productId);
}
