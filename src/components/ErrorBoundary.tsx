import React from 'react';

interface State { hasError: boolean; errorMessage: string; }

export class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  handleRetry = () => {
    this.setState({ hasError: false, errorMessage: '' });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F9F3EC] flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <p className="font-display text-4xl text-[#2A1A0E] mb-4">Oups.</p>
            <p className="text-[#2A1A0E]/60 mb-2">Une erreur inattendue s'est produite.</p>
            {this.state.errorMessage && (
              <p className="text-xs text-[#2A1A0E]/40 font-mono mb-8 bg-[#2A1A0E]/5 px-4 py-2 rounded-xl break-all">
                {this.state.errorMessage}
              </p>
            )}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={this.handleRetry}
                className="px-8 py-3 bg-[#C24C2A] text-[#F5EDE0] rounded-full text-sm font-medium hover:bg-[#D35C38] transition-colors"
              >
                Réessayer
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-3 bg-[#2A1A0E]/10 text-[#2A1A0E] rounded-full text-sm font-medium hover:bg-[#2A1A0E]/20 transition-colors"
              >
                Recharger la page
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
