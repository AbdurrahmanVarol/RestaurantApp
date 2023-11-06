using AutoMapper;
using FluentValidation;
using RestaurantApp.Business.Dtos.Requests;
using RestaurantApp.Business.Dtos.Responses;
using RestaurantApp.DataAccess.Interfaces;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.Business.Services;
public class OrderService : IOrderService
{
    private readonly IOrderRepository _orderRepository;
    private readonly IMapper _mapper;
    private readonly IValidator<Order> _validator;
    private readonly IDatabaseTransaction _databaseTransaction;

    public OrderService(IOrderRepository orderRepository, IMapper mapper, IValidator<Order> validator, IDatabaseTransaction databaseTransaction)
    {
        _orderRepository = orderRepository;
        _mapper = mapper;
        _validator = validator;
        _databaseTransaction = databaseTransaction;
    }

    public async Task AddRange(CreateOrdersRequest createOrdersRequest, Guid userId)
    {
        using var trancastion = await _databaseTransaction.BeginTransactionAsync();
        try
        {
            foreach (var request in createOrdersRequest.Requests)
            {
                var order = new Order
                {
                    ProductId = request.ProductId,
                    UserId = userId,
                    CreatedAt = DateTime.Now,
                    Quantity = request.Quantity,
                };
                await _validator.ValidateAndThrowAsync(order);
                await _orderRepository.AddAsync(order);
            }
            trancastion.Commit();
        }
        catch (Exception)
        {
            trancastion.Rollback();
            throw;
        }
    }

    public async Task<OrderResponse> GetOrderAsync(Guid id)
    {
        var order = await _orderRepository.GetAsync(p => p.Id == id);
        return _mapper.Map<OrderResponse>(order);
    }

    public async Task<IEnumerable<OrderResponse>> GetOrdersByUserIdAsync(Guid userId)
    {
        var orders = (await _orderRepository.GetAllAsync(p => p.UserId == userId)).OrderByDescending(p => p.CreatedAt);
        return _mapper.Map<IEnumerable<OrderResponse>>(orders);
    }

    public async Task<IEnumerable<OrderResponse>> GetOrdersByDateAsync(OrdersByDateRequest request)
    {

        var orders = (await _orderRepository.GetAllAsync(p => p.CreatedAt >= request.StartDate && p.CreatedAt <= request.EndDate.AddHours(23.59) && p.UserId == request.UserId)).OrderByDescending(p => p.CreatedAt);
        return _mapper.Map<IEnumerable<OrderResponse>>(orders);
    }
}
