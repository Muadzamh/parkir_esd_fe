import HomeFooter from "./Home/HomeFooter";
import HomeHeaderNavbar from "./Home/HomeHeaderNavbar";

const Terms = () => {
    return(
        <>
            <HomeHeaderNavbar/>
            <div id="footer-policy">
                <div id="footer-policy-container">
                    <h2>Terms & Conditions</h2>

                    <div id="policy-content">
                        <p>Welcome to Slotify! By using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. If you do not agree to these terms, please refrain from using our services.</p>

                        <div id="policy-1">
                            <h3>1. Acceptance of Terms</h3>
                            <p>By accessing or using Slotify’s website and services, you agree to be bound by these Terms & Conditions, our Privacy Policy, and any other applicable laws. These terms may be updated from time to time, and it is your responsibility to review them periodically.</p>
                        </div>
                        
                        <div id="policy-2">
                            <h3>2. Services Offered</h3>
                            <p>Slotify provides an online platform that enables users to search for, reserve, and pay for parking spaces. Our services are available via our website and any associated applications.</p>
                            <ul>
                                <li>Booking: When you book a parking space through Slotify, you enter into an agreement with the parking provider for the duration of the booking. Slotify only facilitates the transaction between you and the provider and is not responsible for the availability or condition of the parking space.</li>
                                <li>Payment: All payments for bookings are made through the Slotify platform, and you agree to pay all fees associated with the booking. Payment details will be outlined during the checkout process.</li>
                            </ul>
                        </div>

                        <div id="policy-3">
                            <h3>3. User Obligations</h3>
                            <p>By using our services, you agree to:</p>
                            <ul>
                                <li>Provide accurate, complete, and current information during the booking process.</li>
                                <li>Comply with all local parking laws, rules, and regulations at the location where the booking is made.</li>
                                <li>Use the parking space solely for parking purposes and in accordance with the parking provider’s guidelines.</li>
                                <li>Not engage in any unlawful, disruptive, or damaging behavior while using the parking spaces.</li>
                            </ul>
                        </div>

                        <div id="policy-4">
                            <h3>4. Account Registration</h3>
                            <p>To access certain features of Slotify, you may need to create an account. You agree to:</p>
                            <ul>
                                <li>Provide accurate and truthful information during registration.</li>
                                <li>Maintain the confidentiality of your login credentials and be responsible for all activities that occur under your account.</li>
                                <li>Notify us immediately of any unauthorized use of your account.</li>
                            </ul>
                        </div>

                        <div id="policy-5">
                            <h3>5. Cancellations and Refunds</h3>
                            <p>Slotify’s cancellation and refund policy is as follows:</p>
                            <ul>
                                <li>Cancellation by User: You may cancel a booking before the designated time, subject to the cancellation terms of the parking provider. Any applicable refunds will be processed in accordance with the provider’s policies.</li>
                                <li>Cancellation by Slotify or Parking Provider: We reserve the right to cancel your booking in the event of unforeseen circumstances, such as overbooking or operational issues. In such cases, we will provide a full refund or offer an alternative parking space.</li>
                            </ul>
                        </div>

                        <div id="policy-6">
                            <h3>6. Limitation of Liability</h3>
                            <p>Stultify acts solely as an intermediary between users and parking providers. Therefore:</p>
                            <ul>
                                <li>No Liability for Parking Spaces: Slotify is not liable for any damages, losses, or issues related to the parking space, including but not limited to availability, safety, and conditions of the parking area.</li>
                                <li>No Guarantee: Slotify does not guarantee the availability of parking spaces or that the services will be error-free or uninterrupted.</li>
                                <li>Third-Party Services: Slotify is not responsible for any third-party services or websites that may be linked to or from our platform. We do not control or endorse these third-party services.</li>
                            </ul>
                        </div>

                        <div id="policy-7">
                            <h3>7. Indemnification</h3>
                            <p>You agree to indemnify and hold Slotify, its officers, directors, employees, and affiliates harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or related to your use of our services or violation of these Terms & Conditions.</p>
                        </div>

                        <div id="policy-8">
                            <h3>8. Termination of Services</h3>
                            <p>Slotify reserves the right to terminate or suspend your access to our services at any time, without notice, for any violation of these Terms & Conditions or if we believe you are misusing our platform.</p>
                        </div>
                    </div>





                </div>
            </div>

            <HomeFooter/>
        </>
    )
}

export default Terms;