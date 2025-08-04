import { 
	FaFacebook, 
	FaTwitter,
	FaInstagram } from 'react-icons/fa'; 
	import { useTheme } from '@/context/themeContext';
	const Footer: React.FC = () => {
	  return (
		<footer className="dark:bg-black dark:text-white py-10">
		  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
			  <h3 className="text-xl font-bold mb-4">Splash App</h3>
			  <p className=" mb-4">
				Your one-stop platform for all your needs. Connecting people, creating opportunities.
			  </p>
			  <p className="space-y-2">© 2024 Splash App. All rights reserved.</p>
			</div>
	
			<div>
			  <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
			  <ul>
				<li className="mb-2">
				  <a href="/about" className=" hover:text-white transition duration-300">
					About Us
				  </a>
				</li>
				<li className="mb-2">
				  <a href="/services" className=" hover:text-white transition duration-300">
					Services
				  </a>
				</li>
				<li className="mb-2">
				  <a href="/contact" className=" hover:text-white transition duration-300">
					Contact Us
				  </a>
				</li>
			  </ul>
			</div>
	
			<div>
			  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
			  <div className="flex space-x-4">
				<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=" hover:text-white transition duration-300">
				  <FaFacebook size={24} />
				</a>
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" hover:text-white transition duration-300">
				  <FaTwitter size={24} />
				</a>
				<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className=" hover:text-white transition duration-300">
				  <FaInstagram size={24} />
				</a>
			  </div>
			</div>
		  </div>
		</footer>
	  );
	}
	
	export default Footer;
	