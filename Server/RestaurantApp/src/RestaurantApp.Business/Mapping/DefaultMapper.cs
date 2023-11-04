using AutoMapper;
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
    }
}
