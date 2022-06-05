import React from 'react'

const Info = () => {
  return (
      <footer className="footer">
    
    <div className="footer-sns">
        <div className="design-by">
        <h1>CEMERI</h1>
      <p> Comprometidos con la verdad y el desafío que ella conlleva. 
          </p>
          <p>Nuestra meta es develar al mundo  para una mejor toma de decisiones.</p>
        </div>
        <div className="sns-links">
        <a href="https://www.youtube.com/channel/UCwPa2D5Twn3OA2NPnwGVO_A" target="" rel="noreferrer">
                <i className= "fab fa-youtube youtube"></i>
            </a>
            <a href="https://www.instagram.com/cemerimx/" target="" rel="noreferrer">
                <i className= "fab fa-instagram isntagram"></i>
            </a>
            <a href="https://twitter.com/cemerimx" target="_blank" rel="noreferrer">
                <i className= "fab fa-twitter twitter"></i>
            </a>
            <a href="https://www.facebook.com/CEMERImx" target= "_blank" rel="noreferrer">
                <i className= "fab fa-facebook facebook"></i>
            </a>
        </div>
        <div className="design-by">
        <h3>Diseñado por Jose Alberto Bahena Sosa</h3>
      </div>
        <div className="contact">
          <a className="etica"style={{ textDecoration: 'none' }} href="https://cemeri.org/codigo-etico/">Etica</a>
          <a className="politica" style={{ textDecoration: 'none' }}href="https://cemeri.org/privacy-policy/">Politica</a>
        </div>
    </div>
    </footer>
  )
}

export default Info