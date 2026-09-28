import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, MessageSquare, Phone, Calendar, MapPin, User, FileText } from 'lucide-react';
import { BUSINESS_CONFIG, SERVICES } from '../data/config';

interface EnquirySectionProps {
  initialService?: string;
  initialDecor?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  initialService,
  initialDecor,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    functionType: 'Marriage / Wedding',
    functionDate: '',
    functionLocation: '',
    selectedServices: [] as string[],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastSubmissionSummary, setLastSubmissionSummary] = useState('');

  // Update selected services or message if props change
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: prev.selectedServices.includes(initialService)
          ? prev.selectedServices
          : [...prev.selectedServices, initialService],
      }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialDecor) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message
          ? `${prev.message}\nInterested in: ${initialDecor}`
          : `Interested in: ${initialDecor}`,
      }));
    }
  }, [initialDecor]);

  const toggleService = (serviceTitle: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceTitle);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== serviceTitle)
          : [...prev.selectedServices, serviceTitle],
      };
    });
  };

  const handleSelectAllServices = () => {
    if (formData.selectedServices.length === SERVICES.length) {
      setFormData((prev) => ({ ...prev, selectedServices: [] }));
    } else {
      setFormData((prev) => ({
        ...prev,
        selectedServices: SERVICES.map((s) => s.title),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your name and phone number.');
      return;
    }

    const servicesText = formData.selectedServices.length > 0 
      ? formData.selectedServices.join(', ') 
      : 'All Event Decor Services';

    const summary = `Name: ${formData.name}\nPhone: ${formData.phone}\nFunction: ${formData.functionType}\nDate: ${formData.functionDate || 'To be decided'}\nLocation: ${formData.functionLocation || 'Not specified'}\nServices: ${servicesText}\nMessage: ${formData.message || 'None'}`;

    setLastSubmissionSummary(summary);
    setSubmitted(true);
  };

  // WhatsApp formatted direct link
  const generateWhatsAppMessage = () => {
    const servicesText = formData.selectedServices.length > 0 
      ? formData.selectedServices.join(', ') 
      : 'General Inquiry';

    const text = `*New Event Enquiry for RSR Events*\n\n` +
      `*Name:* ${formData.name || '-'}\n` +
      `*Phone:* ${formData.phone || '-'}\n` +
      `*Function Type:* ${formData.functionType}\n` +
      `*Function Date:* ${formData.functionDate || 'Flexible'}\n` +
      `*Location / Venue:* ${formData.functionLocation || '-'}\n` +
      `*Services Required:* ${servicesText}\n` +
      `*Additional Details:* ${formData.message || 'Please contact me with quotation'}`;

    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="enquiry" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-800 mb-2">
            Plan Your Celebration
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
            Event Enquiry Form
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-5 rounded-full" />
          <p className="text-base text-stone-600 leading-relaxed text-balance">
            Tell us about your upcoming function. We will check our setup availability and provide a free customized quotation.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-10">
          
          {submitted ? (
            <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-stone-900">
                Thank You, {formData.name}!
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Your enquiry has been received. Our team will contact you on <strong className="text-stone-900">{formData.phone}</strong> shortly to discuss the decoration setup.
              </p>

              {/* Direct WhatsApp Forward Action */}
              <div className="pt-4 max-w-md mx-auto space-y-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly on WhatsApp for Instant Reply</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      functionType: 'Marriage / Wedding',
                      functionDate: '',
                      functionLocation: '',
                      selectedServices: [],
                      message: '',
                    });
                  }}
                  className="text-xs text-stone-500 hover:text-amber-800 underline"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Your Name <span className="text-amber-700">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Phone Number <span className="text-amber-700">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Function Type */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Function Type
                  </label>
                  <select
                    value={formData.functionType}
                    onChange={(e) => setFormData({ ...formData, functionType: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white transition-colors"
                  >
                    <option value="Marriage / Wedding">Marriage / Wedding</option>
                    <option value="Wedding Reception">Wedding Reception</option>
                    <option value="Engagement Ceremony">Engagement Ceremony</option>
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Baby Shower / Cradle Ceremony">Baby Shower / Cradle Ceremony</option>
                    <option value="Half-Saree / Dhoti Ceremony">Half-Saree / Dhoti Ceremony</option>
                    <option value="Housewarming / Gruhapravesam">Housewarming / Gruhapravesam</option>
                    <option value="Community / Festival Function">Community / Festival Function</option>
                    <option value="Other Celebration">Other Celebration</option>
                  </select>
                </div>

                {/* Function Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Function Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.functionDate}
                      onChange={(e) => setFormData({ ...formData, functionDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Function Location */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Function Location / Venue
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Hall name, village, or town"
                      value={formData.functionLocation}
                      onChange={(e) => setFormData({ ...formData, functionLocation: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Services Required (Select Multiple) */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                    Services Required (Click all that apply)
                  </label>
                  <button
                    type="button"
                    onClick={handleSelectAllServices}
                    className="text-xs text-amber-800 hover:text-amber-900 font-medium"
                  >
                    {formData.selectedServices.length === SERVICES.length
                      ? 'Deselect All'
                      : 'Select All Services'}
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                  {SERVICES.map((s) => {
                    const isChecked = formData.selectedServices.includes(s.title);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggleService(s.title)}
                        className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all flex items-center gap-2 select-none cursor-pointer ${
                          isChecked
                            ? 'bg-amber-50 border-amber-500 text-amber-950 font-semibold shadow-xs ring-1 ring-amber-500/20'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100 hover:border-stone-300'
                        }`}
                      >
                        <span className="text-base">{s.icon}</span>
                        <span className="truncate">{s.title.replace(' Decorations', '')}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  Additional Details or Theme Requirements
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                  <textarea
                    rows={3}
                    placeholder="Mention guest count, specific colors, chair quantities, or special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white transition-colors resize-y"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-amber-900 hover:bg-amber-800 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>
              </div>

              <p className="text-xs text-stone-400 text-center pt-2">
                We never share your contact details. Our team responds within a few hours.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
