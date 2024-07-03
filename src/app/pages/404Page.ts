export function load404Page(): Promise<string> {
    return Promise.resolve(`
        <div class="not-found">
            <h1 class="not-found-title">Oops!</h1>
            <h2 class="not-found-sub">404 – Page Not Found</h2>
            <p class="not-found-description">The page you are looking for does not exist.</p>
            <button onclick="window.location.href = '/';" class="button">Go Home</button>
        </div>
    `);
}