using AutoMapper;
using RestaurantApp.Business.Dtos.Responses;
using RestaurantApp.DataAccess.Interfaces;

namespace RestaurantApp.Business.Services;
public class ProductService : IProductService
{
    private readonly IProductRepository _productRepository;
    private readonly IMapper _mapper;

    public ProductService(IProductRepository productRepository, IMapper mapper)
    {
        _productRepository = productRepository;
        _mapper = mapper;
    }

    public async Task<ProductResponse> GetProductAsync(Guid id)
    {
        var product = await _productRepository.GetAsync(p => p.Id == id);
        return _mapper.Map<ProductResponse>(product);
    }

    public async Task<IEnumerable<ProductResponse>> GetProductsAsync()
    {
        var products = await _productRepository.GetAllAsync();
        return _mapper.Map<IEnumerable<ProductResponse>>(products);
    }
}
