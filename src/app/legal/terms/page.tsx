import React from 'react'
import { FileText, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | HLPFL Records',
  description: 'Terms of Service for HLPFL Records. Read our terms and conditions for using our services.',
}

export default function TermsPage() {
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
            <FileText className="w-8 h-8 text-dark" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400">
            Last Updated: December 17, 2024
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-gold max-w-none">
          <div className="bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-gold/20 rounded-2xl p-8 md:p-12 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using the HLPFL Records website and services ("Services"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily access the materials (information or software) on HLPFL Records' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>Attempt to decompile or reverse engineer any software contained on HLPFL Records' website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Artist Agreements</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Artists who sign with HLPFL Records enter into a separate artist agreement that outlines:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Revenue sharing arrangements (50/50 partnership model)</li>
                <li>Rights retention and ownership</li>
                <li>Distribution and marketing responsibilities</li>
                <li>Term length and renewal options</li>
                <li>Termination conditions</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                All artist agreements are negotiated individually and supersede these general terms for signed artists.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Music Licensing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Music licensing through HLPFL Records is subject to separate licensing agreements. By requesting a license, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Use the licensed music only as specified in your license agreement</li>
                <li>Pay all fees as outlined in your license</li>
                <li>Provide proper attribution as required</li>
                <li>Not sublicense or transfer rights without written permission</li>
                <li>Comply with all territory and usage restrictions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of HLPFL Records or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of HLPFL Records.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. User Submissions</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you submit music, content, or other materials to HLPFL Records:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>You retain all ownership rights to your submissions</li>
                <li>You grant us a non-exclusive license to review and evaluate your submissions</li>
                <li>You warrant that you own or have the necessary rights to submit the materials</li>
                <li>You agree that your submissions do not infringe on any third-party rights</li>
                <li>We are not obligated to accept, review, or respond to any submission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-300 leading-relaxed">
                Your use of HLPFL Records' Services is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                The materials on HLPFL Records' website are provided on an 'as is' basis. HLPFL Records makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Limitations</h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall HLPFL Records or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HLPFL Records' website, even if HLPFL Records or a HLPFL Records authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Accuracy of Materials</h2>
              <p className="text-gray-300 leading-relaxed">
                The materials appearing on HLPFL Records' website could include technical, typographical, or photographic errors. HLPFL Records does not warrant that any of the materials on its website are accurate, complete, or current. HLPFL Records may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Links</h2>
              <p className="text-gray-300 leading-relaxed">
                HLPFL Records has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by HLPFL Records of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Modifications</h2>
              <p className="text-gray-300 leading-relaxed">
                HLPFL Records may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-dark/50 rounded-lg">
                <p className="text-gray-300">
                  <strong className="text-white">HLPFL Records</strong><br />
                  Email: legal@hlpfl.org<br />
                  Website: <a href="https://hlpfl.org" className="text-gold hover:text-gold-light">hlpfl.org</a>
                </p>
              </div>
            </section>

          </div>
        </div>

        {/* Related Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
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