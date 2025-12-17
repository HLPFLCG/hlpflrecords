import React from 'react'
import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | HLPFL Records',
  description: 'Privacy Policy for HLPFL Records. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/"
          className="inline-flex items-center text-gold hover:text-gold-light mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-xl mb-6">
            <Shield className="w-8 h-8 text-dark" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400">
            Last Updated: December 17, 2024
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-gold max-w-none">
          <div className="bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-gold/20 rounded-2xl p-8 md:p-12 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                HLPFL Records ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website hlpfl.org and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">2.1 Personal Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Submit music or apply to become an artist</li>
                <li>Register for an artist portal account</li>
                <li>Request music licensing information</li>
                <li>Contact us through our contact form</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Interact with our chatbot</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                This information may include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Name (legal and stage name)</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Social media handles</li>
                <li>Music samples and press materials</li>
                <li>Payment information (for licensing)</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages visited and time spent</li>
                <li>Device information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">2.3 Cookies and Tracking Technologies</h3>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that are sent to your browser from a website and stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Processing and evaluating artist submissions</li>
                <li>Managing artist accounts and providing portal access</li>
                <li>Processing licensing requests and payments</li>
                <li>Responding to inquiries and providing customer support</li>
                <li>Sending administrative information and updates</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Preventing fraud and enhancing security</li>
                <li>Complying with legal obligations</li>
                <li>Marketing and promotional communications (with consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. How We Share Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">4.1 With Your Consent</h3>
              <p className="text-gray-300 leading-relaxed">
                We may share your information with third parties when you have given us explicit consent to do so.
              </p>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">4.2 Service Providers</h3>
              <p className="text-gray-300 leading-relaxed">
                We may share your information with third-party service providers who perform services on our behalf, such as:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Payment processing</li>
                <li>Email delivery services</li>
                <li>Analytics providers</li>
                <li>Cloud storage providers</li>
                <li>Customer support tools</li>
              </ul>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">4.3 Business Transfers</h3>
              <p className="text-gray-300 leading-relaxed">
                If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </p>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">4.4 Legal Requirements</h3>
              <p className="text-gray-300 leading-relaxed">
                We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
              </p>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">4.5 Protection of Rights</h3>
              <p className="text-gray-300 leading-relaxed">
                We may disclose your information when we believe it is necessary to protect our rights, your safety, or the safety of others, investigate fraud, or respond to a government request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Retention periods vary depending on the type of information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Artist submissions: 2 years from submission date</li>
                <li>Artist contracts: Duration of contract + 7 years</li>
                <li>Licensing agreements: Duration of license + 7 years</li>
                <li>Contact inquiries: 1 year from last contact</li>
                <li>Analytics data: 26 months</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Privacy Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">7.1 Access and Portability</h3>
              <p className="text-gray-300 leading-relaxed">
                You have the right to request access to the personal information we hold about you and to receive a copy of that information in a portable format.
              </p>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">7.2 Correction</h3>
              <p className="text-gray-300 leading-relaxed">
                You have the right to request that we correct any inaccurate or incomplete personal information.
              </p>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">7.3 Deletion</h3>
              <p className="text-gray-300 leading-relaxed">
                You have the right to request that we delete your personal information, subject to certain exceptions (e.g., legal obligations).
              </p>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">7.4 Objection and Restriction</h3>
              <p className="text-gray-300 leading-relaxed">
                You have the right to object to or request restriction of certain processing of your personal information.
              </p>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">7.5 Withdraw Consent</h3>
              <p className="text-gray-300 leading-relaxed">
                Where we rely on your consent to process your personal information, you have the right to withdraw that consent at any time.
              </p>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">7.6 Opt-Out of Marketing</h3>
              <p className="text-gray-300 leading-relaxed">
                You can opt out of receiving marketing communications from us at any time by clicking the "unsubscribe" link in our emails or contacting us directly.
              </p>

              <p className="text-gray-300 leading-relaxed mt-6">
                To exercise any of these rights, please contact us at contact@hlpfl.org. We will respond to your request within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. If you are located outside the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there. By submitting your information, you consent to this transfer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website is not intended for children under the age of 13 (or 16 in the European Economic Area). We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Third-Party Links</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. California Privacy Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Right to know what personal information is collected, used, shared, or sold</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising your rights</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                We do not sell your personal information. To exercise your CCPA rights, please contact us at contact@hlpfl.org.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. GDPR Compliance (European Users)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Rights related to automated decision-making</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Our legal basis for processing your personal information includes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Consent: When you have given explicit consent</li>
                <li>Contract: When processing is necessary for a contract with you</li>
                <li>Legal obligation: When we must comply with the law</li>
                <li>Legitimate interests: When we have a legitimate business interest</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-dark/50 rounded-lg">
                <p className="text-gray-300">
                  <strong className="text-white">HLPFL Records - Privacy Team</strong><br />
                  Email: contact@hlpfl.org<br />
                  General Inquiries: contact@hlpfl.org<br />
                  Website: <a href="https://hlpfl.org" className="text-gold hover:text-gold-light">hlpfl.org</a>
                </p>
              </div>
            </section>

          </div>
        </div>

        {/* Related Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link 
            href="/legal/terms"
            className="p-4 bg-dark-secondary border border-gold/20 rounded-lg hover:border-gold/50 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1">Terms of Service</h3>
            <p className="text-sm text-gray-400">Our terms and conditions</p>
          </Link>
          <Link 
            href="/legal/copyright"
            className="p-4 bg-dark-secondary border border-gold/20 rounded-lg hover:border-gold/50 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1">Copyright Policy</h3>
            <p className="text-sm text-gray-400">DMCA and copyright info</p>
          </Link>
          <Link 
            href="/legal/cookies"
            className="p-4 bg-dark-secondary border border-gold/20 rounded-lg hover:border-gold/50 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1">Cookie Policy</h3>
            <p className="text-sm text-gray-400">How we use cookies</p>
          </Link>
        </div>
      </div>
    </div>
  )
}