using BookingV2.Repositories.Entities;
using BookingV2.Repositories.Generic;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookingV2.Repositories.Repo
{
    public class RoleRepo : GenericRepositories<BookingBadmintonSystemContext, Role>
    {
        BookingBadmintonSystemContext context;
        public RoleRepo() { }

        public override Role Read(int id)
        {
            var res = All.FirstOrDefault(r => r.RoleId == id);
            return res;
        }
        public override List<Role> ReadAll()
        {
            return context.Roles.ToList();
        }

    }
}
