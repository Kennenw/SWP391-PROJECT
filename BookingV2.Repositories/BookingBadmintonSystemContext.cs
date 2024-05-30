using System;
using System.Collections.Generic;
using BookingV2.Repositories.Entities;
using Microsoft.EntityFrameworkCore;

namespace BookingV2.Repositories;

public partial class BookingBadmintonSystemContext : DbContext
{
    public BookingBadmintonSystemContext()
    {
    }

    public BookingBadmintonSystemContext(DbContextOptions<BookingBadmintonSystemContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Account> Accounts { get; set; }

    public virtual DbSet<Amenity> Amenities { get; set; }

    public virtual DbSet<AmenityCourt> AmenityCourts { get; set; }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<BookingDetail> BookingDetails { get; set; }

    public virtual DbSet<BookingType> BookingTypes { get; set; }

    public virtual DbSet<Comment> Comments { get; set; }

    public virtual DbSet<Complexe> Complexes { get; set; }

    public virtual DbSet<Court> Courts { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<PaymentMenthod> PaymentMenthods { get; set; }

    public virtual DbSet<Post> Posts { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Schedule> Schedules { get; set; }

    public virtual DbSet<SlotTime> SlotTimes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(local);Database=BookingBadmintonSystem;UID=sa;PWD=123456;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>(entity =>
        {
            entity.ToTable("Account");

            entity.Property(e => e.AccountId).HasColumnName("AccountID");
            entity.Property(e => e.AccountName)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsFixedLength();
            entity.Property(e => e.FullName).HasMaxLength(50);
            entity.Property(e => e.Password)
                .HasMaxLength(30)
                .IsFixedLength();
            entity.Property(e => e.Phone)
                .HasMaxLength(12)
                .IsFixedLength();
            entity.Property(e => e.RoleId).HasColumnName("RoleID");

            entity.HasOne(d => d.Role).WithMany(p => p.Accounts)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("FK_Account_Role");
        });

        modelBuilder.Entity<Amenity>(entity =>
        {
            entity.ToTable("Amenity");

            entity.Property(e => e.AmenityId).HasColumnName("AmenityID");
            entity.Property(e => e.Description).HasMaxLength(50);
        });

        modelBuilder.Entity<AmenityCourt>(entity =>
        {
            entity.ToTable("AmenityCourt");

            entity.Property(e => e.AmenityCourtId).HasColumnName("AmenityCourtID");
            entity.Property(e => e.AmenityId).HasColumnName("AmenityID");
            entity.Property(e => e.CourtId).HasColumnName("CourtID");

            entity.HasOne(d => d.Amenity).WithMany(p => p.AmenityCourts)
                .HasForeignKey(d => d.AmenityId)
                .HasConstraintName("FK_AmenityCourt_Amenity");

            entity.HasOne(d => d.Court).WithMany(p => p.AmenityCourts)
                .HasForeignKey(d => d.CourtId)
                .HasConstraintName("FK_AmenityCourt_Court");
        });

        modelBuilder.Entity<Booking>(entity =>
        {
            entity.ToTable("Booking");

            entity.Property(e => e.BookingId).HasColumnName("BookingID");
            entity.Property(e => e.BookingTypeId).HasColumnName("BookingTypeID");
            entity.Property(e => e.CourtTimeDetailId).HasColumnName("CourtTimeDetailID");
            entity.Property(e => e.CreateAt)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.CustomerId).HasColumnName("CustomerID");
            entity.Property(e => e.Note).HasMaxLength(250);
            entity.Property(e => e.UpdateAt)
                .HasMaxLength(10)
                .IsFixedLength();

            entity.HasOne(d => d.BookingType).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.BookingTypeId)
                .HasConstraintName("FK_Booking_BookingType");

            entity.HasOne(d => d.Customer).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.CustomerId)
                .HasConstraintName("FK_Booking_Account");
        });

