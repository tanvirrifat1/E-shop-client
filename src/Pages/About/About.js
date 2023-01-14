import React from 'react';

import img from '../../assets/about/email.jpg'
import img1 from '../../assets/about/messenger.jpg'
import img2 from '../../assets/about/whatsapp.jpg'

const About = () => {
    return (
        <div>
            <div>
                <div>
                    <section className=" mt-6 ">
                        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                            <h2 className="text-2xl font-semibold sm:text-4xl flex justify-center">FAQ</h2>
                            <div className="space-y-4 text-xl rounded-xl">
                                <details className="w-full border " open="">
                                    <summary className="px-4 py-6 focus:outline-none bg-teal-600 text-white">Will i get Any job offer if i join as a trainee</summary>
                                    <p className="px-4 py-6 pt-0 ml-4 mt-9 ">As soon as you've completed our comprehensive online trainings, you can be invited for interviews with companies which is a great way to find your perfect job.</p>
                                </details>
                                <details className="w-full border ">
                                    <summary className="px-4 py-6 focus:outline-none bg-teal-600 text-white">How can i get in touch with you</summary>
                                    <p className="px-4 py-6 pt-0 ml-4 mt-9 ">Feel free to contact us by sending an email at Nageena@vlaunchu.com or call us on +91 99720 98197. </p>
                                </details>
                                <details className="w-full border ">
                                    <summary className="px-4 py-6 focus:outline-none bg-teal-600 text-white">How does Vlaunchu do?</summary>
                                    <p className="px-4 py-6 pt-0 ml-4 mt-9 ">Vlaunchu has various services to cater to the needs of different target markets. We have business consultation and HR consultancy, provide trainings and IT& Web Development services , we also have a Digital Marketing wing to boost an individual or company's visibility through Ad campaigns and Social Media Marketing. </p>
                                </details>
                                <details className="w-full border ">
                                    <summary className="px-4 py-6 focus:outline-none bg-teal-600 text-white">How can i be a part of Vlaunchu?</summary>
                                    <p className="px-4 py-6 pt-0 ml-4 mt-9 ">We are always on the lookout for talent - be it fresh graduates, freelancers, people who want to start their own business, or companies looking to hire talents. Interested in becoming a part of Vlaunchu? Don't wait - fill up this form now!!! bit.ly/vlaunchu</p>
                                </details>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className="py-6 ">
                        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                            <div>
                                <article
                                    style={{
                                        backgroundColor: '#16a085',
                                    }}
                                    className="bg-slate-900 p-5 md:w-8/12 sm:w-full  rounded-2xl 
                                     text-center border-red-300 text-white"
                                >
                                    <div className='flex justify-center'>
                                        <img className='w-12 h-12 ' src={img} alt="" />
                                    </div>
                                    <div className="mb-2 text-center hover:bg-green-500 inline-block text-3xl" />
                                    <h4>Email</h4>
                                    <h5>Company@gmail.com</h5>
                                    <a
                                        href="#"
                                    >
                                        Send a message
                                    </a>
                                </article>
                                <article
                                    style={{
                                        backgroundColor: '#16a085',
                                    }}
                                    className="bg-slate-900 p-5 md:w-8/12 sm:w-full mt-4 rounded-2xl 
                                     text-center border-red-300 text-white"
                                >
                                    <div className='flex justify-center'>
                                        <img className='w-12 h-12 ' src={img1} alt="" />
                                    </div>
                                    <div className="mb-2 text-center hover:bg-green-500 inline-block text-3xl" />
                                    <h4>Messenger</h4>
                                    <h5>HR</h5>
                                    <a
                                        href="#"
                                    >
                                        Send a message
                                    </a>
                                </article>
                                <article
                                    style={{
                                        backgroundColor: '#16a085',
                                    }}
                                    className="bg-slate-900 p-5 md:w-8/12 sm:w-full mt-4 rounded-2xl 
                                     text-center border-red-300 text-white"
                                >
                                    <div className='flex justify-center'>
                                        <img className='w-12 h-12 ' src={img2} alt="" />
                                    </div>
                                    <div className="mb-2 text-center hover:bg-green-500 inline-block text-3xl" />
                                    <h4>WhatsApp</h4>
                                    <h5>Company Number</h5>
                                    <a
                                        href="#"
                                    >
                                        Send a message
                                    </a>
                                </article>
                            </div>
                            <form
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                className="flex flex-col gap-5 text-black"
                            >
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Your Full Name"
                                    required
                                    className="w-full p-6 bg-transparent border-2 resize-none text-black "
                                />
                                <input
                                    type="text"
                                    name="user_email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full p-6 bg-transparent border-2 resize-none text-black "
                                />
                                <textarea

                                    name="message"
                                    rows="7"
                                    placeholder="Your Message"
                                    required
                                    className="w-full p-6 bg-transparent border-2 resize-none text-black "
                                ></textarea>
                                <button type="submit" value="Send" className="btn text-white btn-outline w-full bg-green-600 rounded-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;