using TaskManager.Models;

namespace TaskManager.Repositories
{


    public class SmsNotificationService : NotificationService
    {
        public SmsNotificationService() : base("Gestor de tareas") { }

        public override TaskManager NotifyTaskCreatedAsync(TaskItem task)
        {
            //Maybe here mandamos un SMS
            Console.WriteLine($"[SMS] {SenderName} : Nueva tarea '{task.Title}'"); ;
            return Task.CompletedTask;
        }

    }


}