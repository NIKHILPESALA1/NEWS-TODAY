// Main application logic
class App {
    constructor() {
        this.newsService = new NewsService();
        this.setupEventListeners();
        this.updateDateTime();
        this.loadContent('home');
    }

    setupEventListeners() {
        // Navigation handling
        document.querySelectorAll('nav a[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.dataset.page;
                this.loadContent(page);
                
                // Update active state
                document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }

    updateDateTime() {
        const updateTime = () => {
            const now = new Date();
            const dateTimeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
            document.getElementById('datetime').textContent = dateTimeString;
        };

        updateTime();
        setInterval(updateTime, 1000);
    }

    loadContent(category) {
        const contentDiv = document.getElementById('content');
        const news = this.newsService.getNewsByCategory(category);
        
        let html = '';
        
        // Add breaking news section only on home page
        if (category === 'home') {
            const breakingNews = this.newsService.getBreakingNews();
            html += `
                <div class="breaking-news">
                    <h2>Breaking News</h2>
                    <p>${breakingNews.title}</p>
                    <p>${breakingNews.content}</p>
                </div>
            `;
        }

        html += '<div class="news-grid">';
        news.forEach(item => {
            html += `
                <div class="news-card">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="content">
                        <h3>${item.title}</h3>
                        <p>${item.content}</p>
                    </div>
                </div>
            `;
        });
        html += '</div>';

        contentDiv.innerHTML = html;
    }
}

// Initialize the application
const app = new App();