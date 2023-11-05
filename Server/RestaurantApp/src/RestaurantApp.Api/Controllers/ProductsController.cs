using Microsoft.AspNetCore.Mvc;
using RestaurantApp.Business.Services;

namespace RestaurantApp.Api.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var products = await _productService.GetProductsAsync();
        return Ok(products);
    }
}
