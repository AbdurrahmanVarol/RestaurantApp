using FluentValidation;
using RestaurantApp.Business.Services;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.Business.Validators.FluentValidation;
public class UserValidator : AbstractValidator<User>
{
    private readonly IUserService _userService;

    public UserValidator(IUserService userService)
    {

        RuleFor(p => p.FirstName).NotEmpty();
        RuleFor(p => p.LastName).NotEmpty();
        RuleFor(p => p.Email).NotEmpty().EmailAddress();
        RuleFor(p => p.UserName).NotEmpty();
        RuleFor(p => p.PasswordHash).NotEmpty();
        RuleFor(p => p.PasswordSalt).NotEmpty();
        RuleFor(p => p.UserName).Must(p => !IsUserNameExist(p)).WithMessage(p => $"{p.UserName} kullanıcı adı kullanılmaktadır");
        _userService = userService;
    }

    private bool IsUserNameExist(string userName)
    {
        return _userService.GetByUsernameAsync(userName).GetAwaiter().GetResult() != null;
    }
}
