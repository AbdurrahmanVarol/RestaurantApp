using FluentValidation;
using RestaurantApp.Business.Services;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.Business.Validators.FluentValidation;
public class ProductValidator : AbstractValidator<Product>
{
    private readonly ICategoryService _categoryService;
    public ProductValidator(ICategoryService categoryService)
    {
        _categoryService = categoryService;
        RuleFor(p => p.Name).NotEmpty();
        RuleFor(p => p.ImageUrl).NotEmpty();
        RuleFor(p => p.Price).NotEmpty().GreaterThan(0);
        RuleFor(p => p.CategoryId).NotEmpty().MustAsync(IsCategoryExist);
    }

    private async Task<bool> IsCategoryExist(int categoryId, CancellationToken token)
    {
        return await _categoryService.IsExistAsync(categoryId);
    }
}
