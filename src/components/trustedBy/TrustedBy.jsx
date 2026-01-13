import BrandLogoSlider from "./BrandLogoSlider";
import ClientsWork from "../clientsWork/ClientsWork";
import "./TrustedBy.css";

export default function TrustedBy() {
  return (
    <section className="trusted-section">
      <p className="trusted-label">TRUSTED BY GROWING BRANDS</p>

      <BrandLogoSlider />

      
      <ClientsWork />
    </section>
  );
}
