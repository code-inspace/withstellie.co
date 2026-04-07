import React from 'react';

interface State { hasError: boolean; }

export class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F9F3EC] flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <p className="font-display text-4xl text-[#2A1A0E] mb-4">Oups.</p>
            <p className="text-[#2A1A0E]/60 mb-8">Une erreur inattendue s'est produite. Recharge la page.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-[#C24C2A] text-[#F5EDE0] rounded-full text-sm font-medium hover:bg-[#D35C38] transition-colors"
            >
              Recharger
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
