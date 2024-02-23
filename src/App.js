import { Global } from '@emotion/react'
import { reset } from './styles/reset';
import { Container } from './components/Container/Container';
import Input from './components/Input/Input';
import { List } from './components/List/List';

const App = () => {
  return (
    <div className="App">
      <Global styles={reset} />
      <Container>
        <Input />
        <List />
      </Container>
    </div>
  );
}

export default App;
