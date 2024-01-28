/* eslint-disable no-unused-vars */
import React from 'react';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';
import powerSystem from '../../../public/powerSystem.jpg';
import ac from '../../../public/ac.png';
import autocad from '../../../public/autocad.jpg';
import './Courses.css';

const Courses = () => {
    return (
        <div>
            <MainMenuContent />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center my-4">This is the Courses Page</h1>

            <div className="flex flex-col md:flex-row md:space-x-4"> {/* Use flex container to arrange cards horizontally on medium screens and above */}
                <div className="card bg-base-100 shadow-xl mb-4 md:mb-0">
                    <figure><img src={powerSystem} alt="Power System" className="w-full h-64 object-cover" /></figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-xl font-bold mb-2">Electrical Design (AutoCAD & Revit)</h2>
                        <p className="text-gray-600">If a dog chews shoes, whose shoes does he choose?</p>
                        <div className="card-actions mt-4 flex justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl mb-4 md:mb-0">
                    <figure><img src={ac} alt="AC" className="w-full h-64 object-cover" /></figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-xl font-bold mb-2">HVAC</h2>
                        <p className="text-gray-600">If a dog chews shoes, whose shoes does he choose?</p>
                        <div className="card-actions mt-4 flex justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl mb-4 md:mb-0">
                    <figure><img src={autocad} alt="AutoCAD" className="w-full h-64 object-cover" /></figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-xl font-bold mb-2">EEE Job Preparation</h2>
                        <p className="text-gray-600">If a dog chews shoes, whose shoes does he choose?</p>
                        <div className="card-actions mt-4 flex justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Courses;
