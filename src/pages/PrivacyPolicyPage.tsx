
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Mail, Phone } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Learn how Awaiting Adventures collects, uses, and protects your personal information. Read our comprehensive privacy policy for travel bookings and services."
        canonicalUrl="/privacy-policy"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="flex items-center hover:text-tripvidya-primary transition-colors">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 font-medium">Privacy Policy</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <div className="bg-tripvidya-dark text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose prose-lg max-w-none">
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-6">
                    <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Awaiting Adventures ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our travel booking services.
                  </p>
                </div>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                  <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Name, email address, and phone number</li>
                    <li>Passport information and travel documents</li>
                    <li>Payment and billing information</li>
                    <li>Travel preferences and special requirements</li>
                    <li>Emergency contact information</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Usage Information</h3>
                  <p className="text-gray-700 mb-4">We automatically collect certain information about your device and usage:</p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Search queries and booking history</li>
                    <li>Device type and operating system</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">We use your information to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Process and manage your travel bookings</li>
                    <li>Provide customer support and assistance</li>
                    <li>Send booking confirmations and travel updates</li>
                    <li>Improve our services and website functionality</li>
                    <li>Send promotional offers and travel recommendations (with your consent)</li>
                    <li>Comply with legal obligations and prevent fraud</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
                  <p className="text-gray-700 mb-4">We may share your information with:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Travel Partners:</strong> Hotels, airlines, and tour operators to fulfill your bookings</li>
                    <li><strong>Payment Processors:</strong> To process your payments securely</li>
                    <li><strong>Service Providers:</strong> Third-party companies that help us operate our business</li>
                    <li><strong>Legal Compliance:</strong> When required by law or to protect our rights</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    We do not sell, trade, or rent your personal information to third parties for marketing purposes.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
                  </p>
                  <p className="text-gray-700">
                    By continuing to use our website, you consent to our use of cookies as described in our Cookie Policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                  <p className="text-gray-700 mb-4">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure payment processing systems</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and employee training</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
                  <p className="text-gray-700 mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Update or correct inaccurate information</li>
                    <li>Request deletion of your personal data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Data portability (receive a copy of your data)</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                  <p className="text-gray-700">
                    We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Booking and payment information may be retained for up to 7 years for accounting and legal purposes.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                  <p className="text-gray-700">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                  <p className="text-gray-700">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-tripvidya-primary mr-3" />
                        <span className="text-gray-700">privacy@awaitingadventures.in</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-tripvidya-primary mr-3" />
                        <span className="text-gray-700">+91 9999999999</span>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-tripvidya-primary mr-3 mt-0.5" />
                        <div className="text-gray-700">
                          <strong>Awaiting Adventures</strong><br />
                          Privacy Officer<br />
                          Delhi, India
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
