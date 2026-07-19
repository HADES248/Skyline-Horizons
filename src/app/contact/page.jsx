import Image from 'next/image';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    // Fixed mobile viewport shifting by adding svh (Small Viewport Height) support
    <div className="min-h-[calc(100svh-64px)] w-full flex items-center justify-center bg-ink py-10 md:py-0">
      <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center justify-center gap-10 lg:gap-16">
        
        {/* Image Container */}
        <div className="hidden md:block w-full md:w-[46%] shrink-0">
          <div className="relative aspect-[1176/980] w-full rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40 bg-ink-2">
            <Image 
              src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405257/contact-page_mj7iia.png" 
              alt="Contact Skyline Horizons" 
              fill 
              sizes="(max-width: 768px) 100vw, 46vw" 
              quality={100} 
              priority={true} 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Contact Form Card */}
        {/* Added strict min-h to prevent card collapse during initial hydration */}
        <div className="w-full max-w-[430px] min-h-[500px] flex flex-col justify-between p-6 sm:p-8 bg-ink-2 border border-white/[0.06] rounded-2xl shadow-xl shadow-black/30 shrink-0">
          <div>
            <span className="spec-mono text-xs tracking-[0.2em] text-gold uppercase block">Get in touch</span>
            <h1 className="font-display text-2xl font-semibold text-paper mt-2 mb-1">Contact us</h1>
            <p className="text-mist-dim text-sm mb-3">We usually reply within a day.</p>
            
            <ContactForm />
          </div>
          
          <div className="flex flex-col items-center gap-1 pt-4 mt-6 border-t border-white/[0.08]">
            <a href="mailto:SkylineHorizons@gmail.com" className="text-sm text-mist hover:text-gold transition-colors break-all">
              SkylineHorizons@gmail.com
            </a>
            <a href="tel:212-456-7890" className="text-sm text-mist hover:text-gold transition-colors">
              212-456-7890
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
