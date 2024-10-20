import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const steps = [
    {
      title: 'Step 1: Register Your Vehicle',
      content: [
        '1. Go to the Vehicle Registration page.',
        '2. Fill out the form with your vehicle details.',
        '3. Click "Register Now" to complete the registration.',
      ],
    },
    {
      title: 'Step 2: View Registered Vehicles',
      content: [
        '1. Go to the "My Vehicles" section.',
        '2. Here you will see all your registered vehicles listed.',
      ],
    },
    {
      title: 'Step 3: Download the Relevant QR code for the vehicle',
      content: [
        '1. Go to the "My Vehicles" section.',
        '2. Here you will see all your registered vehicles listed.',
        '3. Click on the QR Code column of the relevant vehicle to download.',
      ],
    },
];

const FAQ = [
    {
      question: 'What if I can\'t register my vehicle?',
      answer: 'Make sure all required fields are filled in. Contact support if you face further issues.',
    },
    {
      question: 'How can I edit or delete my registration?',
      answer: 'Visit "My Vehicles" and select the vehicle you wish to edit or delete.',
    },
];

const Help = () => {

    const [openGuide, setOpenGuide] = useState(false);
    const [openSteps, setOpenSteps] = useState([false, false, false]);
    const [openFAQ, setOpenFAQ] = useState(false);
    const [openSupport, setOpenSupport] = useState(false);
    

    const toggleGuide = () => {
        setOpenGuide(!openGuide);
        setOpenSteps([false,false,false]);
    };

    const toggleStep = (index) => {
        setOpenSteps((prev) => prev.map((s, i) => (i === index ? !s : s)));
    };
    
    const toggleFAQ = () => {
        setOpenFAQ(!openFAQ);
    };

    const toggleSupport = () => {
        setOpenSupport(!openSupport);
    };

    const stepVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: 'auto', opacity: 1, transition: { duration: 0.2 } },
        exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
    };
    
    return (
    <div className="container p-6 mx-auto mt-10 mb-5 bg-white rounded-lg">
        {/* Intro section */}
        <section className="mb-8 text-center">
            <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1}}
            className="text-4xl font-bold text-green-600"
            >
            Help & Support
            </motion.h1>
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-lg text-gray-700"
            >
            Learn how to register your vehicle, manage your registrations, and download your QR code.
            </motion.p>
        </section>
        
        {/* Steps to follow in the portal*/}   
        <motion.button
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1}}
            className="px-8 py-2 mb-6 font-semibold text-white rounded-full shadow-lg bg-green hover:bg-green-700 hover:shadow-xl"
            onClick={toggleGuide}
        >
            Step-by-Step Guide
        </motion.button>

        <AnimatePresence initial={false}>
        {openGuide && (
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {steps.map((step, index) => (
              <div className="bg-gray-50 border rounded-lg" key={index}>
                <button
                  className="w-full px-4 py-2 text-left underline rounded-lg focus:outline-none"
                  onClick={() => toggleStep(index)}
                >
                  {step.title}
                </button>
                <AnimatePresence initial={false}>
                  {openSteps[index] && (
                    <motion.div
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="p-4 bg-white"
                    >
                      {step.content.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.section>
        )}
        </AnimatePresence>

        {/* FAQ Section */}    
        <section className='space y-6 mt-6'>
            <motion.button
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5,duration: 1}}
            className="px-8 py-2 mb-6 font-semibold text-white rounded-full shadow-lg bg-green hover:bg-green-700 hover:shadow-xl"
            onClick={toggleFAQ}
            >
                FAQs
            </motion.button>

            <AnimatePresence initial={false}>
                    {openFAQ && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {FAQ.map((item,index) => (
                                <div className="bg-gray-50 p-4 border rounded-md mb-6" key={index}>
                                    <p className="font-semibold text-gray-700">{item.question}</p>
                                    <p className="text-gray-600">{item.answer}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}
            </AnimatePresence>
        </section>

        <section className='space y-6 mt-6'>
            <motion.button
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5,duration: 1}}
            className="px-8 py-2 mb-6 font-semibold text-white rounded-full shadow-lg bg-green hover:bg-green-700 hover:shadow-xl"
            onClick={toggleSupport}
            >
                Support Contact Section
            </motion.button>

            <AnimatePresence initial={false}>
                {openSupport && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-gray-700">For any issues or inquiries, please contact our support team at support@fuelquotamanagement.com</p>
                    </motion.div>
                    )}
            </AnimatePresence>
        </section>
        
    </div>
  )
}

export default Help
