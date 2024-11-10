// User authentication handling
import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

class Auth {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.currentUser = null;
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Toggle between login and register forms
        document.getElementById('showRegister').addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#loginForm').parentElement.classList.add('hidden');
            document.getElementById('registerContainer').classList.remove('hidden');
        });

        document.getElementById('showLogin').addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#registerForm').parentElement.classList.add('hidden');
            document.querySelector('#loginForm').parentElement.classList.remove('hidden');
        });

        // Form submissions
        document.getElementById('registerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleRegister();
        });

        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // Logout
        document.getElementById('logout').addEventListener('click', (e) => {
            e.preventDefault();
            this.handleLogout();
        });
    }

    async handleRegister() {
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
    
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
    
        try {
            await Auth.signUp({
                username: email,
                password,
            });
            alert('Registration successful! Please confirm your email before logging in.');
        } catch (error) {
            alert(error.message);
        }
    }

    async handleLogin() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
    
        try {
            const user = await Auth.signIn(email, password);
            this.currentUser = user;
            this.showMainContent();
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    }
    

    handleLogout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        document.getElementById('loginContainer').classList.remove('hidden');
        document.getElementById('mainContainer').classList.add('hidden');
    }

    showMainContent() {
        document.getElementById('loginContainer').classList.add('hidden');
        document.getElementById('mainContainer').classList.remove('hidden');
    }

    checkAuthState() {
        const user = localStorage.getItem('currentUser');
        if (user) {
            this.currentUser = JSON.parse(user);
            this.showMainContent();
        }
    }
}

const auth = new Auth();
auth.checkAuthState();