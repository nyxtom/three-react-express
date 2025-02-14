import { Box } from './components/Box';
import { ThreeProvider } from './contexts/three-provider';

function App() {
  return (
    <ThreeProvider>
      <Box />
    </ThreeProvider>
  );
}

export default App;
