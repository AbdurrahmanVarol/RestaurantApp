﻿using RestaurantApp.Business.Dtos.Requests;
using RestaurantApp.Business.Dtos.Responses;

namespace RestaurantApp.Business.Services;
public interface IOrderService
{
    Task<IEnumerable<OrderResponse>> GetOrdersAsync();
    Task<OrderResponse> GetOrderAsync(Guid id);
    Task AddRange(CreateOrdersRequest createOrdersRequest, Guid userId);
}
