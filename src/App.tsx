import ProfileCard from './components/ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
function App() {
  return (
    // mx is x marging
    <main className="mx-auto max-w-6xl p-6">
      <div className="mb-6 rounded-lg bg-green-800 p-6">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Personal Digital Assistants
        </h1>
      </div>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProfileCard title="Alexa" handle="@alexa99" img={AlexaImage} description="Built by Google, who knows what it does"/>
        <ProfileCard title="Cortana" handle="@cortana33" img={CortanaImage} description="Built by Microsoft, who knows what it does"/>
        <ProfileCard title="Siri" handle="@siri21" img={SiriImage} description="Built by Apple, who knows what it does"/>
      </section>
    </main>
  )
}

export default App
