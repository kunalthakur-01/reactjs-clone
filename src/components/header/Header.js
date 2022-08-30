import './Header.css';

function Header() {
    return (
        <header class="header">
            <h1>React</h1>
            <p>A JavaScript library for building user interfaces</p>
            <div class="link-section">
                <button>Get Started</button>
                <a href="#">Take The Tutorial </a>
            </div>
        </header>
    );
}

export default Header;
