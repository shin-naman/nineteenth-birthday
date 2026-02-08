import { Header } from './Header';
import { Footer } from './Footer';

interface LetterPageProps {
  onBack: () => void;
}

export function LetterPage({ onBack }: LetterPageProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#E8E0D5' }}>
      <Header />
      <div className="flex-1 px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <button
            onClick={onBack}
            className="mb-8 px-4 py-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: 'transparent',
              color: '#6B6562',
              fontFamily: "'Cormorant', serif",
              fontSize: '0.95rem',
              border: '1px solid rgba(107, 101, 98, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(232, 228, 223, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            ← Back
          </button>

          {/* Letter container with subtle floral corner accents */}
          <div 
            className="relative px-8 py-12 md:px-16 md:py-16 rounded-sm"
            style={{ 
              backgroundColor: '#FFFCF9',
              boxShadow: '0 2px 20px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)'
            }}
          >
            {/* Subtle floral corner accent - top left */}
            <div 
              className="absolute top-6 left-6 opacity-20"
              style={{ color: '#B8C5B8' }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20C20 15 15 10 10 10C10 15 15 20 20 20Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                <path d="M20 20C20 15 25 10 30 10C30 15 25 20 20 20Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                <path d="M20 20C20 25 15 30 10 30C10 25 15 20 20 20Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3"/>
              </svg>
            </div>

            {/* Subtle floral corner accent - bottom right */}
            <div 
              className="absolute bottom-6 right-6 opacity-20 rotate-180"
              style={{ color: '#D6D3E0' }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20C20 15 15 10 10 10C10 15 15 20 20 20Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                <path d="M20 20C20 15 25 10 30 10C30 15 25 20 20 20Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                <path d="M20 20C20 25 15 30 10 30C10 25 15 20 20 20Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3"/>
              </svg>
            </div>

            {/* Letter content */}
            <div 
              className="space-y-6 relative z-10"
              style={{ 
                fontFamily: "'Cormorant', serif",
                color: '#4A4543',
                fontSize: '1.125rem',
                lineHeight: '1.8'
              }}
            >
              <p className="text-right mb-8" style={{ color: '#6B6562', fontSize: '1rem' }}>
                February 9, 2026
              </p>

              <p style={{ fontFamily: "'Italiana', serif", fontSize: '1.75rem', marginBottom: '2rem' }}>
                Happy Birthday Unc! 
              </p>

              <p>
                You’re pushing 20 now 😆😆. I really hope you had a fantastic birthday weekend and have a fantastic day today. 
              </p>

              <p>
              I got you some Lillies to build for your dorm room that I wish you enjoy making. I was thinking about adding a sketchbook or a notebook to let you know that I like seeing your creations but I know you already have a few of those.   
              </p>

              <p>
              Instead, I decided a meal would be a better option because I know you would enjoy one a lot. I’ve added a couple restaurant recommendations that I think you would like on the next page because I know you have trouble deciding 😆.
              </p>

              <p>
                Anyways, I really hope you have a BANGERT day and celebrate megas. 
              </p>


              <p className="mt-8" style={{ fontFamily: "'Italiana', serif", fontSize: '1.5rem' }}>
                Sorry for the pun (I can’t be toooo nice),<br/>
                <span style={{ marginLeft: '2rem' }}>Naman :)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}