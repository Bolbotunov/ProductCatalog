import { Component, ErrorInfo, PropsWithChildren } from 'react';

import ErrorFallback from '../ErrorFallback';

export type BoundaryState = {
  hasError: boolean;
  error: Error | null;
};

export class ErrorBoundary extends Component<PropsWithChildren, BoundaryState> {
  state: BoundaryState = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): BoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback error={this.state.error!} onRetry={this.handleReset} />
      );
    }

    return this.props.children;
  }
}
