// src/components/Contact.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = t('contact.errors.name');
        if (!formData.email) {
            newErrors.email = t('contact.errors.email');
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('contact.errors.emailInvalid');
        }
        if (!formData.subject) newErrors.subject = t('contact.errors.subject');
        if (!formData.message) newErrors.message = t('contact.errors.message');
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            setErrors({});
            fetch('http://localhost:5002/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then((response) => {
                if (response.ok) {
                    setSubmitted(true);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                } else {
                    throw new Error('Error en el envío');
                }
            })
            .catch((error) => {
                console.error(error);
                setSubmitted(false);
            });
        } else {
            setErrors(formErrors);
            setSubmitted(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-white px-6">
            <div className="container mx-auto max-w-lg">
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>
                    {t('contact.title')}
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    {t('contact.description')} <a
                        href="mailto:hectormartilb@gmail.com"
                        className="text-indigo-500 underline relative group hover:text-indigo-700"
                    >
                        email
                        <span className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {t('contact.directEmail')}
                        </span>
                    </a>
                </p>
                {submitted && (
                    <p className="text-green-500 text-center mb-4">{t('contact.successMessage')}</p>
                )}
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">{t('contact.form.name')}:</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border shadow-md rounded-lg"
                            placeholder={t('contact.form.namePlaceholder')}
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">{t('contact.form.email')}:</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border shadow-md rounded-lg"
                            placeholder={t('contact.form.emailPlaceholder')}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">{t('contact.form.subject')}:</label>
                        <select
                            id="subject"
                            className="w-full px-3 py-2 border shadow-md rounded-lg bg-white"
                            value={formData.subject}
                            onChange={handleChange}
                        >
                            <option value="" disabled>{t('contact.form.subjectPlaceholder')}</option>
                            <option value="Project Collaboration">{t('contact.form.options.project')}</option>
                            <option value="Freelance Work">{t('contact.form.options.freelance')}</option>
                            <option value="Job Opportunity">{t('contact.form.options.job')}</option>
                            <option value="General Inquiry">{t('contact.form.options.general')}</option>
                        </select>
                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">{t('contact.form.message')}:</label>
                        <textarea
                            id="message"
                            className="w-full px-3 py-2 border shadow-md rounded-lg"
                            rows="5"
                            placeholder={t('contact.form.messagePlaceholder')}
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <button type="submit" className="bg-indigo-600 text-white w-full md:w-auto px-6 py-2 font-semibold rounded-full shadow-lg hover:bg-indigo-800 hover:text-white hover:shadow-2xl transition-colors">
                        {t('contact.form.sendButton')}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;