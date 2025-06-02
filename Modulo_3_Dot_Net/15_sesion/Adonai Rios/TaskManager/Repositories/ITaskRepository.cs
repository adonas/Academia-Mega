using TaskManager.Models;

namespace TaskManager.Repositories
{
    public interface ITaskRepository
    {
        Task<IEnumerable<TaskItem>> getAllAsync();
        Task AddAsync(TaskItem taskItem);
        Task UpdateAsync(TaskItem taskItem);
        Task<TaskItem?> GetAsync(Guid id);
        Task DeleteAsync(Guid id);
    }
}