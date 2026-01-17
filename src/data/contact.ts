// @data/contact.ts
import { Mail, Phone, Headphones, MessageSquare, Newspaper } from 'lucide-react';

export const CONTACT_INFO = {
  title: "Contact Us",
  description: "Email, call, or complete the form to learn how Snappy can solve your messaging problem.",
  email: "info@snappy.io",
  phone: "321-221-231",
  supportLink: "#",
  
  // These are the small columns at the bottom
  highlights: [
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Our support team is available around the clock to address any concerns or queries you may have."
    },
    {
      icon: MessageSquare,
      title: "Feedback",
      description: "We value your feedback and are continuously working to improve Snappy. Your input is crucial."
    },
    {
      icon: Newspaper,
      title: "Media",
      description: "For media-related questions, please contact us at media@snappyapp.com."
    }
  ]
};