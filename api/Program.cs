using api.Clients;
using api.Services;
using api.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<IHeroesService, HeroesService>();

builder.Services.AddHttpClient<IDeadlockApiClient, DeadlockApiClient>(
    httpClient =>
    {
        httpClient.BaseAddress = new Uri("https://api.deadlock-api.com/");
    });

builder.Services.AddControllers();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
