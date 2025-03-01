import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { motion } from "framer-motion";

const ContactUsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 2000); // Simulate API call
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white p-6 rounded-2xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">Contact Us</DialogTitle>
        </DialogHeader>
        <motion.form 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit} 
          className="space-y-4"
        >
          <Input type="text" placeholder="Your Name" required className="border rounded-lg px-4 py-2 w-full" />
          <Input type="email" placeholder="Your Email" required className="border rounded-lg px-4 py-2 w-full" />
          <Textarea placeholder="Your Message" required className="border rounded-lg px-4 py-2 w-full h-24" />
          <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUsModal;
