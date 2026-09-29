import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>appPrueba</h1>
        <p>React Mobile Application</p>
      </header>
      <main className="main">
        <section className="welcome">
          <h2>¡Bienvenido a appPrueba!</h2>
          <p>Esta es una aplicación React lista para desarrollar.</p>
          <div className="features">
            <div className="feature">
              <h3>⚛️ React 18</h3>
              <p>Última versión de React con TypeScript</p>
            </div>
            <div className="feature">
              <h3>📱 Mobile First</h3>
              <p>Diseño responsivo optimizado para dispositivos móviles</p>
            </div>
            <div className="feature">
              <h3>🚀 Vite</h3>
              <p>Bundler ultrarrápido para desarrollo</p>
            </div>
            <div className="feature">
              <h3>🧪 Testing</h3>
              <p>Setup completo con Vitest y Testing Library</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2026 appPrueba - Creado con Claude Code + ECC</p>
      </footer>
    </div>
  )
}

export default App
