import "./BookingModal.css";

export default function BookingModal({ isOpen, onClose, form }) {
  if (!isOpen) return null;

  const bookingUrl =
    "https://viralmarketingtrends.zohobookings.in/#/406960000000039054" +
    `?customer_name=${encodeURIComponent(form.name)}` +
    `&customer_email=${encodeURIComponent(form.email)}` +
    `&customer_phone=${encodeURIComponent(form.phone)}`;

  return (
    <div className="booking-overlay">
      <div className="booking-modal">
        <button className="booking-close" onClick={onClose}>
          ✕
        </button>

        <iframe
          src={bookingUrl}
          title="Book Consultation"
          frameBorder="0"
          allow="camera; microphone"
        />
      </div>
    </div>
  );
}
