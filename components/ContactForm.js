'use client';

import { useState } from 'react';

export default function ContactForm({ isFooter = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '', // Anti-spam field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check honeypot
    if (formData.honeypot) {
      return; // Spam detected
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Replace with actual form submission logic
      // This could be an API route, email service, etc.
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        honeypot: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
    isFooter ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white'
  }`;

  const labelClasses = `block text-sm font-medium mb-2 ${
    isFooter ? 'text-gray-300' : 'text-neutral-text'
  }`;

  if (isFooter) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="footer-name" className={labelClasses}>
            Nom *
          </label>
          <input
            type="text"
            id="footer-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label htmlFor="footer-email" className={labelClasses}>
            Email *
          </label>
          <input
            type="email"
            id="footer-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="votre@email.fr"
          />
        </div>

        <div>
          <label htmlFor="footer-phone" className={labelClasses}>
            Téléphone *
          </label>
          <input
            type="tel"
            id="footer-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="06 12 34 56 78"
          />
        </div>
        
        <div>
          <label htmlFor="footer-message" className={labelClasses}>
            Message *
          </label>
          <textarea
            id="footer-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
            className={inputClasses}
            placeholder="Votre message..."
          />
        </div>

        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex="-1"
          autoComplete="off"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Envoi...' : 'Envoyer'}
        </button>

        {submitStatus === 'success' && (
          <p className="text-green-400 text-sm">Message envoyé avec succès !</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-400 text-sm">Erreur lors de l'envoi. Veuillez réessayer.</p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Nom complet *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClasses}
          placeholder="Votre nom complet"
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClasses}
          placeholder="votre@email.fr"
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClasses}>
          Téléphone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className={inputClasses}
          placeholder="06 12 34 56 78"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={inputClasses}
          placeholder="Décrivez brièvement votre situation et vos besoins..."
        />
      </div>

      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex="-1"
        autoComplete="off"
      />


      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
        </button>
        
        <a href="tel:+33494135380" className="btn-secondary text-center">
          Appeler directement
        </a>
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">
            Votre message a été envoyé avec succès ! Je vous recontacterai dans les plus brefs délais.
          </p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">
            Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou me contacter directement par téléphone.
          </p>
        </div>
      )}
    </form>
  );
}
