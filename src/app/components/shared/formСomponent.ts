export function loadFormСomponent(): string {
    return `
        <section class="form-component">
            <div class="form-template">
                <div class="form-title">
                    <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                </div>
            <form class="form">
                <div class="form-input">
                    <label for="email"><i class="fa-solid fa-envelope"></i></label>
                    <input type="text" id="email" name="email" placeholder="Enter your email address">
                </div>
                <button class="subscribe-button" type="submit">Subscribe to Newsletter</button>
            </form>
                </div>

        </section>
    `;
}