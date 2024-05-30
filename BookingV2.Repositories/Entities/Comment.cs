using System;
using System.Collections.Generic;

namespace BookingV2.Repositories.Entities;

public partial class Comment
{
    public int CommentId { get; set; }

    public string? Title { get; set; }

    public byte[]? Image { get; set; }

    public string? Context { get; set; }

    public int? PostId { get; set; }

    public virtual Post? Post { get; set; }
}
