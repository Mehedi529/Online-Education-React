/* eslint-disable no-unused-vars */
import React from 'react';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';
import powerSystem from '../../../public/powerSystem.jpg';
import ac from '../../../public/ac.png';
import autocad from '../../../public/autocad.jpg';

const Courses = () => {
    return (
        <div>
            <MainMenuContent />
            <h1>This is courses page</h1>
            <div>Hello</div>

            <div className="flex space-x-4"> {/* Use flex container to arrange cards horizontally */}
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={powerSystem} alt="Power System" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Electrical Design (AutoCAD & Revit)</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={ac} alt="AC" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">HVAC</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={autocad} alt="AutoCAD" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">EEE Job Preparation</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
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
