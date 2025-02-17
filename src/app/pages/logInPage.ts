import { loadHeader } from '../components/shared/header';
import { loadFooter } from '../components/shared/footer';
import { loadFormСomponent } from '../components/shared/formСomponent';
import { handleUserLogin } from '../../app/components/Logic/user/user';

export function loadLogInPage(): Promise<string> {
    return new Promise((resolve) => {
      resolve(`
        ${loadHeader()}
        <section>
          <div class="route-line"><span class="line"></span></div>
          <div class="log-in">
            <h1 class="log-in-title">Log In</h1>
                <form id="loginForm" class="log-in-form">
                <div class="form-input">
                    <input type="email" id="loginEmail" placeholder="Email" required />
                    <input type="password" id="loginPassword" placeholder="Password" required />
                </div>
                <div class="form-group">
                    <button type="submit" class="button">Log In</button>
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
      const email = (document.getElementById('loginEmail') as HTMLInputElement).value;
      const password = (document.getElementById('loginPassword') as HTMLInputElement).value;
      await handleUserLogin(email, password);
    });
  });
