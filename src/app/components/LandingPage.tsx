import { Header } from './Header';
import { Footer } from './Footer';

interface LandingPageProps {
  onNavigate: (page: 'letter' | 'restaurants') => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#EDE7DD' }}>
      <Header />
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center space-y-12">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl tracking-wide"
              style={{ 
                fontFamily: "'Italiana', serif",
                color: '#4A4543',
                lineHeight: '1.3'
              }}
            >
              Happy 19th Birthday Emma!
            </h1>
            
            {/* Subtle underline accent */}
            <div className="flex justify-center pt-2">
              <div 
                className="w-32 h-px"
                style={{ backgroundColor: '#C9BDB8' }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8">
            <button
              onClick={() => onNavigate('letter')}
              className="px-8 py-3 rounded-full transition-all duration-300 w-full sm:w-auto"
              style={{
                backgroundColor: '#E8E4DF',
                color: '#4A4543',
                fontFamily: "'Cormorant', serif",
                fontSize: '1.05rem',
                fontWeight: 500,
                letterSpacing: '0.3px',
                border: '1px solid rgba(73, 69, 67, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E6D5D3';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#E8E4DF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Click here if you got your present
            </button>

            <button
              onClick={() => onNavigate('restaurants')}
              className="px-8 py-3 rounded-full transition-all duration-300 w-full sm:w-auto"
              style={{
                backgroundColor: '#E8E4DF',
                color: '#4A4543',
                fontFamily: "'Cormorant', serif",
                fontSize: '1.05rem',
                fontWeight: 500,
                letterSpacing: '0.3px',
                border: '1px solid rgba(73, 69, 67, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E6D5D3';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#E8E4DF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Click here for restaurant recs
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}