        modelBuilder.Entity<BookingDetail>(entity =>
        {
            entity.ToTable("BookingDetail");

            entity.Property(e => e.BookingDetailId).HasColumnName("BookingDetailID");
            entity.Property(e => e.BookingId).HasColumnName("BookingID");
            entity.Property(e => e.Date)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.SlotId).HasColumnName("SlotID");
            entity.Property(e => e.Status)
                .HasMaxLength(10)
                .IsFixedLength();

            entity.HasOne(d => d.Booking).WithMany(p => p.BookingDetails)
                .HasForeignKey(d => d.BookingId)
                .HasConstraintName("FK_BookingDetail_Booking");

            entity.HasOne(d => d.Slot).WithMany(p => p.BookingDetails)
                .HasForeignKey(d => d.SlotId)
                .HasConstraintName("FK_BookingDetail_SlotTime");
        });

        modelBuilder.Entity<BookingType>(entity =>
        {
            entity.ToTable("BookingType");

            entity.Property(e => e.BookingTypeId).HasColumnName("BookingTypeID");
            entity.Property(e => e.Description).HasMaxLength(100);
        });

        modelBuilder.Entity<Comment>(entity =>
        {
            entity.ToTable("Comment");

            entity.Property(e => e.CommentId).HasColumnName("CommentID");
            entity.Property(e => e.Context).HasMaxLength(450);
            entity.Property(e => e.Image).HasColumnType("image");
            entity.Property(e => e.PostId).HasColumnName("PostID");
            entity.Property(e => e.Title).HasMaxLength(200);

            entity.HasOne(d => d.Post).WithMany(p => p.Comments)
                .HasForeignKey(d => d.PostId)
                .HasConstraintName("FK_Comment_Post");
        });

        modelBuilder.Entity<Complexe>(entity =>
        {
            entity.ToTable("Complexe");

            entity.Property(e => e.ComplexeId).HasColumnName("ComplexeID");
            entity.Property(e => e.Location).HasMaxLength(50);
            entity.Property(e => e.ManagerId).HasColumnName("ManagerID");

            entity.HasOne(d => d.Manager).WithMany(p => p.Complexes)
                .HasForeignKey(d => d.ManagerId)
                .HasConstraintName("FK_Complexe_Account");
        });

        modelBuilder.Entity<Court>(entity =>
        {
            entity.ToTable("Court");

            entity.Property(e => e.CourtId).HasColumnName("CourtID");
            entity.Property(e => e.CloseTime)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.ComplexeId).HasColumnName("ComplexeID");
            entity.Property(e => e.CourtName).HasMaxLength(50);
            entity.Property(e => e.OpenTime)
                .HasMaxLength(10)
                .IsFixedLength();

            entity.HasOne(d => d.Complexe).WithMany(p => p.Courts)
                .HasForeignKey(d => d.ComplexeId)
                .HasConstraintName("FK_Court_Complexe");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.ToTable("Payment");

            entity.Property(e => e.PaymentId).HasColumnName("PaymentID");
            entity.Property(e => e.BookingId).HasColumnName("BookingID");
            entity.Property(e => e.PaymentMethodId).HasColumnName("PaymentMethodID");

            entity.HasOne(d => d.Booking).WithMany(p => p.Payments)
                .HasForeignKey(d => d.BookingId)
                .HasConstraintName("FK_Payment_Booking");

            entity.HasOne(d => d.PaymentMethod).WithMany(p => p.Payments)
                .HasForeignKey(d => d.PaymentMethodId)
                .HasConstraintName("FK_Payment_PaymentMenthod");
        });

        modelBuilder.Entity<PaymentMenthod>(entity =>
        {
            entity.ToTable("PaymentMenthod");

            entity.Property(e => e.PaymentMenthodId).HasColumnName("PaymentMenthodID");
            entity.Property(e => e.Description).HasMaxLength(30);
        });

        modelBuilder.Entity<Post>(entity =>
        {
            entity.ToTable("Post");

            entity.Property(e => e.PostId).HasColumnName("PostID");
            entity.Property(e => e.AccountId).HasColumnName("AccountID");
            entity.Property(e => e.Context).HasMaxLength(450);
            entity.Property(e => e.Image).HasColumnType("image");
            entity.Property(e => e.Vote)
                .HasMaxLength(10)
                .IsFixedLength();

            entity.HasOne(d => d.Account).WithMany(p => p.Posts)
                .HasForeignKey(d => d.AccountId)
                .HasConstraintName("FK_Post_Account");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.ToTable("Role");

            entity.Property(e => e.RoleId).HasColumnName("RoleID");
            entity.Property(e => e.RoleName)
                .HasMaxLength(5)
                .IsFixedLength();
        });

        modelBuilder.Entity<Schedule>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Schedule");

            entity.Property(e => e.CourtId).HasColumnName("CourtID");
            entity.Property(e => e.ScheduleId).HasColumnName("ScheduleID");
            entity.Property(e => e.SlotId).HasColumnName("SlotID");

            entity.HasOne(d => d.Court).WithMany()
                .HasForeignKey(d => d.CourtId)
                .HasConstraintName("FK_Schedule_Court");

            entity.HasOne(d => d.Slot).WithMany()
                .HasForeignKey(d => d.SlotId)
                .HasConstraintName("FK_Schedule_SlotTime");
        });

        modelBuilder.Entity<SlotTime>(entity =>
        {
            entity.HasKey(e => e.SlotId);

            entity.ToTable("SlotTime");

            entity.Property(e => e.SlotId).HasColumnName("SlotID");
            entity.Property(e => e.EndTime)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.StartTime)
                .HasMaxLength(10)
                .IsFixedLength();
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
