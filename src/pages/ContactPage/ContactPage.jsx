/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';
import { useForm, ValidationError } from '@formspree/react';

const ContactPage = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14596.915977883844!2d90.42282225000001!3d23.8460009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706128107146!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';

  const [state, handleSubmit] = useForm('mzbndyqw');

  if (state.submitting) {
    return <p>Submitting...</p>;
  }

  if (state.succeeded) {
    return (
      <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 text-center">
        <h1 className="py-4 text-4xl font-bold text-[#001b5e]">Contact</h1>
        <div className="bg-green-200 text-green-800 p-4 rounded-md">
          Thanks for joining!
        </div>
      </div>
    );
  }

  return (
    <div>
      <MainMenuContent />
      <h1 className="text-center text-2xl md:text-4xl font-bold my-4">Contact Page</h1>

      <section className="contacts padding">
        <div className="container shadow flex flex-col md:flex-row">
          <div className="left w-full md:w-1/2 mb-4 md:mb-0">
            <iframe src={map} className="w-full h-48 md:h-full"></iframe>
          </div>
          <div className="right w-full md:w-1/2 p-4">
            <h1 className="text-3xl font-bold mb-2">Contact us</h1>
            <p className="mb-4">We're open for any suggestion or just to have a chat</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="box">
                <h4 className="font-bold">ADDRESS:</h4>
                <p>Nikunja-2, Khilkhet, Dhaka</p>
              </div>
              <div className="box">
                <h4 className="font-bold">EMAIL:</h4>
                <p>sabbirsbbr@gmail.com</p>
              </div>
              <div className="box">
                <h4 className="font-bold">PHONE:</h4>
                <p>+880-178-494-9265</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full sm:w-auto"
              >
                Submit
              </button>
            </form>

            <h3 className="text-xl font-bold mt-4">Follow us here</h3>
            <span className="text-gray-600">FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
