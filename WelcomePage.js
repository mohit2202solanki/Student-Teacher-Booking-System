import React from 'react';

function WelcomePage() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light px-3">
            <div className="card shadow-lg rounded p-4 p-md-5 mx-3" style={{ maxWidth: '700px', width: '100%' }}>
                <div className="text-center">
                    <h1 className="display-5 display-md-4 fw-bold mb-4 text-primary">Student-Teacher Booking Appointment</h1>
                </div>
                <p className="lead mb-4 text-center text-secondary fs-6 fs-md-5">
                    Booking appointment systems, either online or through traditional queueing systems, are
                    now popular. Several businesses, such as scheduling an appointment, employ various
                    Web-based appointment systems for their patients, which improve the efficiency of the
                    appointment process, reducing patient wait times and increasing the total number of
                    patients treated. This research proposes a web-based appointment booking system that
                    allows students and lecturers to be aware of their appointment time regardless of where
                    they are by using the web or mobile devices. By connecting to the Internet, students and
                    instructors can easily access the system. It also permits students to send any message,
                    including the appointment's purpose and timing.
                </p>
                <div className="text-center">
                    <button type="button" className="btn btn-primary btn-lg px-4">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;
