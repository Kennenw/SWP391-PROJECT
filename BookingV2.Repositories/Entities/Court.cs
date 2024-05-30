using System;
using System.Collections.Generic;

namespace BookingV2.Repositories.Entities;

public partial class Court
{
    public int CourtId { get; set; }

    public int? ComplexeId { get; set; }

    public string? CourtName { get; set; }

    public string? OpenTime { get; set; }

    public string CloseTime { get; set; } = null!;

    public string? Rule { get; set; }

    public bool? Status { get; set; }

    public virtual ICollection<AmenityCourt> AmenityCourts { get; set; } = new List<AmenityCourt>();

    public virtual Complexe? Complexe { get; set; }
}
