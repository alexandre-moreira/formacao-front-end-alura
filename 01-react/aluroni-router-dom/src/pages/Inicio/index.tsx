import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Temas.module.scss';
import nosaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

export default function Inicio(){
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
  const navigate = useNavigate();
  function RedirecionarParaDetalhes(prato: typeof cardapio[0]){
    navigate(`/prato/${prato.id}`, {state: {prato}, replace: true});
  }
  return(
    <section>
      <h3 className={stylesTema.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button 
              className={styles.recomendado__botao}
              onClick={() => RedirecionarParaDetalhes(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}> Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nosaCasa} alt="Casa do Aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /><br /> Villa Mariana - SP
        </div>
      </div>


    </section>
  );
}