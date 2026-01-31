import React from 'react';
import { MapPin, Mail, Phone, Linkedin, FileText } from 'lucide-react';

const Contact = ({ data }) => {
  if (!data) return null;

  return (
    <section id="contact">
      <h2 className="text-2xl font-bold mb-6 text-brand-900">{data.title}</h2>
      <p className="text-base text-gray-600 italic mb-6">Let's build something that works.</p>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin size={20} className="text-gray-400 shrink-0" />
            <span className="text-base">{data.location}</span>
          </div>
          {data.emails.map((email, i) => (
            <div key={i} className="flex items-center gap-3">
              <Mail size={20} className="text-gray-400 shrink-0" />
              <a href={`mailto:${email}`} className="text-base text-blue-600 hover:underline">
                {email}
              </a>
            </div>
          ))}
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-gray-400 shrink-0" />
            <a href={`tel:${data.phone.replace(/[^\d+]/g, '')}`} className="text-base text-blue-600 hover:underline">
              {data.phone}
            </a>
          </div>
          {data.linkedin && (
            <div className="flex items-center gap-3">
              <Linkedin size={20} className="text-gray-400 shrink-0" />
              <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-base text-blue-600 hover:underline">
                {data.linkedin}
              </a>
            </div>
          )}
          {data.resumePdf && (
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-gray-400 shrink-0" />
              <a href={`${process.env.PUBLIC_URL}/ByronChigoy_Resume.pdf`} target="_blank" rel="noopener noreferrer" className="text-base text-blue-600 hover:underline">
                Resume (PDF)
              </a>
            </div>
          )}
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl text-gray-700 text-center font-bold italic">Whether you're scoping a new product, untangling a data mess, or wondering what AI can actually do for you—I've built those roads, literally and figuratively. Happy to talk it through.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
