using AutoMapper;
using RestaurantApp.Business.Dtos.Responses;
using RestaurantApp.DataAccess.Interfaces;

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
