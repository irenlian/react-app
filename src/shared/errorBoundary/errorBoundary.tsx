import React, { ErrorInfo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import ErrorScreen from '~/shared/errorScreen';

type Props = WithTranslation;

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ hasError: true });
  }

  handleReload = () => this.setState({ hasError: false });

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorScreen onReload={this.handleReload} />;
    }

    return children;
  }
}

export default withTranslation()(ErrorBoundary);
