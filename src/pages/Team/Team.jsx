/* eslint-disable no-unused-vars */
import React from 'react';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';

const Team = () => {

    const teamMembers = [
        {
          id: 1,
          name: 'John Doe',
          role: 'CEO',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 2,
          name: 'Jane Smith',
          role: 'CTO',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 3,
          name: 'Bob Johnson',
          role: 'Developer',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        // {
        //   id: 4,
        //   name: 'Alice Williams',
        //   role: 'Designer',
        //   description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        // },
    ]; 

    return (
        <div>
            <MainMenuContent />
            <h1>This is Team Page</h1>
            <div>Hello</div>

            <section className="team-section py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* First Card */}
                        <div key={teamMembers[0].id} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img
                                src={`https://placekitten.com/300/200?image=${teamMembers[0].id}`}
                                alt={teamMembers[0].name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{teamMembers[0].name}</h3>
                                <p className="text-gray-600 mb-2">{teamMembers[0].role}</p>
                                <p className="text-gray-700">{teamMembers[0].description}</p>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div key={teamMembers[1].id} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img
                                src={`https://placekitten.com/300/200?image=${teamMembers[1].id}`}
                                alt={teamMembers[1].name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{teamMembers[1].name}</h3>
                                <p className="text-gray-600 mb-2">{teamMembers[1].role}</p>
                                <p className="text-gray-700">{teamMembers[1].description}</p>
                            </div>
                        </div>

                        {/* Centered Third Card */}
                        <div key={teamMembers[2].id} className="bg-white rounded-lg overflow-hidden shadow-md col-span-2 mx-auto">
                            <img
                                src={`https://placekitten.com/300/200?image=${teamMembers[2].id}`}
                                alt={teamMembers[2].name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{teamMembers[2].name}</h3>
                                <p className="text-gray-600 mb-2">{teamMembers[2].role}</p>
                                <p className="text-gray-700">{teamMembers[2].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            
        </div>
    );
};

export default Team;
