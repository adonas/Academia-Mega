using TaskManagerClient.Services;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using TaskManagerClient;

var builder = WebAssemblyHostBuilder.CreateDefault(args);


// var AllowedOrigin = "BlazorClient";
// builder.Services.AddCors(options =>
// {
//     options.AddPolicy(AllowedOrigin, policy =>
//     {
//         policy.WithOrigin("http://localhost:5162")
//         .AllowAnyHeader()
//         .AllowAnyMethod();
//         //.AllowCredentials(); Sólo si usamos una cookie de sesión
//     }
//     );
// }
// );


builder.RootComponents.Add<App>("#app");

builder.Services.AddSingleton(sp =>
{
    var http = new HttpClient();
    return http;
});

builder.Services.AddScoped<ITaskReader, TaskService>();
builder.Services.AddScoped<ITaskWriter, TaskService>();

await builder.Build().RunAsync();