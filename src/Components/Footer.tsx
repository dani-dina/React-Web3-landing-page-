const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">YourCompany</h2>
          <p className="text-gray-400">
            Building solutions that matter. Empowering innovation every step of the way.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-md font-semibold mb-2">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-md font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">Twitter</a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-300">GitHub</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
