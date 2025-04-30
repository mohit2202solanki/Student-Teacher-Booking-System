import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, logout } from './Firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';

function Navigation() {
    const [user, loading, error] = useAuthState(auth);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const fetchUserRole = async () => {
            if (!user) {
                setRole(null);
                return;
            }
            try {
                // Check student collection
                let q = query(collection(db, "student"), where("uid", "==", user.uid));
                let docs = await getDocs(q);
                if (!docs.empty) {
                    setRole("student");
                    return;
                }
                // Check teacher collection
                q = query(collection(db, "teacher"), where("uid", "==", user.uid));
                docs = await getDocs(q);
                if (!docs.empty) {
                    setRole("teacher");
                    return;
                }
                // Check admin collection (users)
                q = query(collection(db, "users"), where("uid", "==", user.uid));
                docs = await getDocs(q);
                if (!docs.empty) {
                    setRole("admin");
                    return;
                }
                setRole(null);
            } catch (err) {
                console.error("Error fetching user role:", err);
                setRole(null);
            }
        };
        fetchUserRole();
    }, [user]);

    useEffect(() => {
        const handleLogoutOnClose = (event) => {
            logout();
        };

        window.addEventListener('beforeunload', handleLogoutOnClose);

        return () => {
            window.removeEventListener('beforeunload', handleLogoutOnClose);
        };
    }, []);

    return (
    <>
        <style>{`
            .nav-link-custom {
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                transition: all 0.3s ease;
                color: #ff4d4d !important;
            }
            .nav-link-custom:hover {
                color: #ff1a1a !important;
                text-decoration: underline;
            }
            .nav-link-disabled {
                color: #aaa !important;
                pointer-events: none;
                cursor: default;
            }
        `}</style>
        <Navbar
            expand="lg"
            collapseOnSelect
            className="py-3 px-4 rounded shadow-sm"
            style={{ backgroundColor: '#222' }}
        >
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link
                        active
                        href="/login"
                        className="mx-3 nav-link-custom"
                    >
                        Admin
                    </Nav.Link>
                    <Nav.Link
                        active
                        href="/tlogin"
                        className="mx-3 nav-link-custom"
                    >
                        Teacher
                    </Nav.Link>
                    <Nav.Link
                        active
                        href="/slogin"
                        className="mx-3 nav-link-custom"
                    >
                        Student
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    );
}

export default Navigation;