import React from 'react'
import { Cookie, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Cookie Policy | HLPFL Records',
  description: 'Cookie Policy for HLPFL Records. Learn about how we use cookies and similar tracking technologies.',
}

export default function CookiesPage() {
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
            <Cookie className="w-8 h-8 text-dark" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-400">
            Last Updated: December 17, 2024
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-gold max-w-none">
          <div className="bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-gold/20 rounded-2xl p-8 md:p-12 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies allow websites to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                HLPFL Records uses cookies and similar tracking technologies to enhance your experience on our website, analyze site usage, and assist in our marketing efforts. We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Essential website functionality</li>
                <li>Remembering your preferences and settings</li>
                <li>Understanding how you use our website</li>
                <li>Improving website performance</li>
                <li>Personalizing content and advertisements</li>
                <li>Analyzing traffic and user behavior</li>
                <li>Preventing fraud and enhancing security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">3.1 Strictly Necessary Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
              </p>
              <div className="bg-dark/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Examples:</strong></p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                  <li>Session cookies for authentication</li>
                  <li>Security cookies to prevent fraud</li>
                  <li>Load balancing cookies</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">3.2 Performance Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                These cookies collect information about how visitors use our website, such as which pages are visited most often and if error messages are received. This helps us improve how our website works.
              </p>
              <div className="bg-dark/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Examples:</strong></p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                  <li>Google Analytics cookies</li>
                  <li>Page load time tracking</li>
                  <li>Error reporting cookies</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">3.3 Functionality Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features.
              </p>
              <div className="bg-dark/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Examples:</strong></p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                  <li>Language preference cookies</li>
                  <li>Volume settings for audio players</li>
                  <li>Chatbot conversation history</li>
                  <li>Artist portal preferences</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">3.4 Targeting/Advertising Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
              </p>
              <div className="bg-dark/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Examples:</strong></p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                  <li>Social media advertising cookies</li>
                  <li>Retargeting cookies</li>
                  <li>Ad performance tracking</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In addition to our own cookies, we may use various third-party cookies to report usage statistics, deliver advertisements, and provide enhanced functionality. These third parties may include:
              </p>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">4.1 Analytics Services</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong className="text-white">Google Analytics:</strong> Tracks website usage and generates reports</li>
                <li><strong className="text-white">Cloudflare Analytics:</strong> Monitors website performance and security</li>
              </ul>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">4.2 Social Media Platforms</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong className="text-white">Facebook Pixel:</strong> Tracks conversions and enables targeted advertising</li>
                <li><strong className="text-white">Twitter Analytics:</strong> Measures engagement with shared content</li>
                <li><strong className="text-white">Instagram Insights:</strong> Tracks social media interactions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">4.3 Embedded Content</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong className="text-white">YouTube:</strong> Video player cookies</li>
                <li><strong className="text-white">Spotify:</strong> Music player cookies</li>
                <li><strong className="text-white">SoundCloud:</strong> Audio player cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Cookie Duration</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies can be either "session" cookies or "persistent" cookies:
              </p>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">5.1 Session Cookies</h3>
              <p className="text-gray-300 leading-relaxed">
                These are temporary cookies that expire when you close your browser. They are used to maintain your session while you navigate through our website.
              </p>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">5.2 Persistent Cookies</h3>
              <p className="text-gray-300 leading-relaxed">
                These cookies remain on your device for a set period or until you delete them. They are used to remember your preferences and settings across multiple visits.
              </p>

              <div className="bg-dark/50 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Typical Duration:</strong></p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                  <li>Session cookies: Until browser is closed</li>
                  <li>Preference cookies: 1 year</li>
                  <li>Analytics cookies: 2 years</li>
                  <li>Advertising cookies: 90 days to 1 year</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Managing Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in several ways:
              </p>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">6.1 Browser Settings</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can set your browser to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Delete cookies when you close your browser</li>
                <li>Notify you when a cookie is being set</li>
              </ul>

              <div className="bg-dark/50 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Browser-Specific Instructions:</strong></p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                  <li><strong className="text-white">Chrome:</strong> Settings → Privacy and security → Cookies</li>
                  <li><strong className="text-white">Firefox:</strong> Options → Privacy & Security → Cookies</li>
                  <li><strong className="text-white">Safari:</strong> Preferences → Privacy → Cookies</li>
                  <li><strong className="text-white">Edge:</strong> Settings → Privacy → Cookies</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">6.2 Opt-Out Tools</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                You can opt out of specific types of cookies using these tools:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong className="text-white">Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-gold hover:text-gold-light" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                <li><strong className="text-white">Network Advertising Initiative:</strong> <a href="http://www.networkadvertising.org/choices/" className="text-gold hover:text-gold-light" target="_blank" rel="noopener noreferrer">NAI Opt-Out Tool</a></li>
                <li><strong className="text-white">Digital Advertising Alliance:</strong> <a href="http://www.aboutads.info/choices/" className="text-gold hover:text-gold-light" target="_blank" rel="noopener noreferrer">DAA Opt-Out Tool</a></li>
              </ul>

              <h3 className="text-xl font-semibold text-gold mb-3 mt-6">6.3 Mobile Devices</h3>
              <p className="text-gray-300 leading-relaxed">
                On mobile devices, you can manage cookies through your device settings or by using the "Limit Ad Tracking" (iOS) or "Opt out of Ads Personalization" (Android) features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you choose to disable cookies, some features of our website may not function properly. Specifically, you may experience:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Inability to stay logged into the artist portal</li>
                <li>Loss of personalized settings and preferences</li>
                <li>Reduced website functionality</li>
                <li>Inability to use certain interactive features</li>
                <li>Less relevant content and advertisements</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Please note that strictly necessary cookies cannot be disabled as they are essential for the website to function.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Do Not Track Signals</h2>
              <p className="text-gray-300 leading-relaxed">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no industry standard for how to respond to DNT signals. At this time, our website does not respond to DNT signals, but we are monitoring developments in this area.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Cookies and Personal Data</h2>
              <p className="text-gray-300 leading-relaxed">
                Some cookies may collect personal data, such as your IP address or browsing behavior. This data is processed in accordance with our <Link href="/legal/privacy" className="text-gold hover:text-gold-light">Privacy Policy</Link>. We take appropriate measures to protect this data and use it only for the purposes described in this Cookie Policy and our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Information collected through cookies may be transferred to and stored in countries outside your country of residence, including the United States. These countries may have different data protection laws. By using our website, you consent to the transfer of information to these countries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Updates to This Cookie Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last Updated" date. We encourage you to review this Cookie Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Your Consent</h2>
              <p className="text-gray-300 leading-relaxed">
                By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. If you do not agree to our use of cookies, you should disable cookies in your browser settings or refrain from using our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="mt-4 p-4 bg-dark/50 rounded-lg">
                <p className="text-gray-300">
                  <strong className="text-white">HLPFL Records - Privacy Team</strong><br />
                  Email: privacy@hlpfl.org<br />
                  General Inquiries: contact@hlpfl.org<br />
                  Website: <a href="https://hlpfl.org" className="text-gold hover:text-gold-light">hlpfl.org</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Additional Resources</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For more information about cookies and online privacy, you may find these resources helpful:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><a href="https://www.allaboutcookies.org" className="text-gold hover:text-gold-light" target="_blank" rel="noopener noreferrer">All About Cookies</a></li>
                <li><a href="https://www.youronlinechoices.com" className="text-gold hover:text-gold-light" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
                <li><a href="https://ico.org.uk/for-the-public/online/cookies/" className="text-gold hover:text-gold-light" target="_blank" rel="noopener noreferrer">ICO Cookie Guidance</a></li>
              </ul>
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
            href="/legal/privacy"
            className="p-4 bg-dark-secondary border border-gold/20 rounded-lg hover:border-gold/50 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1">Privacy Policy</h3>
            <p className="text-sm text-gray-400">How we handle your data</p>
          </Link>
          <Link 
            href="/legal/copyright"
            className="p-4 bg-dark-secondary border border-gold/20 rounded-lg hover:border-gold/50 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1">Copyright Policy</h3>
            <p className="text-sm text-gray-400">DMCA and copyright info</p>
          </Link>
        </div>
      </div>
    </div>
  )
}