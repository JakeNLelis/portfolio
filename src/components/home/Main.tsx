import face from '../../assets/face.jpg';
import n from '../../assets/n.png';
import j from '../../assets/j.png';

function Main() {
  return (
    <section className="pt-32 pb-20 px-4 bg-black text-white flex flex-col items-center">
      <div className="relative w-full max-w-xl flex justify-center items-center">
        <img
          src={n}
          alt="n"
          className="absolute -left-18 -top-20 w-96 rotate-[-10deg] z-20"
        />
        {/* Face Image */}
        <div className="relative z-10 shadow-lg">
          <img
            src={face}
            alt="face"
            className="w-48 rounded-lg rotate-4"
          />
        </div>
        
        {/* "j" Image */}
        <img
          src={j}
          alt="j"
          className="absolute -right-16 -bottom-20 w-96 rotate-[10deg] z-20"
        />
      </div>
      
      <p className="text-center text-gray-400 max-w-xl mt-20">
        Hi, I'm <b>NJ.</b>, an awwward-winning interactive
        web designer currently doing cool stuff at PiggyVest, and building the Garage.
      </p>
    </section>
  );
}

export default Main;
