import { useState } from "react";
import "./services.css";

const Services = () => {
  const[toggleState, setToggleState] = useState(0);

  const toggleTab = (index) =>{
    setToggleState(index)
  }
  return (
    <section className="Services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? " services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                works to my Clients and Companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I develop User Interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">Web page Development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I create UX element interations.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I position your Company Brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for compaines.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? " services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title"> Ui/Ux Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                works to my Clients and Companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I develop User Interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">Web page Development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I create UX element interations.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I position your Company Brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for compaines.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? " services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                works to my Clients and Companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I develop User Interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">Web page Development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I create UX element interations.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    I position your Company Brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for compaines.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
