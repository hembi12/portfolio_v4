// src/components/Contact.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import validator from 'validator';

const CONTACT_ENDPOINT = process.env.REACT_APP_CONTACT_ENDPOINT;

const FormField = ({
    label,
    id,
    type,
    value,
    onChange,
    error,
    placeholder,
    isDarkMode,
    rows,
    children,
}) => (
    <div>
        <label
            className={`block font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
            htmlFor={id}
        >
            {label}:
        </label>
        {type === 'textarea' ? (
            <textarea
                id={id}
                className={`w-full px-3 py-2 border shadow-md rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-400 text-gray-200' : ''
                    }`}
                rows={rows || 5}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${id}-error` : null}
            ></textarea>
        ) : type === 'select' ? (
            <select
                id={id}
                className={`w-full px-3 py-2 border shadow-md rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-400 text-gray-200' : ''
                    }`}
                value={value}
                onChange={onChange}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${id}-error` : null}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {children}
            </select>
        ) : (
            <input
                type={type}
                id={id}
                className={`w-full px-3 py-2 border shadow-md rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-400 text-gray-200' : ''
                    }`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${id}-error` : null}
            />
        )}
        {error && (
            <p id={`${id}-error`} className="text-red-500 text-sm">
                {error}
            </p>
        )}
    </div>
);

const Contact = ({ isDarkMode }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = t('contact.errors.name');
        if (!formData.email) {
            newErrors.email = t('contact.errors.email');
        } else if (!validator.isEmail(formData.email)) {
            newErrors.email = t('contact.errors.emailInvalid');
        }
        if (!formData.subject) newErrors.subject = t('contact.errors.subject');
        if (!formData.message) newErrors.message = t('contact.errors.message');
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            setErrors({});
            setLoading(true);
            try {
                const response = await fetch(CONTACT_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    setSubmitted(true);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setErrors({});
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Error en el envío');
                }
            } catch (error) {
                console.error(error);
                setSubmitted(false);
                setErrors({ submit: error.message });
            } finally {
                setLoading(false);
            }
        } else {
            setErrors(formErrors);
            setSubmitted(false);
        }
    };

    return (
        <section
            id="contact"
            className={`py-20 px-6 ${isDarkMode
                    ? 'bg-gray-800 text-gray-200'
                    : 'bg-white text-gray-900'
                }`}
        >
            <div className="container mx-auto max-w-lg">
                <h2
                    className={`text-3xl md:text-3xl lg:text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-gray-100' : ''
                        }`}
                    style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}
                >
                    {t('contact.title')}
                </h2>
                <p
                    className={`text-center mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                >
                    {t('contact.description')}
                </p>
                {submitted && (
                    <p
                        className={`text-center mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-500'
                            }`}
                    >
                        {t('contact.successMessage')}
                    </p>
                )}
                {errors.submit && (
                    <p className="text-red-500 text-center mb-4">
                        {errors.submit}
                    </p>
                )}
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <FormField
                        label={t('contact.form.name')}
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        placeholder={t('contact.form.namePlaceholder')}
                        isDarkMode={isDarkMode}
                    />
                    <FormField
                        label={t('contact.form.email')}
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder={t('contact.form.emailPlaceholder')}
                        isDarkMode={isDarkMode}
                    />
                    <FormField
                        label={t('contact.form.subject')}
                        id="subject"
                        type="select"
                        value={formData.subject}
                        onChange={handleChange}
                        error={errors.subject}
                        placeholder={t('contact.form.subjectPlaceholder')}
                        isDarkMode={isDarkMode}
                    >
                        <option value="" disabled>
                            {t('contact.form.subjectPlaceholder')}
                        </option>
                        <option value="Project Collaboration">
                            {t('contact.form.options.project')}
                        </option>
                        <option value="Freelance Work">
                            {t('contact.form.options.freelance')}
                        </option>
                        <option value="Job Opportunity">
                            {t('contact.form.options.job')}
                        </option>
                        <option value="General Inquiry">
                            {t('contact.form.options.general')}
                        </option>
                    </FormField>
                    <FormField
                        label={t('contact.form.message')}
                        id="message"
                        type="textarea"
                        value={formData.message}
                        onChange={handleChange}
                        error={errors.message}
                        placeholder={t('contact.form.messagePlaceholder')}
                        isDarkMode={isDarkMode}
                        rows={5}
                    />
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full md:w-auto px-6 py-2 font-semibold rounded-full shadow-lg transition-colors ${isDarkMode
                                    ? 'bg-indigo-700 text-gray-200 hover:bg-indigo-600 hover:text-white'
                                    : 'bg-indigo-600 text-white hover:bg-indigo-800'
                                }`}
                        >
                            {loading
                                ? t('contact.form.sending')
                                : t('contact.form.sendButton')}
                        </button>
                        <a
                            href="mailto:hectormartilb@gmail.com"
                            className={`w-full md:w-auto px-6 py-2 text-center font-semibold rounded-full shadow-lg border transition-colors ${isDarkMode
                                    ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-600 hover:text-white'
                                    : 'border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
                                }`}
                        >
                            {t('contact.form.directEmailButton')}
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;