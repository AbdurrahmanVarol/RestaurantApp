using AutoMapper;
using FluentValidation;
using RestaurantApp.Business.Dtos.Requests;
using RestaurantApp.Business.Dtos.Responses;
using RestaurantApp.DataAccess.Interfaces;
using RestaurantApp.Entities.Entities;

namespace RestaurantApp.Business.Services;
public class ProductService : IProductService
{
    private readonly IProductRepository _productRepository;
    private readonly IMapper _mapper;
    private readonly IValidator<Product> _validator;

    public ProductService(IProductRepository productRepository, IMapper mapper, IValidator<Product> validator)
    {
        _productRepository = productRepository;
        _mapper = mapper;
        _validator = validator;
    }

    public async Task<Guid> AddAsync(CreateProductRequest createProductRequest)
    {
        var product = _mapper.Map<Product>(createProductRequest);

        await _validator.ValidateAndThrowAsync(product);

        await _productRepository.AddAsync(product);
        return product.Id;
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

    public async Task<bool> IsExistAsync(Guid productId) => await _productRepository.IsExistAsync(productId);
}
