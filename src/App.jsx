// src/App.jsx
import MapView from './components/MapView';

function App() {
  return (
    <div className="bg-gray-100">
      <header className="text-center p-4 bg-blue-600 text-white text-xl font-bold">
        🌍 Earthquake Visualizer for Casey
      </header>
      <MapView />
    </div>
  );
}

export default App;