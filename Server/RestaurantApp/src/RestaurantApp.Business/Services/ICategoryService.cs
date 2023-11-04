using RestaurantApp.Business.Dtos.Responses;

namespace RestaurantApp.Business.Services;
public interface ICategoryService
{
    Task<IEnumerable<CategoryResponse>> GetGategoriesAsync();
    Task<CategoryResponse> GetCategoryByIdAsync(int id);
}
