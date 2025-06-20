namespace Servicio.Sensor;

public record SensorSnapshot(
    DateTime TimeStamp,
    float? CpuTemp,
    float? GpuTemp,
    float? CpuLoad,
    float? GpuLoad,
    int MemoryUsedMb,
    int FanRpm
);
