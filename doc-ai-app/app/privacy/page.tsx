import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 space-y-6">

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-gray-100 pb-6">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-400">
              Last updated: August 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm leading-relaxed text-gray-600">

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">
              1. Overview
            </h2>
            <p>
              Welcome to <strong>DocAI</strong>. We respect your privacy and are
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, store, and protect your data
              when you use our application.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">
              2. Information We Collect
            </h2>
            <p>
              When you sign in using Google, we may collect the following
              information:
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your Google account identifier</li>
              <li>Files or documents you explicitly select for analysis</li>
            </ul>

            <p className="mt-2">
              We do not collect passwords or access information unrelated to the
              services provided by DocAI.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">
              3. Google OAuth Authentication
            </h2>
            <p>
              DocAI uses Google OAuth solely to authenticate users and provide
              access to application features. We only request permissions
              necessary to operate the application.
            </p>

            <p className="mt-2">
              Basic account information such as your name and email address is
              used to create and manage your account within DocAI.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">
              4. Google Drive Access
            </h2>
            <p>
              If you choose to connect Google Drive, DocAI accesses only the
              files and documents that you explicitly select.
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>We do not browse your entire Google Drive.</li>
              <li>We do not modify or delete your files.</li>
              <li>We do not share your files with third parties.</li>
              <li>
                We access selected documents solely to provide document analysis
                and AI-powered assistance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">
              5. How We Use Your Information
            </h2>

            <p>Your information is used to:</p>

            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Authenticate and identify users</li>
              <li>Provide document analysis features</li>
              <li>Store your chat history and preferences</li>
              <li>Improve application functionality and security</li>
              <li>Respond to support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">
              6. Data Retention
            </h2>

            <p>
              We retain user information only for as long as necessary to
              provide the requested services and comply with legal obligations.
              Information that is no longer required is securely deleted.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">
              7. Data Sharing
            </h2>

            <p>
              We do not sell, rent, or trade your personal information.
              Information is not shared with third parties except when required
              by law or necessary to provide the services requested by the user.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">
              8. Security
            </h2>

            <p>
              We implement reasonable administrative, technical, and
              organizational safeguards to protect user data. Data transmitted
              between your browser and our services is encrypted using secure
              HTTPS connections.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">
              9. Data Deletion & Revoking Access
            </h2>

            <p>
              Users can revoke Google account permissions at any time through
              their Google Account settings.
            </p>

            <p className="mt-2">
              Users may also request deletion of their account and associated
              data by contacting:
            </p>

            <p className="font-medium mt-2">
              devpriya0406@gmail.com
            </p>

            <p className="mt-2">
              Verified deletion requests will be processed within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">
              10. Google API Services Disclosure
            </h2>

            <p>
              DocAI is use and transfer of information received from Google APIs
              adheres to the Google API Services User Data Policy, including the
              Limited Use requirements.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">
              11. Changes to This Policy
            </h2>

            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page along with the updated revision date.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-gray-900">5. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this privacy policy or your personal data, please submit your inquiry through our{" "}
              <Link href="/contact" className="text-blue-600 underline font-medium">
                Support & Privacy Request Form
              </Link>.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-gray-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition"
          >
            <ArrowLeft size={16} />
            Back to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}