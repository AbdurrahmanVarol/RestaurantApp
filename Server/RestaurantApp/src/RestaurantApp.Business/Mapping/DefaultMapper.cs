using AutoMapper;
using RestaurantApp.Business.Dtos.Requests;
using RestaurantApp.Business.Dtos.Responses;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.Business.Mapping;
public class DefaultMapper : Profile
{
    public DefaultMapper()
    {
        CreateMap<Order, OrderResponse>();
        CreateMap<Product, ProductResponse>();
        CreateMap<Category, CategoryResponse>();
        CreateMap<RegisterRequest, User>()
            .ForMember(p => p.PasswordHash, d => d.MapFrom(m => string.Empty))
            .ForMember(p => p.PasswordSalt, d => d.MapFrom(m => string.Empty));

        CreateMap<CreateOrderRequest, Order>();
    }
}
