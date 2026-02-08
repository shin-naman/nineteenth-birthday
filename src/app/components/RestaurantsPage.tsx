import { Header } from './Header';
import { Footer } from './Footer';

interface RestaurantsPageProps {
  onBack: () => void;
}

interface Restaurant {
  name: string;
  mapUrl: string;
  recommendations: string[];
}

const restaurants: Restaurant[] = [
  {
    name: "DADA DONER (Closed till Tuesday 😔)",
    mapUrl: "https://maps.app.goo.gl/gxhyFjSQG3Xs6ReA6?g_st=i&utm_campaign=ac-im",
    recommendations: [
      "Mix B&L Iskender Kebab",
      "Mix B&L Doner Plate",
      "Mix B&L Doner Sandwich"
    ]
  },
  {
    name: "Kinkao",
    mapUrl: "https://maps.app.goo.gl/5aMhJx3s4X6BZa3H9?g_st=i&utm_campaign=ac-im",
    recommendations: [
      "Green Curry (obviously)",
      "Panang Curry",
      "Thai Iced Tea"
    ]
  },
  {
    name: "Room 38 Restaurant & Lounge",
    mapUrl: "https://maps.app.goo.gl/nGBM3Ezen7AUzvbJ9?g_st=i&utm_campaign=ac-im",
    recommendations: [
      "Classic Benny",
      "Florence B'Fast Bowl",
      "Asian Sesame Salad"
    ]
  },
  {
    name: "Sage",
    mapUrl: "https://maps.app.goo.gl/Zg9VnTrrN1UeoZvYA?g_st=i&utm_campaign=ac-im",
    recommendations: [
      "Avocado Ricotta Toast",
      "Croissant Breakfast Sandwich",
      "Egg & Brisket Bowl"
    ]
  }
];

export function RestaurantsPage({ onBack }: RestaurantsPageProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#EDE7DD' }}>
      <Header />
      <div className="flex-1 px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
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

            <h2 
              className="text-4xl md:text-5xl text-center mb-4"
              style={{ 
                fontFamily: "'Italiana', serif",
                color: '#4A4543'
              }}
            >
              A few places I thought you'd enjoy
            </h2>
            
            <div className="flex justify-center">
              <div 
                className="w-24 h-px"
                style={{ backgroundColor: '#C9BDB8' }}
              />
            </div>
          </div>

          {/* Restaurant cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: index % 2 === 0 ? '#F5F3F0' : '#E8E4DF',
                  border: '1px solid rgba(73, 69, 67, 0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Map link */}
                <a
                  href={restaurant.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-48 flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: index % 2 === 0 ? '#D9CFC1' : '#D6CAB8',
                    color: '#6B6562',
                    fontFamily: "'Cormorant', serif",
                    fontSize: '0.95rem',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#CFC4B5' : '#CCC0AE';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#D9CFC1' : '#D6CAB8';
                  }}
                >
                  <div className="text-center">
                    <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📍</div>
                    <div style={{ fontWeight: 500 }}>View on Google Maps</div>
                  </div>
                </a>

                {/* Content */}
                <div className="p-6">
                  <h3 
                    className="text-2xl mb-5"
                    style={{
                      fontFamily: "'Cormorant', serif",
                      color: '#4A4543',
                      fontWeight: 600
                    }}
                  >
                    {restaurant.name}
                  </h3>

                  <div>
                    <p 
                      className="mb-3"
                      style={{
                        fontFamily: "'Cormorant', serif",
                        color: '#4A4543',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        letterSpacing: '0.3px'
                      }}
                    >
                      I recommend:
                    </p>
                    <ul className="space-y-2">
                      {restaurant.recommendations.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="flex items-start"
                          style={{
                            fontFamily: "'Cormorant', serif",
                            color: '#6B6562',
                            fontSize: '0.95rem',
                            lineHeight: '1.6'
                          }}
                        >
                          <span 
                            className="mr-2 mt-1"
                            style={{ color: index % 2 === 0 ? '#B8C5B8' : '#C9BDB8' }}
                          >
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}