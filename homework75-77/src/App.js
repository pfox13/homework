import './App.css';
import Music from './homework75/Music';
import Square from './homework76/Square';
import Text from './homework77/Text';

function App() {
  return (
    <div className="App">
      <Text />
      <Music
        title="Зеркало (Mirror)"
        artist="The Haters"
        year="2025"
        publisher="OSUMA"
        genre="поп-рок, фолк-рок и инди-рок"
        image="https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F0dfbafcf892879e48df480541945c45e.1000x1000x1.jpg"
        songs={[
          "Важно",
          "Хмурый",
          "На лбу написано",
          "Завяжи мне галаза",
          "Ноги вытирай",
          "Не уходи",
          "Зеркало"
        ]}
      />

      <Square />
      

    </div>
  );
}

export default App;
