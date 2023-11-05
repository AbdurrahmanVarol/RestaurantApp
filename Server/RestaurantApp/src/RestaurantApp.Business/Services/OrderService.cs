using AutoMapper;
using RestaurantApp.Business.Dtos.Requests;
using RestaurantApp.Business.Dtos.Responses;
using RestaurantApp.DataAccess.Interfaces;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.Business.Services;
public class OrderService : IOrderService
{
    private readonly IOrderRepository _orderRepository;
    private readonly IMapper _mapper;

    public OrderService(IOrderRepository orderRepository, IMapper mapper)
    {
        _orderRepository = orderRepository;
        _mapper = mapper;
    }

    public async Task AddRange(CreateOrdersRequest createOrdersRequest, Guid userId)
    {
        var orders = createOrdersRequest.Requests.Select(p => new Order
        {
            ProductId = p.ProductId,
            UserId = userId,
            CreatedAt = DateTime.Now,
            Quantity = p.Quantity,
        });
        await _orderRepository.AddRangeAsync(orders);
    }

    public async Task<OrderResponse> GetOrderAsync(Guid id)
    {
        var orders = await _orderRepository.GetAsync(p => p.Id == id);
        return _mapper.Map<OrderResponse>(orders);
    }

    public async Task<IEnumerable<OrderResponse>> GetOrdersAsync()
    {
        var order = await _orderRepository.GetAllAsync();
        return _mapper.Map<IEnumerable<OrderResponse>>(order);
    }
}
