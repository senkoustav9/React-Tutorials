import { Button } from '@mui/material';
import {Settings} from '@mui/icons-material/';
function App() {
  return (
    <div className="App">
      <Button variant="outlined" size='large' startIcon={<Settings/>}>Settings</Button>
    </div>
  );
}
export default App;