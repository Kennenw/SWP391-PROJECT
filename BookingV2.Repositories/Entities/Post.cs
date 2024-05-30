using System;
using System.Collections.Generic;

namespace BookingV2.Repositories.Entities;

public partial class Post
{
    public int PostId { get; set; }

    public int? AccountId { get; set; }

    public byte[]? Image { get; set; }

    public string? Context { get; set; }

    public string? Vote { get; set; }

    public virtual Account? Account { get; set; }

    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();
}
