using System;
using System.Collections.Generic;

namespace BookingV2.Repositories.Entities;

public partial class AmenityCourt
{
    public int AmenityCourtId { get; set; }

    public int? AmenityId { get; set; }

    public int? CourtId { get; set; }

    public virtual Amenity? Amenity { get; set; }

    public virtual Court? Court { get; set; }
}
