using RestaurantApp.Business;
using RestaurantApp.DataAccess.Repositories.EntityFramework.Contexts;
using RestaurantApp.DataAccess.Repositories.EntityFramework.Seeding;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddBusinessServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

using var scope = app.Services.GetService<IServiceScopeFactory>()?.CreateScope();
var services = scope.ServiceProvider;
var context = services.GetRequiredService<RestaurantAppContext>();
context.Database.EnsureCreated();
EfDbSeeding.SeedDatabase(context);

app.Run();
