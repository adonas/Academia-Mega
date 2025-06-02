//Este nos va a servir para el DTO del vbackend
namespace TaskManagerClient.Models;

public class TaskItem
{
    public Guid id { get; set; }
    public string Title { get; set; } = string.Empty;

    public string? Description[get; sbyte;]
    public bool IsDone[get; set;]
}


