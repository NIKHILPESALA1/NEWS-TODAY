// News data and functionality



class NewsService {
    constructor() {
        this.newsData = {
            breaking: {
                title: "Breaking: Major Development in Global Climate Summit",
                content: "World leaders reach historic agreement on emission reduction targets."
            },
            home: [
                {
                    title: "COVID-19 Update",
                    content: "New vaccine developments show promising results",
                    image: "https://picsum.photos/400/300?random=1"
                },
                {
                    title: "Economic Recovery",
                    content: "Markets show strong growth in Q3",
                    image: "https://picsum.photos/400/300?random=2"
                },
                {
                    title: "Technology Innovation",
                    content: "New breakthrough in quantum computing",
                    image: "https://picsum.photos/400/300?random=3"
                }
            ],
            india: [
                {
                    title: "Infrastructure Development",
                    content: "New metro line inaugurated in Mumbai",
                    image: "https://picsum.photos/400/300?random=4"
                },
                {
                    title: "Education Reform",
                    content: "New education policy implementation begins",
                    image: "https://picsum.photos/400/300?random=5"
                },
                {
                    title: "Agricultural Progress",
                    content: "Record crop production this season",
                    image: "https://picsum.photos/400/300?random=6"
                }
            ],
            world: [
                {
                    title: "International Relations",
                    content: "Historic peace agreement signed",
                    image: "https://picsum.photos/400/300?random=7"
                },
                {
                    title: "Global Economy",
                    content: "World trade shows signs of recovery",
                    image: "https://picsum.photos/400/300?random=8"
                },
                {
                    title: "Climate Change",
                    content: "New environmental protection measures",
                    image: "https://picsum.photos/400/300?random=9"
                }
            ],
            business: [
                {
                    title: "Stock Market Update",
                    content: "Sensex reaches new high",
                    image: "https://picsum.photos/400/300?random=10"
                },
                {
                    title: "Startup Success",
                    content: "Indian startup becomes unicorn",
                    image: "https://picsum.photos/400/300?random=11"
                },
                {
                    title: "Corporate News",
                    content: "Major merger announcement",
                    image: "https://picsum.photos/400/300?random=12"
                }
            ],
            movies: [
                {
                    title: "Box Office Hit",
                    content: "New release breaks records",
                    image: "https://picsum.photos/400/300?random=13"
                },
                {
                    title: "Award Season",
                    content: "Indian film wins international award",
                    image: "https://picsum.photos/400/300?random=14"
                },
                {
                    title: "Celebrity News",
                    content: "Star announces new project",
                    image: "https://picsum.photos/400/300?random=15"
                }
            ],
            science: [
                {
                    title: "Space Exploration",
                    content: "ISRO's new mission announcement",
                    image: "https://picsum.photos/400/300?random=16"
                },
                {
                    title: "Medical Breakthrough",
                    content: "New treatment method discovered",
                    image: "https://picsum.photos/400/300?random=17"
                },
                {
                    title: "Research Development",
                    content: "Scientists make key discovery",
                    image: "https://picsum.photos/400/300?random=18"
                }
            ]
        };
    }

    getNewsByCategory(category) {
        return this.newsData[category] || [];
    }

    getBreakingNews() {
        return this.newsData.breaking;
    }
}