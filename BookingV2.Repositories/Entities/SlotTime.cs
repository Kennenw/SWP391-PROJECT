using System;
using System.Collections.Generic;

namespace BookingV2.Repositories.Entities;

public partial class SlotTime
{
    public int SlotId { get; set; }

    public string? StartTime { get; set; }

    public string? EndTime { get; set; }

    public double? Price { get; set; }

    public bool? Status { get; set; }

    public virtual ICollection<BookingDetail> BookingDetails { get; set; } = new List<BookingDetail>();
}
