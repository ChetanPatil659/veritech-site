// import { useState } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
// import { Button } from "./button";
// import { Input } from "./input";
// import { Textarea } from "./textarea";
// import { motion } from "framer-motion";

// const ContactUsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       onClose();
//     }, 2000); // Simulate API call
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="max-w-md bg-white p-6 rounded-2xl shadow-xl">
//         <DialogHeader>
//           <DialogTitle className="text-xl font-semibold text-gray-800">Contact Us</DialogTitle>
//         </DialogHeader>
//         <motion.form 
//           initial={{ opacity: 0, y: 10 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.3 }}
//           onSubmit={handleSubmit} 
//           className="space-y-4"
//         >
//           <Input type="text" placeholder="Your Name" required className="border rounded-lg px-4 py-2 w-full" />
//           <Input type="email" placeholder="Your Email" required className="border rounded-lg px-4 py-2 w-full" />
//           <Textarea placeholder="Your Message" required className="border rounded-lg px-4 py-2 w-full h-24" />
//           <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg" disabled={loading}>
//             {loading ? "Sending..." : "Send Message"}
//           </Button>
//         </motion.form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ContactUsModal;


import { useState, FormEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { motion } from "framer-motion";

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUsModal: React.FC<ContactUsModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white p-6 rounded-2xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">
            Contact Us
          </DialogTitle>
        </DialogHeader>
        <motion.form 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit} 
          className="space-y-4"
        >
          <Input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name" 
            required 
            className="border rounded-lg px-4 py-2 w-full" 
          />
          <Input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email" 
            required 
            className="border rounded-lg px-4 py-2 w-full" 
          />
          <Textarea 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message" 
            required 
            className="border rounded-lg px-4 py-2 w-full h-24" 
          />
          <Button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-lg" 
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUsModal;
