import Register from './components/Register';
import Login from './components/Login';
import SaveData from './components/SaveData';
import ReadData from './components/ReadData';

export default function App() {
  return (
    <div className="p-6 space-y-6">
      <Register />
      <Login />
      <SaveData />
      <ReadData />
    </div>
  );
}