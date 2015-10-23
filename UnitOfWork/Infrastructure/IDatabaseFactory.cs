using System;

namespace Domain.DataAccess.Infrastructure
{
    public interface IDatabaseFactory : IDisposable
    {
        OPSDBContext Get();
    }
}
