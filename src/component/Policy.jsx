import HomeFooter from "./Home/HomeFooter";
import HomeHeaderNavbar from "./Home/HomeHeaderNavbar";

const Privacy = () => {
    return(
        <>
            <HomeHeaderNavbar/>
            <div id="footer-policy">
                <div id="footer-policy-container">
                    <h2>Privacy Policy</h2>

                    <div id="policy-content">
                        <p>At Slotify, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services for booking vehicle parking spaces. Please read this policy carefully to understand how we handle your data.</p>

                        <div id="policy-1">
                            <h3>Information We Collect</h3>
                            <p>We collect several types of information from and about users of our services, including:</p>
                            <ul>
                                <li>Personal Identification Information: Name, email address, phone number, vehicle information, license plate number, and payment details.</li>
                                <li>Non-Personal Information: Browser type, device information, location data (with user consent), and IP address.</li>
                                <li>Usage Information: Information on your usage of our service, including parking booking history, preferred locations, and times.</li>
                            </ul>
                        </div>
                        
                        <div id="policy-2">
                            <h3>How We Use Your Information</h3>
                            <p>Slotify uses the information we collect to:</p>
                            <ul>
                                <li>Facilitate and manage your parking bookings.</li>
                                <li>Process payments and transactions securely.</li>
                                <li>Provide customer support and respond to inquiries.</li>
                            </ul>
                        </div>

                        <div id="policy-3">
                            <h3>How We Share Your Information</h3>
                            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
                            <ul>
                                <li>Service Providers: Third-party companies that assist us in operating our platform, such as payment gateways or customer support.</li>
                                <li>Legal Requirements: If required by law, we may disclose your personal information to comply with legal obligations or protect the rights, safety, or property of Slotify or others.</li>
                                <li>Business Transfers: In case of a merger, acquisition, or asset sale, your personal data may be transferred.</li>
                            </ul>
                        </div>

                        <div id="policy-4">
                            <h3>Data Security</h3>
                            <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of data transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.</p>
                        </div>

                        <div id="policy-5">
                            <h3>Cookies and Tracking Technologies</h3>
                            <p>Slotify uses cookies and similar tracking technologies to enhance your experience on our website. Cookies help us remember your preferences and improve site functionality. You may control the use of cookies through your browser settings, but disabling cookies may affect your ability to use certain features of our service.</p>
                        </div>

                        <div id="policy-6">
                            <h3>Your Privacy Rights</h3>
                            <p>You have the following rights regarding your personal information:</p>
                            <ul>
                                <li>Access and Rectification: You may access or update your personal information by logging into your account or contacting us directly.</li>
                                <li>Data Deletion: You may request the deletion of your personal information from our systems, subject to certain legal obligations.</li>
                                <li>Data Portability: Upon request, we can provide you with a copy of your personal data in a machine-readable format.</li>
                                <li>Opt-out of Marketing: You can opt-out of receiving promotional emails or communications by following the unsubscribe link in those messages or contacting us directly.</li>
                            </ul>
                        </div>

                        <div id="policy-7">
                            <h3>Third-Party Links</h3>
                            <p>Our website may contain links to third-party websites that are not operated by us. We are not responsible for the content or privacy practices of such external sites. We recommend reviewing the privacy policies of any third-party services you interact with.</p>
                        </div>

                        <div id="policy-8">
                            <h3>Changes to this Privacy Policy</h3>
                            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Any changes will be posted on this page, and we will notify you of significant updates through our website or email notifications.</p>
                        </div>
                    </div>
                </div>
            </div>

            <HomeFooter/>
        </>
    )
}

export default Privacy;