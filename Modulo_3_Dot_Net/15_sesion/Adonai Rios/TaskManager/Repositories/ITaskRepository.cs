using TaskManager.Models;

namespace TaskManager.Repositories
{
    public interface ITaskRepository
    {
        Task<IEnumerable<TaskItem>> getAllAsync();
        Task AddAsync(TaskItem taskItem);
    }
}