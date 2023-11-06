using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RestaurantApp.Business.Dtos.Requests;
using RestaurantApp.Business.Services;

namespace RestaurantApp.Api.Controllers;
[Authorize]
[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var products = await _productService.GetProductsAsync();
        return Ok(products);
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreateProductRequest createProductRequest)
    {
        Guid id = await _productService.AddAsync(createProductRequest);
        return Created("/products", new { });
    }
}
