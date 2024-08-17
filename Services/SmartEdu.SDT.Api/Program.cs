using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);
// Add CORS services
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200") // Your Angular app's URL
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});
// Add services to the container.
builder.Services.AddControllers();  // Adds services for controllers
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "SmartEdu.SDT.Api", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "SmartEdu.SDT.Api v1");
        c.RoutePrefix = string.Empty; // Set Swagger UI at the app root
    });
}


// Use CORS
app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseRouting();
app.UseAuthorization();

app.MapControllers();  // Map attribute-routed controllers

app.Run();
