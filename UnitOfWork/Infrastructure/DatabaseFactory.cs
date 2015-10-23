using System;

namespace Domain.DataAccess.Infrastructure
{
    public class DatabaseFactory : Disposable, IDatabaseFactory
    {
        //private OPSDBContext dataContext;
        //public OPSDBContext Get()
        //{
        //    return dataContext ?? (dataContext = new OPSDBContext());
        //}
        //protected override void DisposeCore()
        //{
        //    if (dataContext != null)
        //        dataContext.Dispose();
        //}
        public OPSDBContext Get()
        {
            throw new NotImplementedException();
        }
    }
}
