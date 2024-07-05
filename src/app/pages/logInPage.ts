import { loadHeader } from '../components/shared/header';
import { loadFooter } from '../components/shared/footer';
import { loadFormСomponent } from '../components/shared/formСomponent';


export function loadLogInPage(): Promise<string> {
    return new Promise((resolve) => {
            resolve(`
        ${loadHeader()}
        <section>
            <div class="route-line"><span class="line"></span></div>
            <div class="log-in">
                <h1 class="log-in-title">Log In</h1>
                <form class="log-in-form">
                    <div class="form-input">
                        <label class="form-label" for="username">Username</label>
                        <input class="form-input" type="text" id="username" name="username" placeholder="Username">
                    </div>
                    <div class="form-input">
                        <label class="form-label" for="password">Password</label>
                        <input class="form-input" type="password" id="password" name="password" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <button class="button">Log In</button>
                    </div>
                </form>
            </div>
        </section>
        ${loadFormСomponent()}
        ${loadFooter()}
    `);
    });
}

// <div class="form-input">
// <label for="email"><i class="fa-solid fa-envelope"></i></label>
// <input type="text" id="email" name="email" placeholder="Enter your email address">
// </div>