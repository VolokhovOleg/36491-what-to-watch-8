import {InlineStyleType} from '../../types';

function Error(): JSX.Element {
  const style: InlineStyleType = {
    display: 'flex',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    fontSize: '100px',
  };

  return (
    <h1 style={style}>Page 404</h1>
  );
}

export default Error;
