import "./LeadForm.css";

export default function LeadForm() {
  const openBooking = () => {
    window.open(
      "https://viralmarketingtrends.zohobookings.in/#/406960000000039054",
      "_blank"
    );
  };

  return (
    <div className="form-card">
      <h3>Book a Free Growth Consultation</h3>
      <p>
        Choose a time slot and speak directly with our marketing expert.
      </p>

      <button onClick={openBooking}>
        Book Free Strategy Call →
      </button>

      <small>No spam. 100% privacy.</small>
    </div>
  );
}
