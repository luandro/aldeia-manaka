import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="error-boundary">
          <div className="error-content">
            <h2>Oops! Algo deu errado</h2>
            <p>Ocorreu um erro inesperado. Por favor, recarregue a página.</p>
            <button 
              onClick={() => window.location.reload()}
              className="error-button"
            >
              Recarregar Página
            </button>
            {process.env.NODE_ENV === 'development' && (
              <details className="error-details">
                <summary>Detalhes do erro (desenvolvimento)</summary>
                <pre>{this.state.error?.toString()}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
