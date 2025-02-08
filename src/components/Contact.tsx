import React, { useState, useEffect } from 'react';
import { Mail, Send, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

export default function Contact() {
  useEffect(() => {
    emailjs.init('uRQyRbpeQdm3MArUg');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.send(
        'service_l91kskv',
        'template_eivoze3',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Jasmin',
          to_email: 'msbenioni@gmail.com',
        },
        'uRQyRbpeQdm3MArUg'
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          <div className="flex items-center justify-center gap-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Contact Me
            </span>
            <Mail className="text-purple-400" size={48} strokeWidth={1.5} />
          </div>
        </h2>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="contact-card bg-gray-800 rounded-xl p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="form-field">
                <label htmlFor="name" className="form-label block text-lg font-medium text-gray-300 mb-3">
                  Name
                </label>
                <div className="form-input">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-lg bg-gray-700/50 border border-gray-600 text-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-label block text-lg font-medium text-gray-300 mb-3">
                  Email
                </label>
                <div className="form-input">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-lg bg-gray-700/50 border border-gray-600 text-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-label block text-lg font-medium text-gray-300 mb-3">
                  Message
                </label>
                <div className="form-input">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-6 py-4 rounded-lg bg-gray-700/50 border border-gray-600 text-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    required
                    disabled={status === 'sending'}
                  ></textarea>
                </div>
              </div>

              {status === 'error' && (
                <div className="text-red-500 text-lg font-medium">{errorMessage}</div>
              )}
              
              {status === 'success' && (
                <div className="success-message text-green-500 text-lg font-medium">
                  Message sent successfully!
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`submit-button w-full rounded-lg text-xl font-medium transition-all duration-300 ${
                  status === 'sending'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'hover:shadow-lg hover:shadow-purple-500/20'
                }`}
              >
                <div className="button-content flex items-center justify-center px-8 py-4 space-x-3">
                  {status === 'sending' ? (
                    <>
                      <Loader className="loading-spinner h-6 w-6" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-6 w-6" />
                    </>
                  )}
                </div>
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex items-center justify-center space-x-3">
                <Mail size={28} className="text-purple-400 floating-email" />
                <span className="text-xl text-gray-300">msbenioni@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Background decorations */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}