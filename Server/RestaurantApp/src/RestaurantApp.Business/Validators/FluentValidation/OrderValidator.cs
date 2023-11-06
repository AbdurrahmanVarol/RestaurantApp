using FluentValidation;
using RestaurantApp.Business.Services;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.Business.Validators.FluentValidation;
public class OrderValidator : AbstractValidator<Order>
{
    private readonly IUserService _userService;
    private readonly IProductService _productService;
    public OrderValidator(IUserService userService, IProductService productService)
    {
        _userService = userService;
        _productService = productService;
        RuleFor(p => p.Quantity).NotEmpty().GreaterThan(0);
        RuleFor(p => p.ProductId).NotEmpty().MustAsync(IsProductExist);
        RuleFor(p => p.UserId).NotEmpty().MustAsync(IsUserExist);
    }

    private async Task<bool> IsUserExist(Guid userId, CancellationToken token)
    {
        return await _userService.IsExistAsync(userId);
    }

    private async Task<bool> IsProductExist(Guid productId, CancellationToken token)
    {
        return await _productService.IsExistAsync(productId);
    }
}
