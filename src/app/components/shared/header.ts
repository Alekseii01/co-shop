export function loadHeader(): string {
  return `
        <header>
            <div class="top-nav">
              <h1><a href="/">SHOP.CO</a></h1>
             <div class="bottom-nav">
                  <a href="/"><i class="fas fa-shopping-cart"></i></a>
                  <a href="/login"><i class="fas fa-user"></i></a>
             </div>
            </div>
        </header>
    `;
}
