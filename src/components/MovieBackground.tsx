import React from 'react';

const MovieBackground: React.FC = () => {
  const movies = [
    { title: 'Stranger Things', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'The Crown', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'Bridgerton', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Ozark', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'The Witcher', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Money Heist', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'Squid Game', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'Wednesday', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'You', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'Dark', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'Narcos', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Orange is the New Black', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'House of Cards', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'Black Mirror', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Mindhunter', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'The Umbrella Academy', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'Elite', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Lucifer', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'The Queen\'s Gambit', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'Cobra Kai', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Outer Banks', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'The Good Place', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'Breaking Bad', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Better Call Saul', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'Peaky Blinders', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'The Office', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Friends', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'Riverdale', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'The Walking Dead', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Supernatural', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'Grey\'s Anatomy', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'The Flash', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Arrow', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'Suits', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'Prison Break', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'How to Get Away with Murder', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'Shameless', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'Vikings', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'The 100', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'Teen Wolf', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'American Horror Story', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Dexter', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'Lost', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'Game of Thrones', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Westworld', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'True Detective', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'Sherlock', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Doctor Who', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'The Big Bang Theory', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'How I Met Your Mother', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Modern Family', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'Brooklyn Nine-Nine', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'The Good Doctor', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'This Is Us', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'Stranger Things 2', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'The Crown 2', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Bridgerton 2', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'Ozark 2', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'The Witcher 2', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' },
    { title: 'Money Heist 2', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { title: 'Squid Game 2', image: 'https://images.unsplash.com/photo-1489599735734-79b4fe286040?w=300&h=400&fit=crop' },
    { title: 'Wednesday 2', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="movie-grid w-full h-full p-4" style={{
        gridTemplateColumns: 'repeat(20, minmax(120px, 1fr))',
        gridTemplateRows: 'repeat(15, minmax(80px, 1fr))',
        transform: 'perspective(1000px) rotateX(25deg) rotateY(-45deg) scale(1.2)',
        transformOrigin: 'center center'
      }}>
        {movies.map((movie, index) => (
          <div
            key={index}
            className="movie-card opacity-80 hover:opacity-100 transition-opacity duration-300"
            style={{
              backgroundImage: `url(${movie.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieBackground;