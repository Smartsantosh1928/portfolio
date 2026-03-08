import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";
import emailjs from "@emailjs/browser";
import anim from "../../public/footer/lottie.json"

function Contact() {

    const [focusedField, setFocusedField] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const lottieRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const animation = Lottie.loadAnimation({
            container: lottieRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: anim,
        });
        return () => animation.destroy();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;
        setSubmitting(true);
        setSubmitStatus(null);
        try {
            // Send notification email to you
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: "smartsantosh1928@gmail.com",
                    message: formData.message,
                    user_email: formData.email,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            // Send thank-you email to the visitor
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_THANKYOU_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
        <section id="CONTACT" className="py-24 md:py-32 relative">
            {/* Background accents */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#007AFF] rounded-full opacity-[0.03] blur-[100px]"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#5AC8FA] rounded-full opacity-[0.02] blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-16" data-aos="fade-up">
                    <span className="text-[#007AFF] text-sm font-semibold tracking-widest uppercase">Contact</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Let's Connect</h2>
                    <div className="w-16 h-1 bg-[#007AFF] rounded-full mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - iOS-style contact form */}
                    <div data-aos="fade-right">
                        {/* iOS Notification Style Header */}
                        <div className="ios-card rounded-2xl p-6 mb-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#007AFF] to-[#5AC8FA] rounded-xl flex items-center justify-center text-white font-bold text-sm">S</div>
                                <div>
                                    <div className="text-white font-semibold text-sm">Santosh - iOS Developer</div>
                                    <div className="text-gray-500 text-xs">Zoho Corporation, Tenkasi</div>
                                </div>
                                <span className="ml-auto text-gray-600 text-xs">now</span>
                            </div>
                            <p className="text-gray-400 text-sm">Drop me a message and I'll get back to you as soon as possible. Whether it's a project idea, collaboration, or just a hello!</p>
                        </div>

                        {/* Form styled like iOS settings */}
                        <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="ios-card rounded-2xl overflow-hidden">
                            <div className="border-b border-white/5 p-5 flex items-center gap-4">
                                <label className="text-gray-500 text-sm w-16 flex-shrink-0">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className={`flex-1 bg-transparent text-white outline-none text-sm placeholder-gray-600 ${focusedField === 'name' ? 'placeholder-[#007AFF]/40' : ''}`}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                />
                            </div>
                            <div className="border-b border-white/5 p-5 flex items-center gap-4">
                                <label className="text-gray-500 text-sm w-16 flex-shrink-0">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className={`flex-1 bg-transparent text-white outline-none text-sm placeholder-gray-600 ${focusedField === 'email' ? 'placeholder-[#007AFF]/40' : ''}`}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                />
                            </div>
                            <div className="p-5">
                                <label className="text-gray-500 text-sm mb-2 block">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    className={`w-full bg-transparent text-white outline-none text-sm placeholder-gray-600 resize-none ${focusedField === 'message' ? 'placeholder-[#007AFF]/40' : ''}`}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="mt-6 w-full py-3.5 bg-[#007AFF] text-white rounded-2xl font-semibold hover:bg-[#0056b3] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,122,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {submitStatus === 'success' && (
                            <div className="mt-4 p-4 rounded-xl bg-[#34C759]/10 border border-[#34C759]/20 text-[#34C759] text-sm text-center">
                                Message sent successfully! Check your email for confirmation.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="mt-4 p-4 rounded-xl bg-[#FF3B30]/10 border border-[#FF3B30]/20 text-[#FF3B30] text-sm text-center">
                                Something went wrong. Please try again.
                            </div>
                        )}
                        </form>

                        {/* Quick contact links */}
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <a href="mailto:smartsantosh1928@gmail.com" className="ios-card rounded-xl p-4 flex items-center gap-3 group">
                                <div className="w-8 h-8 bg-[#007AFF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#007AFF]/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#007AFF]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <span className="text-gray-400 text-xs group-hover:text-white transition-colors">Email</span>
                            </a>
                            <a href="https://linkedin.com/in/smartsantosh1928" target="_blank" className="ios-card rounded-xl p-4 flex items-center gap-3 group">
                                <div className="w-8 h-8 bg-[#0A66C2]/10 rounded-lg flex items-center justify-center group-hover:bg-[#0A66C2]/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </div>
                                <span className="text-gray-400 text-xs group-hover:text-white transition-colors">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Right - Lottie Animation */}
                    <div data-aos="fade-left" className="hidden lg:block">
                        <div ref={lottieRef} className="w-full max-w-lg mx-auto"></div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 384 512" fill="currentColor">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                        </svg>
                        <span className="text-gray-500 text-sm">iOS Developer @ Zoho</span>
                    </div>
                    <div className="flex items-center gap-5">
                        <a href="mailto:smartsantosh1928@gmail.com" target="_blank" className="text-gray-500 hover:text-[#007AFF] transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/smartsantosh1928" target="_blank" className="text-gray-500 hover:text-[#0A66C2] transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="https://github.com/smartsantosh1928" target="_blank" className="text-gray-500 hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                        <a href="https://instagram.com/tosh_san03" target="_blank" className="text-gray-500 hover:text-pink-500 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="https://x.com/smartsandy1928" target="_blank" className="text-gray-500 hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                    </div>
                    <span className="text-gray-600 text-sm">
                        Crafted with <span className="text-red-500 animate-pulse">&#9829;</span> by Santosh
                    </span>
                </div>
            </div>
        </footer>
        </>
     );
}

export default Contact;