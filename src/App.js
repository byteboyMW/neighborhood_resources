import Banner from "./components/Banner";
import Testimonials from "./components/Testimonial";
import MainNavigate from "./components/MainNavigate";
import InfoComponent from './components/InfoComponent'
import About from "./components/About";
function App() {
  return (
    <div className="se:h-[280vh] sphone:h-[247vh] phone:h-[242vh] h-[268vh] lg:h-[229vh] md:h-[212vh] ipad:h-[220vh] pro:h-[202vh] dt:h-[222vh]">
      
      <div className="bg-gradient-to-r from-teal-600 to-green-500 h-full">
        <div className='mb-10 md:mb-20'>
          <Banner/>
        </div>
        <h1 id="services" className='text-white text-center font-black se:text-2xl text-3xl lg:text-4xl drop-shadow-xl'>What we have to offer:</h1>
        <InfoComponent header='Lawncare' info='With outstanding lawn equipment and experienced individuals at your disposal, the Neighborhood Resources team will always make sure to leave your lawn trimmed, cut, and flawless.' image='lawn_mower.jpg'/>
        <InfoComponent header='Car Washing' info='With our team being highly skilled in the art of car washing, with rates adapting to the size of your car, our team will always make sure to leave your car with looks rivaling that of an actual car wash.' image='car_wash.jpg'/>
        <About/>
        <h1 className='text-white text-center font-black text-3xl lg:text-4xl drop-shadow-xl mt-14'>Testimonials:</h1>
        <Testimonials/>
        <MainNavigate/>
      </div>
    </div>
  );
}

export default App;
