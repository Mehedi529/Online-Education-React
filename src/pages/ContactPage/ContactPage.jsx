/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';
import './ContactPage.css';

const ContactPage = () => {

    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14596.915977883844!2d90.42282225000001!3d23.8460009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706128107146!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '

    return (
        <div>
            <MainMenuContent />
            <h1>This is contact page</h1>


            <section className='contacts padding'>
  <div className='container shadow flex'>
    <div className='left w-1/2'>
      <iframe src={map} className='w-full h-full'></iframe>
    </div>
    <div className='right w-1/2 p-4'>
      <h1 className='text-3xl font-bold mb-2'>Contact us</h1>
      <p className='mb-4'>We're open for any suggestion or just to have a chat</p>

      <div className='grid grid-cols-2 gap-4'>
        <div className='box'>
          <h4 className='font-bold'>ADDRESS:</h4>
          <p>198 West 21th Street, Suite 721 New York NY 10016</p>
        </div>
        <div className='box'>
          <h4 className='font-bold'>EMAIL:</h4>
          <p>info@yoursite.com</p>
        </div>
        <div className='box'>
          <h4 className='font-bold'>PHONE:</h4>
          <p>+1235 2355 98</p>
        </div>
      </div>

      <form action='' className='mt-4'>
        <div className='flex space-x-4'>
          <input type='text' placeholder='Name' className='border p-2 w-1/2' />
          <input type='email' placeholder='Email' className='border p-2 w-1/2' />
        </div>
        <input type='text' placeholder='Subject' className='border p-2 mt-2 w-full' />
        <textarea cols='30' rows='10' placeholder='Create a message here...' className='border p-2 mt-2 w-full'></textarea>
        <button className='primary-btn mt-2 bg-blue-500 text-white p-2 rounded'>SEND MESSAGE</button>
      </form>

      <h3 className='text-xl font-bold mt-4'>Follow us here</h3>
      <span className='text-gray-600'>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
    </div>
  </div>
</section>





            <Footer />
            
        </div>
    );
};

export default ContactPage;