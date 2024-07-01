export function loadHero(): string {
    return `
        <section class="hero">
            <div class="hero-template">
                <div class="hero-text">
                    <div class="hero-title">
                    <h1>FIND </h1><h1 class="hero-title-highlight">ANYTHING</h1><h1> THAT MATCHES YOUR STYLE</h1>
                    <p class="hero-description">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style</p>
                    <button class="button">Shop Now</button>
                    </div>
                    <div class="hero-subtitle">
                        <div class="subtitle-item">
                         <h2>200+</h2>
                         <p>International Brands</p>
                        </div>
                        <span class="subtitle-line"></span>
                        <div class="subtitle-item">
                         <h2>2,000+</h2>
                         <p>High-Quality Products</p>
                        </div>
                        <span class="subtitle-line"></span>
                        <div class="subtitle-item">
                         <h2>30,000+</h2>
                         <p>Happy Customers</p>
                    </div>
                </div>
                </div>
                <div class="hero-image">
                    <img src="src/assets/hero-image.png" alt="hero image">
                </div>
            </div>
            <div class="hero-brands">
            <div class="brand-list">
            <div class="brand-item">
                <img src="src/assets/versage.svg" alt="versage">
            </div>
            <div class="brand-item">
                <img src="src/assets/calvinklein.svg" alt="versace">
            </div>
            <div class="brand-item">
                <img src="src/assets/gucci.svg" alt="gucci">
            </div>
            <div class="brand-item">
                <img src="src/assets/prada.svg" alt="valentino">
            </div>
            <div class="brand-item">
                <img src="src/assets/zara.svg" alt="chanel">
            </div>
            </div>
            </div>
        </section>
    `;
}
