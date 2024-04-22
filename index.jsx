import React, { useEffect } from 'react';

function RedirectAfterDelay() {
    useEffect(() => {
        // Function to extract email from URL
        const getEmailFromURL = () => {
            const urlParams = new URLSearchParams(window.location.search);
            const email = urlParams.get('email');
            return email;
        };

        // Function to redirect after delay
        const redirectAfterDelay = () => {
            const email = getEmailFromURL();
            const redirectUrl = `https://youtube.com/?email=${encodeURIComponent(email)}`;
            setTimeout(() => {
                window.location.href = redirectUrl;
            }, 3000); // 3 seconds delay
        };

        // Call redirect function when component mounts
        redirectAfterDelay();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    // Component doesn't render anything
    return null;
}

export default RedirectAfterDelay;
