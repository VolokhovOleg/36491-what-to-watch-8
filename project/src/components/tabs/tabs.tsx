import {onChangeTabsHandlerType, TabsType} from '../../types';
import FilmDetailsTabs from '../film-details-tabs/film-details-tabs';

type Props = { type: TabsType, onChangeTabHandler: onChangeTabsHandlerType};

function Tabs({type, onChangeTabHandler}: Props): JSX.Element {
  const pickTabs = (tabsType: TabsType): JSX.Element | null => {
    switch (tabsType) {
      case TabsType.FILM_CARD:
        return <FilmDetailsTabs onChangeTabHandler={onChangeTabHandler} />;
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
