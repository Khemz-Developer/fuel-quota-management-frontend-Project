import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
const Help = () => {
    const [openStep, setOpenStep] = useState(null);
    const [openGuide, setOpenGuide] = useState(false);
    
    const toggleStep = (step) => {
        setOpenStep(openStep === step ? null : step);
    }

    const toggleGuide = () => {
        setOpenGuide(!openGuide);
    }
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
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1}}
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
                    {/* Step 1: Register a Vehicle */}
                    <div className="border border-green-500 rounded-lg shadow-md">
                        <button 
                            className="w-full px-4 py-2 text-left font-semibold rounded-lg focus:outline-none"
                            onClick={() => toggleStep(1)}
                        >
                            Step 1: Register Your Vehicle
                        </button>
                        <AnimatePresence initial={false}>
                            {openStep === 1 && (
                            <motion.div
                                variants={stepVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="p-4 bg-white"
                            >
                                <p>1. Go to the Vehicle Registration page.</p>
                                <p>2. Fill out the form with your vehicle details.</p>
                                <p>3. Click 'Register Now' to complete the registration.</p>
                            </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    
                    {/* Step 2: View registered vehicles */}
                    <div className="border border-green-500 rounded-lg shadow-md">
                        <button 
                        className="w-full px-4 py-2 text-left font-semibold text-gray-800 bg-green-100 rounded-lg focus:outline-none"
                        onClick={() => toggleStep(2)}
                        >
                        Step 2: View Registered Vehicles
                        </button>
                        <AnimatePresence initial={false}>
                            {openStep === 2 && (
                            <motion.div
                                variants={stepVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="p-4 bg-white"
                            >
                                <p>1. Go to the 'My Vehicles' section.</p>
                                <p>2. Here you will see all your registered vehicles listed.</p>
                            </motion.div>
                            )}
                        </AnimatePresence>        
                    </div>

                    {/* Step 3: Download the QR Code  */}
                    <div className="border border-green-500 rounded-lg shadow-md">
                        <button 
                        className="w-full px-4 py-2 text-left font-semibold text-gray-800 bg-green-100 rounded-lg focus:outline-none"
                        onClick={() => toggleStep(3)}
                        >
                        Step 3: Download the Relevant QR code for the vehicle
                        </button>
                        <AnimatePresence initial={false}>
                            {openStep === 3 && (
                            <motion.div
                                variants={stepVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="p-4 bg-white"
                            >
                                <p>1. Go to the 'My Vehicles' section.</p>
                                <p>2. Here you will see all your registered vehicles listed.</p>
                            </motion.div>
                            )}    
                        </AnimatePresence>
                    </div>
                </motion.section>
            )
            }
        </AnimatePresence>



        <section className='space y-6 mt-6'>
            <motion.button
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1}}
            className="px-8 py-2 mb-6 font-semibold text-white rounded-full shadow-lg bg-green hover:bg-green-700 hover:shadow-xl"
            onClick={() => toggleStep(1)}
            >
                FAQs
            </motion.button>
        </section>
        <section className='space y-6 mt-6'>
            <motion.button
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1}}
            className="px-8 py-2 mb-6 font-semibold text-white rounded-full shadow-lg bg-green hover:bg-green-700 hover:shadow-xl"
            onClick={() => toggleStep(1)}
            >
                Support Contact Section
            </motion.button>
        </section>
        
    </div>
  )
}

export default Help
