using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add Ocelot to the services
builder.Configuration.AddJsonFile("ocelot.json"); // Make sure you have ocelot.json in the root of your project
builder.Services.AddOcelot();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Configure Ocelot middleware
await app.UseOcelot(); // This line adds Ocelot to your middleware pipeline



app.Run();
