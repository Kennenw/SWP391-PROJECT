using System;
using System.Collections.Generic;

namespace BookingV2.Repositories.Entities;

public partial class Payment
{
    public int PaymentId { get; set; }

    public int? BookingId { get; set; }

    public int? PaymentMethodId { get; set; }

    public bool? Status { get; set; }

    public double? Amount { get; set; }

    public virtual Booking? Booking { get; set; }

    public virtual PaymentMenthod? PaymentMethod { get; set; }
}
