using System;
using System.Collections.Generic;

namespace BookingV2.Repositories.Entities;

public partial class Amenity
{
    public int AmenityId { get; set; }

    public string? Description { get; set; }

    public bool? Status { get; set; }

    public virtual ICollection<AmenityCourt> AmenityCourts { get; set; } = new List<AmenityCourt>();
}
