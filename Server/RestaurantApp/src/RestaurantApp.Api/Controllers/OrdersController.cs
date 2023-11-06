using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RestaurantApp.Business.Dtos.Requests;
using RestaurantApp.Business.Dtos.Responses;
using RestaurantApp.Business.Services;
using System.Security.Claims;

namespace RestaurantApp.Api.Controllers;
[Authorize]
[Route("api/[controller]")]
[ApiController]
public class OrdersController : ControllerBase
{
    private readonly IOrderService _orderService;

    private Guid UserId => Guid.Parse(HttpContext.User.Claims.First(p => p.Type.Equals(ClaimTypes.NameIdentifier)).Value);

    public OrdersController(IOrderService orderService)
    {
        _orderService = orderService;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var orders = await _orderService.GetOrdersByUserIdAsync(UserId);
        return Ok(orders);
    }

    [HttpGet("getByDate")]
    public async Task<IActionResult> GetByDate([FromQuery] OrdersByDateRequest request)
    {
        request.UserId = UserId;
        IEnumerable<OrderResponse> orders = await _orderService.GetOrdersByDateAsync(request);
        return Ok(orders);
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreateOrdersRequest createOrdersRequest)
    {

        await _orderService.AddRange(createOrdersRequest, UserId);
        return Ok();

    }
}
