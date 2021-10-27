import {HeaderType} from '../../consts';
import HeaderSignIn from '../header-sign-in/header-sign-in';
import HeaderDefault from '../header-default/header-default';
import HeaderMyList from '../header-my-list/header-sign-in';

type Props = {headerType: HeaderType};

function Header({headerType}: Props): JSX.Element {
  const renderHeader = (): JSX.Element => {
    switch (headerType) {
      case HeaderType.SIGN_IN:
        return <HeaderSignIn />;
      case HeaderType.MY_LIST:
        return <HeaderMyList />;
      default:
        return <HeaderDefault />;
    }
  };

  return (
    <>
      {
        renderHeader()
      }
    </>
  );
}

export default Header;
