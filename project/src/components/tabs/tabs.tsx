import {TabsType} from '../../types';
import FilmDetailsTabs from '../film-details-tabs/film-details-tabs';

type Props = { type: TabsType };

function Tabs({type}: Props): JSX.Element {
  const pickTabs = (tabsType: TabsType): JSX.Element | null => {
    switch (tabsType) {
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
