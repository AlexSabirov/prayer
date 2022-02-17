import styled from 'styled-components';

import { useAppSelector } from '../../hooks/redux';
import { selectorPrayers } from '../../store/ducks/board/selectors';
import { PrayerItem } from '../prayer-item';

export function PrayersList(): JSX.Element {
  const prayers = useAppSelector(selectorPrayers());

  return (
    <ListWrapper>
      {Object.values(prayers).map((prayer) => {
        return <PrayerItem key={prayer.id} prayer={prayer} />;
      })}
    </ListWrapper>
  );
}

const ListWrapper = styled.View`
  padding: 15px;
  background-color: ${(props) => props.theme.colors.background};
`;
