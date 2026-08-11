import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', margin: '20px', borderRadius: '10px', background: 'rgba(255, 0, 0, 0.1)', color: '#ff4444', border: '1px solid #ff4444', textAlign: 'center' }}>
          <h3>{this.props.fallbackMessage || "3D Graphics Failed to Load"}</h3>
          <p>{this.state.error?.toString()}</p>
          <p style={{fontSize: '14px', marginTop: '10px', color: '#ccc'}}>Try restarting your browser to fix WebGL context issues.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
