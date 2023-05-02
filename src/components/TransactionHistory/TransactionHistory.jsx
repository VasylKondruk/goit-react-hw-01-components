import PropTypes from 'prop-types';

import {
  TransactionHistoryWrapper,
  Head,
  HeadItem,
  HeadIcon,
  Body,
  BodyItem,
  BodyIcon,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryWrapper>
      <Head>
        <HeadItem>
          <HeadIcon>Type</HeadIcon>
          <HeadIcon>Amount</HeadIcon>
          <HeadIcon>Currency</HeadIcon>
        </HeadItem>
      </Head>

      <Body>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <BodyItem key={id}>
              <BodyIcon>{type}</BodyIcon>
              <BodyIcon>{amount} </BodyIcon>
              <BodyIcon>{currency} </BodyIcon>
            </BodyItem>
          );
        })}
      </Body>
    </TransactionHistoryWrapper>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
