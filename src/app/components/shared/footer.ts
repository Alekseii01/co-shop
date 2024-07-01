export function loadFooter(): string {
    return `
        <footer>
        <div class="footer-container">
            <div class="footer-section footer-brand">
                <h1>SHOP.CO</h1>
                <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h2>COMPANY</h2>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h2>HELP</h2>
                <ul>
                    <li><a href="#">Customer Support</a></li>
                    <li><a href="#">Delivery Details</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h2>FAQ</h2>
                <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Manage Deliveries</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Payments</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h2>RESOURCES</h2>
                <ul>
                    <li><a href="#">Free eBooks</a></li>
                     <li><a href="#">Development Tutorial</a></li>
                    <li><a href="#">How to - Blog</a></li>
                    <li><a href="#">YouTube Playlist</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
        <span class="line"></span>
        <div class="footer-bottom-content">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div class="payment-icons">
                <div class="footer-badge"><img src="../src/assets/BadgeVisa.png" alt="Visa"></div>
                <div class="footer-badge"><img src="../src/assets/BadgeMaster.png" alt="Mastercard"></div>
                <div class="footer-badge"><img src="../src/assets/BadgePayPal-2.png" alt="PayPal"></div>
                <div class="footer-badge"><img src="../src/assets/BadgeApplePay.png" alt="Apple Pay"></div>
                <div class="footer-badge"><img src="../src/assets/BadgeGooglePay.png" alt="Google Pay"></div>
            </div>
        </div>
        </div>
    </footer>
    `;
}