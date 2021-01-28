import React from 'react';

const AsyncLoader = ({ children }) => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<span>loading...</span>}>
        {children}
      </React.Suspense>
    </ErrorBoundary>
  )
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default AsyncLoader;
