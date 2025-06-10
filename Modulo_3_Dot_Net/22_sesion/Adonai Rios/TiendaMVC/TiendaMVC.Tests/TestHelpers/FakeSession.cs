using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

public class FakeSession : ISession

{
    private readonly Dictionary<string, byte[]> _store = new();
    public IEnumerable<string> Keys => _store.Keys;
    public bool IsAvailable => true;
    public string Id => "FakeSessionId";
    public void Clear()
        => _store.Clear();

    public Task CommitAsync(CancellationToken cancellationToken = default)
        => Task.CompletedTask;

    public void Remove(string key)
        => _store.Remove(key);

    public void Set(string key, byte[] value)
        => _store[key] = value;
    public bool TryGetValue(string key, out byte[] value)
        => _store.TryGetValue(key, out value);

    public Task LoadAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }
        




}