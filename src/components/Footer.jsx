import { FaFacebookF, FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";
import { IoNavigateCircle } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-primary w-full">
      <div className="container mx-auto px-6 text-white">
        <div className="py-28">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2">
              <IoNavigateCircle className="text-3xl font-semibold" />
              <h2 className="text-2xl font-semibold">Navigate</h2>
            </div>
            <p className="mt-2 text-lg">
              Your trusted platform for building pathways to a brighter future.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition"
              aria-label="Google"
            >
              <FaGoogle size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition"
              aria-label="Github"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-white/30" />

      <div className="text-center text-white/80 text-sm py-8">
        <p>&copy; {new Date().getFullYear()} Navigate. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
