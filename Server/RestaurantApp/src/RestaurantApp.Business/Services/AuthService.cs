using AutoMapper;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using RestaurantApp.Business.Dtos.Requests;
using RestaurantApp.Business.Dtos.Responses;
using RestaurantApp.Entities.Entities;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace RestaurantApp.Business.Services;
public class AuthService : IAuthService
{
    private readonly IUserService _userService;
    private readonly IConfiguration _configuration;
    private readonly IMapper _mapper;
    public AuthService(IUserService userService, IMapper mapper, IConfiguration configuration)
    {
        _userService = userService;
        _configuration = configuration;
        _mapper = mapper;
    }

    public string GenerateToken(User user)
    {
        var key = _configuration.GetSection("JWT:Key").Value;
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
        var creadentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha512);
        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier,user.Id.ToString()),
            new Claim(ClaimTypes.Name,user.FirstName),
            new Claim(ClaimTypes.Surname,user.LastName)
        };
        var jwtSecurityToken = new JwtSecurityToken(
            issuer: "",
            audience: "",
            claims: claims,
            expires: DateTime.Now.AddDays(5),
            notBefore: DateTime.Now,
            signingCredentials: creadentials);

        var token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);

        return token;
    }

    public async Task<LoginResponse> LoginAsync(LoginRequest loginRequest)
    {
        if (loginRequest is null)
        {
            throw new ArgumentNullException(nameof(loginRequest));
        }
        var user = await _userService.GetByUsernameAsync(loginRequest.UserName) ?? throw new ArgumentException($"Kullanıcı adı ya da şifre hatalı");

        if (!VerifyPasswordHash(loginRequest.Password, user.PasswordHash, user.PasswordSalt))
        {
            throw new ArgumentException("Kullanıcı adı ya da şifre hatalı");
        }

        var token = GenerateToken(user);
        var response = new LoginResponse
        {
            Token = token,
            UserName = $"{user.FirstName} {user.LastName}",
            Expire = DateTime.Now.AddDays(5),
            RefreshToken = user.RefreshToken,
            UserRole = user.Role
        };
        return response;
    }
    public void CreatePasswordHash(string password, out string passwordHash, out string passwordSalt)
    {
        using var hmac = new System.Security.Cryptography.HMACSHA512();
        passwordSalt = Convert.ToBase64String(hmac.Key);
        passwordHash = Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(password)));
    }

    public bool VerifyPasswordHash(string password, string passwordHash, string passwordSalt)
    {
        using var hmac = new System.Security.Cryptography.HMACSHA512(Convert.FromBase64String(passwordSalt));

        var computedHash = Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(password)));

        return passwordHash.Equals(computedHash);
    }

    public async Task RegisterAsync(RegisterRequest registerRequest)
    {
        if (registerRequest is null)
        {
            throw new ArgumentNullException(nameof(registerRequest));
        }
        if (!registerRequest.Password.Equals(registerRequest.PasswordConfirm))
        {
            throw new ArgumentException("Şifre ve şifre tekrar aynı değil.");
        }
        CreatePasswordHash(registerRequest.Password, out string passwordHash, out string passwordSalt);

        var user = _mapper.Map<User>(registerRequest);
        user.PasswordSalt = passwordSalt;
        user.PasswordHash = passwordHash;
        await _userService.AddAsync(user);
    }

    public async Task<LoginResponse> RefreshTokenAsync(RefreshTokenRequest refreshTokenRequest)
    {
        var user = await _userService.GetUserByRefreshTokenAndUserId(refreshTokenRequest.RefreshToken, refreshTokenRequest.UserId) ?? throw new ArgumentNullException("Kullanıcı bulunamadı!!!");

        var token = GenerateToken(user);
        var response = new LoginResponse
        {
            Token = token,
            UserName = $"{user.FirstName} {user.LastName}",
            Expire = DateTime.Now.AddDays(5),
            RefreshToken = user.RefreshToken,
            UserRole = user.Role
        };
        return response;
    }
}
