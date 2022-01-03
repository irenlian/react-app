import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import * as Locale from '~/locales/localeKeys';

type Props = {
    hasPadding?: boolean;
};

const ErrorContainer: React.FC<Props> = ({ hasPadding = false }) => {
    const { t } = useTranslation();

    const onReload = () => {
        window.location.reload();
    };

    return (
        <Container hasPadding={hasPadding}>
            <Text>{t(Locale.general.error)}</Text>
            <button type="button" onClick={onReload}>
                {t(Locale.general.reload)}
            </button>
        </Container>
    );
};

export default ErrorContainer;

const Container = styled.div<{ hasPadding: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.hasPadding ? '0 32px' : '0')};
`;

const Text = styled.b`
  margin-bottom: 16px;
`;
