// components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section (optional links) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">HandSense</h3>
            <p className="text-sm">
              Real-time gesture recognition and analytics platform.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
              <li><a href="/playback" className="hover:text-white">Playback</a></li>
              <li><a href="/analytics" className="hover:text-white">Analytics</a></li>
              <li><a href="/admin" className="hover:text-white">Admin</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Placeholder icons */}
              <a href="#" className="hover:text-white">🌐</a>
              <a href="#" className="hover:text-white">🐦</a>
              <a href="#" className="hover:text-white">📺</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          Made by <span className="text-white font-semibold">Censored</span> © 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
