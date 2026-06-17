import ContactForm from "../contact/ContactForm";
import ContactInfo from "../contact/ContactInfo";

export default function Contact() {
  return (
    <section
      className="flex flex-col w-full p-3 gap-8 scroll-mt-24 md:flex-row justify-center"
      id="contact"
    >
      <div className="w-full">
        <ContactForm />
      </div>

      <div className="w-full">
        <ContactInfo />
      </div>
    </section>
  );
}
