import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import ParrafN from "../atoms/ParrafN";
import "../../assets/styles/Yo.css"
import Ing1 from "../../assets/img/cesar.png";
import Len1 from "../../assets/img/HTML.png";
import Len2 from "../../assets/img/JS.png";
import Len3 from "../../assets/img/CSS.png";

function Yo(){
    return(
        <>
        <section className="infoIzquierda">

             <div className="cesar">
                <img src={Ing1} alt="" className="imgIng" />
            </div>

            <div className="container_Idi">
            <WrapperInput
            msn="IDIOMA"
            />
            <ParrafN>Ingles; Basico-Medio</ParrafN>
            </div>

            <div className="container_Pas">
            <WrapperInput
            msn="PASATIEMPO"
            />
            <ParrafN>
                Deportes(Futbol)
                Videojuegos
                Ver Videos
                Navegar en Internet
            </ParrafN>
            </div>

            <div className="container_Len">
            <WrapperInput
            msn="LENGUAJES"
            />
            <ParrafN>
                HTML,
                JAVASCRIPT,
                Un Poco de CSS
            </ParrafN>
            <div className="cesar">
                <img src={Len1} alt="" className="imgLen" />
                <img src={Len2} alt="" className="imgLen" />
                <img src={Len3} alt="" className="imgLen" />
            </div>
            </div>
        </section>
        
        <section className="infoDerecha">
            <div className="infoPer">
            <Title>CESAR JOSUE MARTINEZ CASTILLEJOS</Title>
            <ParrafN>
                Tel. 9161146019
            </ParrafN>
            <ParrafN>
                211234@ids.upchiapas.edu.mx
            </ParrafN>
            <ParrafN>
                col. Las Brisas; Suchipas, Chiapas.
            </ParrafN>
            </div>
            
            <div className="perfil">
            <WrapperInput
            msn="PERFIL PROFESIONAL"
            />
            <ParrafN>
                Estudiante de la Carrera para Ign. en Desarrollo de Software,
                 cuersando el 4 cuatrimestre a uno de presentar su estadia.
            </ParrafN>
            </div>

            <div className="expLab">
            <WrapperInput
            msn="EXPERIENCIA LABORAL"
            />
            <ParrafN>
                Fuera de mi ambiete de estudia soy ayudante de Mesero en el Hotel Nututun en vacaciones.
            </ParrafN>
            <ParrafN>
                Dentro, he participado en proyectos para la presentacion al docente de materia en turno o en conjunto.
            </ParrafN>
            </div>

            <div className="forAca">
            <WrapperInput
            msn="FORMACION ACADEMICA"
            />
            <ParrafN>
            Fecha prevista de Finalizacion: 30 de Abril de 2024.
            Universidad Politecnica De Chiapas.
            Ign. en Desarrollo de Software. 
            </ParrafN>
            </div>
        </section>
        </> 
    );
}

export default Yo;