using Microsoft.AspNetCore.Mvc;
using TaskManager.Models;
using TaskManager.Repositories;
using TaskManager.Services;

namespace TaskManager.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly ITaskRepository _repo;
        private readonly IEnumerable<INotificacionService> _notifiers;
        public TasksController(ITaskRepository repo, IEnumerable<INotificacionService> notifiers)
        {
            _repo = repo;
            _notifiers = notifiers;
        }

        [HttpGet] //Get /api/tasks
        public async Task<IEnumerable<TaskItem>> GetAll() =>
            await _repo.GetAllAsync;
    }


}
