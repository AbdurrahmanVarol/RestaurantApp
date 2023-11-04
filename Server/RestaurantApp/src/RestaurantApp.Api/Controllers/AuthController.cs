using Microsoft.AspNetCore.Mvc;
using RestaurantApp.Business.Dtos.Requests;
using RestaurantApp.Business.Services;

namespace RestaurantApp.Api.Controllers;
[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
    {
        var result = await _authService.LoginAsync(loginRequest);
        return Ok(result);
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest registerRequest)
    {
        await _authService.RegisterAsync(registerRequest);
        return Created("/login", new { });
    }
}
