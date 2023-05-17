import style from "./Squares.module.css";
import { ChipIcon, CloudIcon, DatabaseIcon } from "@heroicons/react/outline";

const Squares = () => {
  return (
    <div className={style.container}>
      <div className={style.boxContainer}>
        <div className={style.boxNumber1}>
          <div className={style.boxOneContainer}>
            <ChipIcon className={style.chipIcon} />
            <h2 className={style.boxTitle}>Productos de primera linea</h2>
            <span className={style.boxText}>
              Con pinturas de primera calidad y reconocidas a nivel nacional,
              vas a poder tener nuestro catalogo al alcance de tu bolsillo.
            </span>
          </div>
        </div>
        <div className={style.boxNumber2}>
          <div className={style.boxTwoContainer}>
            <CloudIcon className={style.cloudIcon} />
            <h2 className={style.boxTitle}>Los mas elegidos del mercado</h2>
            <span className={style.boxText}>
              Con sucursales en todo el país, nuestros productos son la
              vanguardia a la hora de refaccionar y de darle color a tus
              proyectos.
            </span>
          </div>
        </div>
        <div className={style.boxNumber3}>
          <div className={style.boxThreeContainer}>
            <DatabaseIcon className={style.dataBaseIcon} />
            <h2 className={style.boxTitle}>Accesibilidad total</h2>
            <span className={style.boxText}>
              Si no podes acercarte a nuestras sucursales, nosotros nos
              encargamos de que tengas tus productos desde la comodidad de tu
              hogar.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Squares;
