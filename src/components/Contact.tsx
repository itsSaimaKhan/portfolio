import React from 'react';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { BsTelephoneInbound } from 'react-icons/bs';

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container mx-auto px-4">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Left Section */}
        <div className="space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center md:text-left" data-aos="fade-up-left">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg text-center md:text-left" data-aos="fade-up-left">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>

          <div className="flex gap-3 items-center justify-center md:justify-start" data-aos="fade-up-left">
            <MdOutlineMarkEmailUnread size={30} />
            <span className="text-gray-400">samiakhan8754@gmail.com</span>
          </div>

          <div className="flex gap-3 items-center justify-center md:justify-start" data-aos="fade-up-left">
            <BsTelephoneInbound size={30} />
            <span className="text-gray-400">03303903871</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          {/* Name Field */}
          <div className="flex flex-col gap-1" data-aos="fade-up-left">
            <label htmlFor="name" className="text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              className="h-[40px] px-3 bg-transparent border border-accent rounded-md text-gray-300"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1" data-aos="fade-up-left">
            <label htmlFor="email" className="text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              className="h-[40px] px-3 bg-transparent border border-accent rounded-md text-gray-300"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1" data-aos="fade-up-left">
            <label htmlFor="message" className="text-gray-300">Message</label>
            <textarea
              id="message"
              rows={8}
              className="px-3 py-2 bg-transparent border border-accent rounded-md text-gray-300 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center md:text-left" data-aos="fade-up-left">
            <button className="bg-purple-400 text-white py-2 px-6 rounded-md hover:bg-purple-500 transition">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
