import PropTypes from 'prop-types';

import {
  StatisticsWrapper,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

import getRandomHexColor from 'components/Utils/Utils';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          const backgroundColor = getRandomHexColor();
          return (
            <Item key={id} backgroundColor={backgroundColor}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </Item>
          );
        })}
      </StatList>
    </StatisticsWrapper>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
