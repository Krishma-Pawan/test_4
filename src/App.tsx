import { useState, useMemo } from 'react'
import { districts, historicalSites, HistoricalSite } from './data'
import headerImg from './assets/hi/header.jpg'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filteredSites = useMemo(() => {
    return historicalSites.filter((site: HistoricalSite) => {
      const matchesSearch = site.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           site.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDistrict = selectedDistrict === '' || site.district === selectedDistrict;
      return matchesSearch && matchesDistrict;
    });
  }, [searchTerm, selectedDistrict]);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  }

  return (
    <div className="app-container">
      <header className="header" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${headerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1>Historical Sites of Sri Lanka Guide</h1>
        <p>Explore the rich heritage of the Pearl of the Indian Ocean</p>
      </header>

      <div className="filter-section">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search by city or site name..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="district-filter">
          <select 
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="">All Districts</option>
            {districts.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>
      </div>

      <main className="sites-grid">
        {filteredSites.length > 0 ? (
          filteredSites.map(site => (
            <div key={site.id} className={`site-card ${expandedId === site.id ? 'expanded' : ''}`}>
              <div className="site-image">
                <img src={site.imageUrl} alt={site.name} />
                <div className="district-badge">{site.district}</div>
              </div>
              <div className="site-content">
                <h3>{site.name}</h3>
                <p className="city-label">{site.city}</p>
                <p className="description">{site.description}</p>
                
                <div className="card-actions">
                  <button 
                    className="show-more-btn" 
                    onClick={() => toggleExpand(site.id)}
                  >
                    {expandedId === site.id ? 'Show Less' : 'Show More Info'}
                  </button>
                </div>

                {expandedId === site.id && (
                  <div className="extra-info">
                    <div className="info-section">
                      <h4>How to Visit</h4>
                      <p>{site.howToVisit}</p>
                    </div>
                    <div className="info-section">
                      <h4>Why it's Special</h4>
                      <p>{site.whySpecial}</p>
                    </div>
                    <div className="info-section">
                      <h4>Latest News</h4>
                      <p className="news-text">{site.latestNews}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No historical sites found matching your criteria.</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2026 Historical Sites of Sri Lanka Guide</p>
      </footer>
    </div>
  )
}

export default App
