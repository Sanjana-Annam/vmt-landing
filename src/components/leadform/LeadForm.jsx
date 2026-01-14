import { useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

    setLoading(true);

    const templateParams = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      business: form.business,
      service: form.service,
      budget: form.budget
    };

    Promise.all([
      // ADMIN EMAIL
      emailjs.send(
        "service_hli8hwq",
        "template_g77zik4",
        templateParams,
        "eoZBBNGfkfAbMYQ4F"
      ),

      // CLIENT AUTO-REPLY
      emailjs.send(
        "service_hli8hwq",
        "template_22btows",
        templateParams,
        "eoZBBNGfkfAbMYQ4F"
      )
    ])
      .then(() => {
        setSuccess(true);
        setForm({
          name: "",
          phone: "",
          email: "",
          business: "",
          service: "",
          budget: ""
        });

        // OPTIONAL: redirect after 2s
        setTimeout(() => {
          window.open(
            "https://calendly.com/sanjanaannam8795/30min",
            "_blank"
          );
        }, 2000);

        setLoading(false);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h3>Get a Free Growth Consultation</h3>
      <p>We’ll get back within 24 hours.</p>

      {success && (
        <div className="form-success">
          ✅ Thank you! Please check your email to book a meeting.
        </div>
      )}

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

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Request Free Consultation"}
      </button>

      <small>No spam. 100% privacy.</small>
    </form>
  );
}
