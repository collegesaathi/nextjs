// components/ClaritySection.js

import React from 'react';

import { FaUsers, FaBookOpen, FaGraduationCap, FaHandshake, FaRocket } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';
const features = [
    {
        id: 1,
        title: 'Personalized Counseling',
        details: 'Our experts are always there for you, providing one-on-one sessions to solve your every doubt and smooth your journey.',
        icon: FaUsers
    },
    {
        id: 2,
        title: 'Student Resources',
        details: 'Get the details about your favourite online university, backed with expert guidance clearing your every doubt to help you make an informed decision.',
        icon: FaBookOpen
    },
    {
        id: 3,
        title: 'Post-admission Support',
        details: 'We don’t stop after admission; our team is dedicated with you to support and after getting admission.',
        icon: FaGraduationCap
    },
    {
        id: 4,
        title: 'Trusted Partnerships',
        details: 'Strong connections with UGC online universities and institutions to ensure your success.',
        icon: FaHandshake
    },
    {
        id: 5,
        title: 'Feature 5 (Example)',
        details: 'Details for feature 5 goes here.',
        icon: FaRocket
    },
];
const DEFAULT_ACTIVE_ID = 2;

const ClaritySection = () => {
    const [activeFeatureId, setActiveFeatureId] = React.useState(DEFAULT_ACTIVE_ID);

    const activeFeature = features.find(f => f.id === activeFeatureId);

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                        Clarity at Every Step
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        We take your future very seriously, and we continuously develop ourselves to help you achieving your dreams
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row border-t border-gray-200 divide-x-0 lg:divide-x divide-gray-200">

                    <div className="lg:w-1/2 p-4 sm:p-8 lg:pr-12">
                        <h3 className="sr-only">Our Offerings</h3>
                        <ul className="space-y-6">
                            {features.map((feature) => (
                                <li
                                    key={feature.id}
                                    className={`
                    py-4 cursor-pointer transition duration-300 ease-in-out
                    ${activeFeatureId === feature.id
                                            ? 'text-gray-900 font-bold'
                                            : 'text-gray-400 hover:text-gray-600 font-medium'
                                        }
                  `}
                                    onClick={() => setActiveFeatureId(feature.id)}
                                >
                                    <span className="text-4xl sm:text-5xl tracking-tight leading-none">
                                        {feature.title}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:w-1/2 p-4 sm:p-8 lg:pl-12 mt-8 lg:mt-0">
                        {activeFeature ? (
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 pt-1">
                                        <FaBookOpen className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">Student Resources</h4>
                                        <p className="mt-1 text-base text-gray-600">
                                            Get the details about your favourite online university, backed with expert guidance clearing your every doubt to help you make an informed decision.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 pt-1">
                                        <FaUsers className="w-6 h-6 text-red-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">Personalized Counseling</h4>
                                        <p className="mt-1 text-base text-gray-600">
                                            Our experts are always there for you, providing one-on-one sessions to solve your every doubt and smooth your journey.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 pt-1">
                                        <FaGraduationCap className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">Post-admission Support</h4>
                                        <p className="mt-1 text-base text-gray-600">
                                            We don’t stop after admission; our team is dedicated with you to support and after getting admission.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 pt-1">
                                        <FaHandshake className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">Trusted Partnerships</h4>
                                        <p className="mt-1 text-base text-gray-600">
                                            Strong connections with UGC online universities and institutions to ensure your success.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <p className="text-gray-500">Select a feature on the left to see details.</p>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ClaritySection;