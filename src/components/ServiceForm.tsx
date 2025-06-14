import React from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface ServiceFormProps {
  service: string;
}

const ServiceForm = ({ service }: ServiceFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ServiceFormData>();
  const { t } = useLanguage();

  const onSubmit = (data: ServiceFormData) => {
    console.log({ ...data, service });
    // Handle form submission
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            {t('contact.name')}
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: `${t('contact.name')} ${t('contact.required')}` })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {t('contact.email')}
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: `${t('contact.email')} ${t('contact.required')}`,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t('contact.invalidEmail'),
              },
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            {t('contact.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { required: `${t('contact.phone')} ${t('contact.required')}` })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            {t('contact.company')}
          </label>
          <input
            type="text"
            id="company"
            {...register('company')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            {t('contact.message')}
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message', { required: `${t('contact.message')} ${t('contact.required')}` })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <Send className="w-5 h-5 mr-2" />
            {t('contact.submit')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;