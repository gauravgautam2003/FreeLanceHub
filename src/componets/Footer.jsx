
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";



const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { label: "About Us", page: "about" },
            { label: "Services", page: "services" },
            { label: "Contact", page: "contact" },
        ],
        resources: [
            { label: "How It Works", page: "home" },
            { label: "Success Stories", page: "home" },
            { label: "Help Center", page: "contact" },
        ],
        legal: [
            { label: "Privacy Policy", page: "home" },
            { label: "Terms of Service", page: "home" },
            { label: "Cookie Policy", page: "home" },
        ],
    };

    const socialLinks = [
        { icon: Facebook, label: "Facebook", href: "#" },
        { icon: Twitter, label: "Twitter", href: "#" },
        { icon: Linkedin, label: "LinkedIn", href: "#" },
        { icon: Instagram, label: "Instagram", href: "#" },
    ];

    const contactInfo = [
        { icon: Mail, text: "hello@freelancehub.com" },
        { icon: Phone, text: "+1 (555) 123-4567" },
        { icon: MapPin, text: "San Francisco, CA" },
    ];

    return (
        <footer className="bg-gray-200  text-gray-600 font-bold pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-black text-xl">FreelanceHub</h3>
                        <p className="text-sm leading-relaxed">
                            Connecting businesses with talented developers to create exceptional web experiences.
                        </p>
                        <div className="flex gap-4 pt-4">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full bg-white font-bold text-purple-600 hover:text-white hover:bg-slate-400 flex items-center justify-center"
                                    >
                                        <IconComponent className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-black mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <button
                                        className="text-sm hover:text-purple-500 transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-black mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => onNavigate(link.page)}
                                        className="text-sm hover:text-purple-500 transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-black mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            {contactInfo.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <li key={index} className="flex items-center gap-3">
                                        <IconComponent className="w-4 h-4 text-blue-700 flex-shrink-0" />
                                        <span className="text-sm hover:text-purple-500">{item.text}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>



                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p className="text-purple-600">© {currentYear} FreelanceHub. All rights reserved.</p>
                    <div className="flex gap-6">
                        {footerLinks.legal.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => onNavigate(link.page)}
                                className="hover:text-purple-500 transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer