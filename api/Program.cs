using api.Clients;
using api.Services;

var builder = WebApplication.CreateBuilder(args);

var MyFrontendOrigins = "_myFrontendOrigins";

// Add services to the container.
builder.Services.AddScoped<IHeroesService, HeroesService>();
builder.Services.AddScoped<IItemsService, ItemsService>();

builder.Services.AddHttpClient<IDeadlockApiClient, DeadlockApiClient>(
    httpClient =>
    {
        httpClient.BaseAddress = new Uri("https://api.deadlock-api.com/");
    });

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyFrontendOrigins,
    policy =>
    {
        policy.WithOrigins("http://localhost:5173")
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
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

app.UseCors(MyFrontendOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
