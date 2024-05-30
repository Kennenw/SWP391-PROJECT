using BookingV2.Repositories.Entities;
using BookingV2.Repositories.GenericServices;
using BookingV2.Repositories.Repo;
using BookingV2.Repositories.Rsp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class RoleServices : GenericServices<RoleRepo, Role>
    {
        private RoleRepo _repo;
        public RoleServices() 
        {
            _repo = new RoleRepo();
        }
        public override SingleRsp Read(int id)
        {
            var res = new SingleRsp();
            res.Data = _rep.Read(id);
            return res;
        }
        public MultipleRsp ReadAll()
        {
            var res = new MultipleRsp();
            var roles = _repo.ReadAll();
            res.SetData("roles", roles);
            return res;
        }
    }
}
