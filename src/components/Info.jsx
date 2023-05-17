import style from "./Info.module.css";
import kid from "../assets/kid.jpeg";
import { Fade } from "react-awesome-reveal";

const Info = () => {
  return (
    <div className={style.container}>
      <div className={style.infoBox}>
        <Fade cascade damping={0.2}>
          <div className={style.spanImgBox}>
            <div className={style.spanBox}>
              <Fade
                cascade
                damping={0.5}
                onVisibilityChange={1}
                className={style.fadeSpanInfo}
              >
                <span className={style.spanInfo}>
                  Dale rienda suelta a tu imaginación para colorear tu futuro y
                  atrevete a explotar tu lado más artístico.
                </span>
              </Fade>
            </div>
            <img src={kid} alt="" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Info;
