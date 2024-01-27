/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'; // Import useState
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';
import sabbir from '../../../public/sabbir.png';
import shafal from '../../../public/shafal.png';
import shahin from '../../../public/shahin.png';

const Team = () => {
    const [activeCard, setActiveCard] = useState(null); // Add useState here

    const teamMembers = [
        {
            id: 1,
            name: 'Sabbir Bin Zaman',
            role: 'CEO',
            description: 'Project Engineer (MEP).',
            description1: 'Delta Desh Private LTD.',
            description2: 'B.Sc. in EEE, AIUB.',
            image: sabbir,
        },
        {
            id: 2,
            name: 'Shafal Salehin',
            role: 'CEO',
            description: 'Resource Person, Ministry of Primary and Mass Education,',
            description1: 'Gov. of Bangladesh.',
            description2: 'B.Sc. in EEE, AIUB.',
            image: shafal,
        },
        {
            id: 3,
            name: 'Md Shahin Alam',
            role: 'CEO',
            description: 'Senior Assistant design Engineer,',
            description1: 'Newton Engineering LTD.',
            description2: 'B.Sc. in EEE, AIUB.',
            image: shahin,
        },
    ]; 

    const handleCardClick = (id) => {
        setActiveCard(id === activeCard ? null : id);
    };

    return (
        <div>
            <MainMenuContent />
            <h2 className="text-4xl text-center mt-8">Our Team</h2>

            <section className="team py-12 bg-gray-200">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center items-stretch max-w-7xl mx-auto">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                onClick={() => handleCardClick(member.id)}
                                className={`team-member flex-shrink-0 w-full md:w-1/3 lg:w-1/4 bg-white p-4 m-2 border border-gray-300 rounded transition-transform ${
                                    member.id === activeCard ? 'hover:translate-y-(-5)' : ''
                                }`}
                            >
                                <div className="team-member-image">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-auto rounded-full"
                                    />
                                </div>
                                <div className="team-member-info">
                                    <h4 className="text-xl font-semibold mt-4">{member.name}</h4>
                                    <p className="text-gray-600 mb-4">{member.role}</p>
                                    <p className="text-gray-700 mb-4">{member.description}</p>
                                    <p className="text-gray-700 mb-4">{member.description1}</p>
                                    <p className="text-gray-700 mb-4">{member.description2}</p>
                                    <ul className="team-member-socials flex items-center justify-center list-none p-0">
                                        {/* Add social media links here if needed */}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Team;
