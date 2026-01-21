import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Components/Button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "marufahamedfardin20@gmail.com",
    href: "mailto:marufahamedfardin20@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1939-666135",
    href: "tel:+8801939666135",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mirpur, Dhaka, Bangladesh",
    href: "https://www.google.com/maps/search/?api=1&query=Mirpur+Dhaka+Bangladesh",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        type: "error",
        message: error?.message || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      {/* background blur */}
      <div className="absolute inset-0">
        <div className="absolute top-12 left-6 sm:top-1/4 sm:left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-6 sm:bottom-1/4 sm:right-1/4 w-56 h-56 sm:w-64 sm:h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-secondary-foreground">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-secondary-foreground leading-tight">
            Let&apos;s build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </div>

        {/* content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* form */}
          <div className="glass p-6 sm:p-8 rounded-3xl border border-primary/30">
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-surface rounded-xl border border-border outline-none
                             focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:border-primary/40"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-surface rounded-xl border border-border outline-none
                             focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:border-primary/40"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  autoComplete="off"
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-surface rounded-xl border border-border outline-none resize-none
                             focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:border-primary/40"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start sm:items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 mt-0.5 sm:mt-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mt-0.5 sm:mt-0" />
                  )}
                  <p className="text-sm leading-relaxed">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* right column */}
          <div className="space-y-5 sm:space-y-6">
            {/* contact info */}
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass p-5 sm:p-6 rounded-3xl border border-primary/20 flex items-center gap-4
                             hover:border-primary/40 transition
                             active:scale-[0.99]"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-secondary-foreground break-words">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* availability */}
            <div className="glass p-5 sm:p-6 rounded-3xl border border-primary/20">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500/40 animate-ping" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
                <h3 className="text-sm font-semibold text-secondary-foreground">
                  Currently Available
                </h3>
              </div>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                I&apos;m currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let&apos;s talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
