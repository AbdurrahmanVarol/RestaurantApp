using AutoMapper;
using RestaurantApp.Business.Dtos.Responses;
using RestaurantApp.DataAccess.Interfaces;

namespace RestaurantApp.Business.Services;
public class CategoryService : ICategoryService
{
    private readonly ICategoryRepository _categoryRepository;
    private readonly IMapper _mapper;

    public CategoryService(ICategoryRepository categoryRepository, IMapper mapper)
    {
        _categoryRepository = categoryRepository;
        _mapper = mapper;
    }

    public async Task<CategoryResponse> GetCategoryByIdAsync(int id)
    {
        var category = await _categoryRepository.GetAsync(p => p.Id == id);
        return _mapper.Map<CategoryResponse>(category);
    }

    public async Task<IEnumerable<CategoryResponse>> GetGategoriesAsync()
    {
        var categories = await _categoryRepository.GetAllAsync();
        return _mapper.Map<IEnumerable<CategoryResponse>>(categories);
    }

    public async Task<bool> IsExistAsync(int categoryId)
    {
        return await _categoryRepository.IsExistAsync(categoryId);
    }
}
