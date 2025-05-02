import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, CheckCircle } from "lucide-react";

export const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      setIsLoading(false);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    // Simulate sending the form
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      toast.success("Message sent successfully! I'll get back to you soon.");
      
      // Reset the form after success
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success state after showing it for a bit
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="fade-in max-w-4xl mx-auto my-20 px-6 pb-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-white bg-gradient-to-r from-white/70 via-white to-white/70 bg-clip-text">
        Get In Touch
      </h2>
      <div className="contact-form-wrapper glass bg-opacity-10 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all shadow-lg">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <CheckCircle className="text-green-500 w-20 h-20 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
            <p className="text-white/70">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="form-group">
                <label htmlFor="name" className="text-white/90 text-lg mb-2 block font-medium">Name</label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-white/5 border-white/10 text-white text-lg h-14 rounded-lg focus:border-white/30 focus:bg-white/10 transition-all"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="text-white/90 text-lg mb-2 block font-medium">Email</label>
                <Input
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-white/5 border-white/10 text-white text-lg h-14 rounded-lg focus:border-white/30 focus:bg-white/10 transition-all"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="text-white/90 text-lg mb-2 block font-medium">Subject</label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                placeholder="Subject"
                required
                className="bg-white/5 border-white/10 text-white text-lg h-14 rounded-lg focus:border-white/30 focus:bg-white/10 transition-all"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="text-white/90 text-lg mb-2 block font-medium">Message</label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="min-h-[180px] bg-white/5 border-white/10 text-white text-lg rounded-lg focus:border-white/30 focus:bg-white/10 transition-all resize-none p-4"
              />
            </div>
            
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="group relative px-12 py-4 bg-gradient-to-r from-white/90 via-white to-white/90 text-black text-lg rounded-xl font-semibold hover:from-white hover:via-white/95 hover:to-white hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-70 disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin inline-block mr-2" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="mt-8 text-center">
        <a 
          href="https://github.com/sakshit2004" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/70 text-lg hover:text-yellow-300 transition-colors"
        >
          Made with ❤️ by Sakshit Sharma
        </a>
      </div>
    </section>
  );
};
