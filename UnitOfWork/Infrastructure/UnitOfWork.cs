


namespace Domain.DataAccess.Infrastructure
{
    public class UnitOfWork: IUnitOfWork
    {
        private readonly IDatabaseFactory databaseFactory;
        private OPSDBContext dataContext = new OPSDBContext();

        public UnitOfWork(IDatabaseFactory databaseFactory)
        {
            this.databaseFactory = databaseFactory;
        }

        
        protected OPSDBContext DataContext
        {
            get { return dataContext ?? (dataContext = databaseFactory.Get()); }
        }

        public void Commit()
        {
            //dataContext.Commit();
        }


       



    }
}
