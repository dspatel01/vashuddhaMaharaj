import React from 'react'
import './home.css';
import updateImage from '../../image/Layout for Front page (1).jpg'

const Home = () => {
  return (
    <>
      <div className='home-container'>

        <div className="cover-text">
          <h1>शुभ प्रभात</h1>
          <p>
            विशुद्धसागर जी का जन्म १८ दिसम्बर १९७१ को भिडं (म.प्र.) मे हुआ था | उनके पिता का नाम राम नारायण जी जैन ( मुनि श्री विश्वजीत सागर जी ) व माता का नाम श्रीमती रत्तीबाई जैन है | आचार्य श्री १०८ विराग सागर जी महाराज द्वारा क्षुल्लक दीक्षा (११ अक्टुबर १९८९ भिडं) , ऐलक दीक्षा (१९ जून १९९१ पन्ना) , मुनि दीक्षा (२१ नवंबर १९९१ श्रेयासं गिरि) एवमं आचार्य पद (३१ मार्च २००७ महावीर जयन्ती औरंगाबाद महाराष्ट्र) प्राप्त किया
          </p>
        </div>

      </div>
      <div className="update-container">
        <div className="update-box">
          <div className="update-content">
            <h3>आज का विचार</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae, veritatis sapiente ex eius sunt, deleniti ea
              earum qui.</p>
            <button>Read more</button>
          </div>
          <div className="update-image">
            <img src={updateImage} alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home