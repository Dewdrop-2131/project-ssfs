import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed of auto-sliding in milliseconds
  };


  return (
    <section>
    <div>
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/600x300?text=Image+1" alt="Image 1" style={{ padding: '20px 50px' }}/>
      </div>
      <div>
        <img 
        src="https://via.placeholder.com/600x300?text=Image+2"
        alt="Image 2"
        style={{ padding: '20px' }}
        />
      </div>
      <div>
        <img src="https://via.placeholder.com/600x300?text=Image+3" alt="Image 3" style={{ padding: '20px 50px' }} />
      </div>
      <div>
        <img src="https://via.placeholder.com/600x300?text=Image+4" alt="Image 4" style={{ padding: '20px' }}/>
      </div>
      <div>
        <img src="https://via.placeholder.com/600x300?text=Image+5" alt="Image 5" style={{ padding: '20px 50px' }}/>
      </div>
      <div>
        <img src="https://via.placeholder.com/600x300?text=Image+6" alt="Image 6" style={{ padding: '20px' }}/>
      </div>
        </Slider>
    </div>

    <div>
    <h2 className="above">
        Website Briefing --- Above
    </h2>
    </div>

    <div className="containerF">
      <div className="leftDiv">
      <p style={{ textAlign:"center"}}>Left Content</p>
      <p style={{ textAlign:"left"}}>HIcdbosvbd isv ssvdboavo av sh aohvioashv svfos hvoifshv fsvhiofshvo fshviofsh vofhvi shvio haiovf hsfiohvf</p>
      </div>
      <div className="rightDiv">
      <p style={{ textAlign:"center"}}>Right Content</p>
      <p style={{ textAlign:"left"}}>HIcdbosvbd isv ssvdboavo av sh aohvioashv svfos hvoifshv fsvhiofshvo fshviofsh vofhvi shvio haiovf hsfiohvf</p>
      </div>
    </div>

    <div className="containerC">
      <div className="centerDiv">
      <p>Key Goals</p>
      <ol>
      <li>Adsbohiwadohav vhdisphvhv vsiphvpvh fvhfphv</li>
      <li>vdbisvbowv  dosbvoiV VDSOVHHOSD VDSOHVDS</li>
      <li>VNSOAVIFAPOSVIF VFSPIAVFPIA VHIFPASHVPIH</li>
      </ol>
      </div>
    </div>

    </section>
    
  );
};

export default Home;


//   const images = [
//     'https://picsum.photos/id/1018/800/400',
//     'https://picsum.photos/id/1015/800/400',
//     'https://picsum.photos/id/1025/800/400',
//     'https://picsum.photos/id/1035/800/400',
//     'https://picsum.photos/id/1040/800/400',
//   ];




