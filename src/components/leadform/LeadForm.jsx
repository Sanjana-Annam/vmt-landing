import { useState } from "react";
import "./LeadForm.css";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    service: "",
    budget: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name) e.name = "Name is required";
    if (!form.phone || form.phone.length < 10)
      e.phone = "Valid phone number required";
    if (!form.email.includes("@"))
      e.email = "Valid email required";
    if (!form.service) e.service = "Select a service";
    if (!form.budget) e.budget = "Select a budget";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length !== 0) return;

    // ✅ Zoho Booking URL with PREFILLED DATA
    const bookingUrl =
      "https://viralmarketingtrends.zohobookings.in/#/406960000000039054" +
      `?customer_name=${encodeURIComponent(form.name)}` +
      `&customer_email=${encodeURIComponent(form.email)}` +
      `&customer_phone=${encodeURIComponent(form.phone)}` +
      `&Business=${encodeURIComponent(form.business)}` +
      `&Service=${encodeURIComponent(form.service)}` +
      `&Budget=${encodeURIComponent(form.budget)}`;

    // ✅ Open booking (new tab OR same tab – choose one)
    window.open(bookingUrl, "_blank"); // "_self" if you want same tab
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h3>Get a Free Growth Consultation</h3>
      <p>Fill the form once — book your slot instantly.</p>

      <input
        placeholder="Full Name *"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <span>{errors.name}</span>}

      <input
        placeholder="Phone Number *"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      {errors.phone && <span>{errors.phone}</span>}

      <input
        placeholder="Email Address *"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {errors.email && <span>{errors.email}</span>}

      <input
        placeholder="Business Name"
        value={form.business}
        onChange={(e) => setForm({ ...form, business: e.target.value })}
      />

      <select
        value={form.service}
        onChange={(e) => setForm({ ...form, service: e.target.value })}
      >
        <option value="">Select Service *</option>
        <option>Social Media Marketing</option>
        <option>Paid Ads</option>
        <option>SEO</option>
        <option>Branding</option>
        <option>Influencer Marketing</option>
        <option>Website Development</option>
        <option>Others</option>
      </select>
      {errors.service && <span>{errors.service}</span>}

      <select
        value={form.budget}
        onChange={(e) => setForm({ ...form, budget: e.target.value })}
      >
        <option value="">Select Monthly Budget *</option>
        <option>₹20k – ₹50k</option>
        <option>₹50k – ₹1L</option>
        <option>₹1L – ₹3L</option>
        <option>₹3L+</option>
      </select>
      {errors.budget && <span>{errors.budget}</span>}

      <button type="submit">
        Book Free Strategy Call →
      </button>

      <small>No spam. 100% privacy.</small>
    </form>
  );
}
