import './style.css'
import { newsData, jobData } from './mockData.js'

document.querySelector('#app').innerHTML = `
  <nav class="glass">
    <div class="logo-text gradient-text">TEASPARKZZ</div>
    <div class="nav-links">
      <a href="#">News</a>
      <a href="#">Movies</a>
      <a href="#">Elections</a>
      <a href="#">Jobs</a>
    </div>
    <div class="social-links">
      <a href="#" title="Instagram"><img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-instagram-11.png" width="24" style="filter: invert(1)"></a>
      <a href="#" title="Facebook"><img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-facebook-1.png" width="24" style="filter: invert(1)"></a>
      <a href="#" title="YouTube"><img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-youtube-1.png" width="24" style="filter: invert(1)"></a>
    </div>
  </nav>

  <header class="section">
    <h1 class="section-title">Trending <span class="gradient-text">Updates</span></h1>
    <div class="news-grid">
      ${newsData.map(news => `
        <div class="card glass news-card">
          <img src="${news.image}" alt="${news.title}">
          <div class="news-content">
            <span class="category-tag">${news.category}</span>
            <h3 class="news-title">${news.title}</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.5rem;">${news.description}</p>
            <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
              <small style="color: var(--text-secondary)">${news.date}</small>
              <button class="btn-primary" style="padding: 0.4rem 1rem; font-size: 0.8rem;">Read More</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </header>

  <section class="job-section glass">
    <h2 class="section-title">Carrier <span class="gradient-text">Opportunities</span></h2>
    <p style="color: var(--text-secondary); margin-bottom: 2rem;">Join the Teasparkzz team and partner companies. Latest job openings for you.</p>
    <div class="job-list">
      ${jobData.map(job => `
        <div class="job-card">
          <div>
            <h3 style="margin-bottom: 0.25rem;">${job.position}</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">${job.company} • ${job.location}</p>
          </div>
          <div style="text-align: right;">
            <p style="font-weight: 700; color: var(--accent-secondary);">${job.salary}</p>
            <span style="font-size: 0.8rem; background: rgba(255,255,255,0.1); padding: 0.2rem 0.5rem; border-radius: 4px;">${job.type}</span>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <footer class="footer glass">
    <h2 class="logo-text gradient-text" style="font-size: 2.5rem; margin-bottom: 2rem;">TEASPARKZZ</h2>
    <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto 2rem;">Your premium source for news, movie updates, and election coverage. Stay updated, stay ahead.</p>
    <div style="margin-bottom: 2rem;">
      <p style="font-weight: 600; color: var(--text-primary);">Contact Us</p>
      <p style="color: var(--accent-secondary); font-size: 1.2rem;">+91 6380853637</p>
    </div>
    <div class="social-links" style="justify-content: center; gap: 2rem;">
       <a href="#" style="color: white; text-decoration: none;">Instagram</a>
       <a href="#" style="color: white; text-decoration: none;">Facebook</a>
       <a href="#" style="color: white; text-decoration: none;">YouTube</a>
    </div>
    <div style="margin-top: 4rem; color: var(--text-secondary); font-size: 0.8rem;">
      &copy; 2026 Teasparkzz Media Company. All Rights Reserved.
    </div>
  </footer>
`
