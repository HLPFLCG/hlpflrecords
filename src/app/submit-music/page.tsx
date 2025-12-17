import React from 'react'
import { Music, Upload, Mail, User, Phone, Link as LinkIcon } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata = {
  title: 'Submit Your Music | HLPFL Records',
  description: 'Submit your music to HLPFL Records. We\'re always looking for talented artists to join our revolutionary 50/50 partnership program.',
}

export default function SubmitMusicPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-2xl mb-6">
            <Music className="w-10 h-10 text-dark" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Submit Your Music
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the HLPFL Records family. We're looking for talented artists who are ready to take their career to the next level with our revolutionary 50/50 partnership model.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-dark-secondary p-6 rounded-xl border border-gold/20 text-center">
            <div className="text-3xl font-bold text-gold mb-2">50/50</div>
            <div className="text-sm text-gray-400">Revenue Split</div>
          </div>
          <div className="bg-dark-secondary p-6 rounded-xl border border-gold/20 text-center">
            <div className="text-3xl font-bold text-gold mb-2">24-48h</div>
            <div className="text-sm text-gray-400">Response Time</div>
          </div>
          <div className="bg-dark-secondary p-6 rounded-xl border border-gold/20 text-center">
            <div className="text-3xl font-bold text-gold mb-2">100%</div>
            <div className="text-sm text-gray-400">Rights Retained</div>
          </div>
        </div>

        {/* Submission Form */}
        <div className="bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-gold/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8">Artist Submission Form</h2>
          
          <form className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gold mb-4">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Artist/Stage Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      required
                      className="w-full bg-dark border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      placeholder="Your stage name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="Your legal name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      required
                      className="w-full bg-dark border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      className="w-full bg-dark border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Music Information */}
            <div className="space-y-6 pt-6 border-t border-gray-700">
              <h3 className="text-xl font-semibold text-gold mb-4">Music Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Genre *
                  </label>
                  <select
                    required
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                  >
                    <option value="">Select genre</option>
                    <option value="hip-hop">Hip-Hop/Rap</option>
                    <option value="r&b">R&B/Soul</option>
                    <option value="pop">Pop</option>
                    <option value="rock">Rock</option>
                    <option value="electronic">Electronic</option>
                    <option value="indie">Indie</option>
                    <option value="alternative">Alternative</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Years Active
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="e.g., 3"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Track Title *
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                  placeholder="Name of the track you're submitting"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Music Link (SoundCloud, YouTube, Spotify, etc.) *
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="url"
                    required
                    className="w-full bg-dark border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="https://soundcloud.com/your-track"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Please provide a link to your best work. Private SoundCloud links are accepted.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-6 pt-6 border-t border-gray-700">
              <h3 className="text-xl font-semibold text-gold mb-4">Social Media (Optional)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Instagram
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="@yourusername"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Twitter/X
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="@yourusername"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    TikTok
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="@yourusername"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    YouTube
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="Channel URL"
                  />
                </div>
              </div>
            </div>

            {/* Artist Bio */}
            <div className="space-y-6 pt-6 border-t border-gray-700">
              <h3 className="text-xl font-semibold text-gold mb-4">About You</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Artist Bio *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                  placeholder="Tell us about yourself, your music journey, influences, and what makes you unique..."
                />
                <p className="text-sm text-gray-400 mt-2">
                  Minimum 100 characters. Be authentic and tell your story!
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Why HLPFL Records? *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                  placeholder="Why do you want to work with HLPFL Records? What are your goals?"
                />
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-6 pt-6 border-t border-gray-700">
              <h3 className="text-xl font-semibold text-gold mb-4">Additional Materials (Optional)</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Press Kit / EPK
                </label>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-gold/50 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-2">
                    Drop your press kit here or click to browse
                  </p>
                  <p className="text-sm text-gray-400">
                    PDF, DOC, or ZIP (Max 10MB)
                  </p>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.zip"
                    className="hidden"
                  />
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="pt-6 border-t border-gray-700">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-5 h-5 rounded border-gray-700 bg-dark text-gold focus:ring-gold focus:ring-offset-dark"
                />
                <span className="text-sm text-gray-300">
                  I confirm that I own the rights to the music I'm submitting and agree to HLPFL Records' 
                  <a href="/legal/terms" className="text-gold hover:text-gold-light ml-1">Terms of Service</a> and 
                  <a href="/legal/privacy" className="text-gold hover:text-gold-light ml-1">Privacy Policy</a>.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-gold to-gold-dark text-dark font-bold text-lg py-4"
              >
                <Music className="mr-3 h-6 w-6" />
                Submit Your Music
              </Button>
              <p className="text-center text-sm text-gray-400 mt-4">
                We review all submissions within 24-48 hours. You'll receive an email with our decision.
              </p>
            </div>
          </form>
        </div>

        {/* What Happens Next */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Submit</h3>
              <p className="text-sm text-gray-400">
                Fill out the form and submit your best work
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Review</h3>
              <p className="text-sm text-gray-400">
                Our A&R team reviews your submission
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Response</h3>
              <p className="text-sm text-gray-400">
                Receive feedback within 24-48 hours
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Partner</h3>
              <p className="text-sm text-gray-400">
                If selected, we'll discuss next steps
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 bg-dark-secondary border border-gold/20 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gold mb-2">
                What genres do you accept?
              </h3>
              <p className="text-gray-300">
                We're open to all genres! While we have a strong presence in Hip-Hop and R&B, we're always looking for talented artists across all musical styles.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gold mb-2">
                Do I need to be signed to submit?
              </h3>
              <p className="text-gray-300">
                No! We accept submissions from both signed and unsigned artists. If you're currently signed, please ensure you have the rights to submit your music.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gold mb-2">
                What's the 50/50 partnership model?
              </h3>
              <p className="text-gray-300">
                Unlike traditional record deals, we split revenue 50/50 with our artists. You retain 100% of your rights and creative control while we handle distribution, marketing, and promotion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gold mb-2">
                How long does the review process take?
              </h3>
              <p className="text-gray-300">
                We review all submissions within 24-48 hours. You'll receive an email with our decision and next steps if we're interested in working together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}