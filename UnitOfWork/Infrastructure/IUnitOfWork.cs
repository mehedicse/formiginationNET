namespace Domain.DataAccess.Infrastructure
{
    public interface IUnitOfWork
    {
        void Commit();
    }
}
