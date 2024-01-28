/* eslint-disable no-unused-vars */
import React from 'react';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';
import powerSystem from '../../../public/powerSystem.jpg';
import ac from '../../../public/ac.png';
import autocad from '../../../public/autocad.jpg';
import './Courses.css';
import jsPDF from 'jspdf';

// Function to generate PDF content
const generatePDFContent = (courseDetails) => {
    const pdf = new jsPDF();
    pdf.text(`Course Details:\n\n${courseDetails}`, 10, 10);
    return pdf;
};

const Courses = () => {
    // Function to handle "Details" button click
    const handleDetailsClick = (courseDetails, courseTitle) => {
        // Generate the PDF content
        const pdf = generatePDFContent(courseDetails);

        // Convert the Blob to a data URL
        const dataURL = URL.createObjectURL(pdf.output('blob'));

        // Open the PDF in a new tab for viewing
        const newTab = window.open(dataURL, '_blank');

        // Check if the new tab is null (could be blocked by popup blockers)
        if (!newTab) {
            // Fallback: Create a link and trigger download
            const link = document.createElement('a');
            link.href = dataURL;
            link.target = '_blank';
            link.setAttribute('rel', 'noopener noreferrer');

            // Trigger a click event on the link
            link.click();
        }
    };

    return (
        <div>
            <MainMenuContent />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center my-4">This is the Courses Page</h1>

            <div className="flex flex-col md:flex-row md:space-x-4 card-container">
                <div className="card bg-base-100 shadow-xl mb-4 md:mb-0">
                    <figure><img src={powerSystem} alt="Power System" className="w-full h-64 object-cover" /></figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-lg md:text-xl font-bold mb-2">Electrical Design (AutoCAD & Revit)</h2>
                        <p className="text-gray-600">Course details for Electrical Design.</p>
                        <div className="card-actions mt-4 flex justify-end">
                            <button className="btn btn-primary hidden md:block" onClick={() => handleDetailsClick('Details for Electrical Design', 'Electrical_Design')}>Details</button>
                            <a href="#" className="btn btn-primary block md:hidden" onClick={() => handleDetailsClick('Details for Electrical Design', 'Electrical_Design')}>Download PDF</a>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl mb-4 md:mb-0">
                    <figure><img src={ac} alt="AC" className="w-full h-64 object-cover" /></figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-lg md:text-xl font-bold mb-2">HVAC</h2>
                        <p className="text-gray-600">Course details for HVAC.</p>
                        <div className="card-actions mt-4 flex justify-end">
                            <button className="btn btn-primary hidden md:block" onClick={() => handleDetailsClick('Details for HVAC', 'HVAC')}>Details</button>
                            <a href="#" className="btn btn-primary block md:hidden" onClick={() => handleDetailsClick('Details for HVAC', 'HVAC')}>Download PDF</a>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl mb-4 md:mb-0">
                    <figure><img src={autocad} alt="AutoCAD" className="w-full h-64 object-cover" /></figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-lg md:text-xl font-bold mb-2">EEE Job Preparation</h2>
                        <p className="text-gray-600">Course details for EEE Job Preparation.</p>
                        <div className="card-actions mt-4 flex justify-end">
                            <button className="btn btn-primary hidden md:block" onClick={() => handleDetailsClick('Details for EEE Job Preparation', 'EEE_Job_Preparation')}>Details</button>
                            <a href="#" className="btn btn-primary block md:hidden" onClick={() => handleDetailsClick('Details for EEE Job Preparation', 'EEE_Job_Preparation')}>Download PDF</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Courses;
