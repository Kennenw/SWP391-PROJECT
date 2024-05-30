using System;
using System.Collections.Generic;

namespace BookingV2.Repositories.Entities;

public partial class BookingType
{
    public int BookingTypeId { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}
