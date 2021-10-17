import {TabsType} from '../../types';
import FilmDetailsTabs from '../film-details-tabs/film-details-tabs';

type Props = { type: TabsType };

function Tabs({type}: Props): JSX.Element {
  const pickTabs = (type: TabsType): JSX.Element | null => {
    switch (type) {
      case TabsType.FILM_CARD:
        return <FilmDetailsTabs />;
      default:
        return null;
    }
  };

  return (
    <>
      {
        pickTabs(type)
      }
    </>
  );
}

export default Tabs;
