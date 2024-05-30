using System;
using System.Collections.Generic;

namespace BookingV2.Repositories.Entities;

public partial class BookingDetail
{
    public int BookingDetailId { get; set; }

    public int? BookingId { get; set; }

    public int? SlotId { get; set; }

    public string? Date { get; set; }

    public string? Status { get; set; }

    public virtual Booking? Booking { get; set; }

    public virtual SlotTime? Slot { get; set; }
}
