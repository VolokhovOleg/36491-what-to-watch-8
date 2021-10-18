import {FILM_DETAILS_TAB_NAMES} from '../../consts';
import withTabs from '../../hocs/withTabs';
import {tabsType} from '../../types';

type Props = JSX.IntrinsicAttributes & tabsType;

function FilmDetailsTabs(props: Props): JSX.Element {
  return (
    <ul className="film-nav__list">
      {
        FILM_DETAILS_TAB_NAMES.map((item: string, index) => (
          <li
            onClick={props.onActiveChange}
            key={item}
            className={`film-nav__item ${props.activeTab === index.toString() ? 'film-nav__item--active' : ''}`}
          >
            <a data-id={index.toString()} className="film-nav__link">{item}</a>
          </li>
        ))
      }
    </ul>
  );
}

export default withTabs(FilmDetailsTabs);
