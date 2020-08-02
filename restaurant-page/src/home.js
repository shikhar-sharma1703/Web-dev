const homepage = (contentDiv) => {
    let pageContent = document.createElement('div');
    pageContent.innerHTML = `
    <header>
            <a class="logo" href="/"><img src="logo.png" alt="logo"></a>
            <nav id="navbar">
                <ul class="nav__links">
                   <li><a href=""> Home</a></li>
                   <li><a href=""> Menu</a></li>
                   <li><a href=""> Contact</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section class="info">
                <div class="info-card">
                    <h1><span class="hero__font">SOME SHIT ABOUT HOW AMAZING THIS RESTUARANT IS.</h1>
                </div>
            </section>
        </main>
        `
    contentDiv.appendChild(pageContent);
}

export default homepage