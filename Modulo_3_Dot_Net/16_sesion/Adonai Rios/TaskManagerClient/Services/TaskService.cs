using System.Net.Http.Json;
using TaskManagerClient.Helpers;
using TaskManagerClient.Models;

namespace TaskManagerClient.Services;

public class TaskService(HttpClient http) : ITaskReader, ITaskWriter
{
    public async Task<IEnumerable<TaskItem>> GetAllAsync() =>
        await http.GetFromJsonAsync<IEnumerable<TaskItem>>(ApiEndPoints.Tasks)
          ?? Enumerable.Empty<TaskItem>();

    public async Task<TaskItem> AddAsync(TaskItem task)
    {
        var response = await http.POstAsJsonAsync(ApiEndPoints.Tasks, task);
        return response.Content.ReadFromJsonAsync<TaskItem>() ??
            throw new InvalidOperationException("Respuesta vacia");

    }

    public Task UpdateAsync(TaskItem task)
    {
        http.PutAsJsonAsync($"ApiEndPoints.Tasks/{task.id}" ,  task);
    }

    public Task DeleteAsync(Guid id)
    {
        http.DeleteAsync($"ApiEndPoints.Tasks/{id}");
    }
}