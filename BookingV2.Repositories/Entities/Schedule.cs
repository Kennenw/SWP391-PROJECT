using System;
using System.Collections.Generic;

namespace BookingV2.Repositories.Entities;

public partial class Schedule
{
    public int? ScheduleId { get; set; }

    public int? CourtId { get; set; }

    public int? SlotId { get; set; }

    public virtual Court? Court { get; set; }

    public virtual SlotTime? Slot { get; set; }
}
