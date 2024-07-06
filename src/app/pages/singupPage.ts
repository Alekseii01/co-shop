import { loadHeader } from '../components/shared/header';
import { loadFooter } from '../components/shared/footer';
import { loadFormСomponent } from '../components/shared/formСomponent';
import { handleUserRegistration } from '../../app/components/Logic/user/user';

export function singupPage(): Promise<string> {
    return new Promise((resolve) => {
      resolve(`
        ${loadHeader()}
        <section>
          <div class="route-line"><span class="line"></span></div>
          <div class="log-in">
            <h1 class="log-in-title">Sing Up</h1>
                <form id="loginForm" class="log-in-form">
                <div class="form-input">
                    <input type="email" id="registerEmail" placeholder="Email" required />
                    <input type="password" id="registerPassword" placeholder="Password" required />
                </div>
                <div class="form-group">
                    <button type="submit" class="button">Register</button>
                </div>
                </form>
          </div>
        </section>
        ${loadFormСomponent()}
        ${loadFooter()}
      `);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm?.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = (document.getElementById('registerEmail') as HTMLInputElement).value;
      const password = (document.getElementById('registerPassword') as HTMLInputElement).value;
      await handleUserRegistration(email, password);
    });
  });
