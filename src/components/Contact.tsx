import React, { useState, useEffect } from 'react';
import { Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
        'service_l91kskv', // You'll get this from EmailJS
        'template_eivoze3', // You'll get this from EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Jasmin', // Your name
          to_email: 'msbenioni@gmail.com', // Your email
        },
        'uRQyRbpeQdm3MArUg' // You'll get this from EmailJS
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
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  disabled={status === 'sending'}
                ></textarea>
              </div>
              {status === 'error' && (
                <div className="text-red-500 text-sm">{errorMessage}</div>
              )}
              {status === 'success' && (
                <div className="text-green-500 text-sm">Message sent successfully!</div>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-colors ${
                  status === 'sending'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                {status === 'sending' ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <Mail size={20} />
                <span>msbenioni@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}