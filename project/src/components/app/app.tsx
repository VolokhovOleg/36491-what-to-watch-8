import Main from '../main/main';

type Props = {
  title: string,
  genre: string,
  release: string,
};

function App({title, genre, release}: Props): JSX.Element {
  return (
    <Main
      title={title}
      genre={genre}
      release={release}
    />
  );
}

export default App;
