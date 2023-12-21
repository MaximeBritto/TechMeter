import Constant from '../assets/constants/Constants';
import '../assets/styles/technosList/TechnosList.css';
import ButtonGeneric from './ButtonGeneric';
import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import chevron from '../assets/chevron.svg'

/**
 * Tableau de données avec les technos et leurs pourcentages.
 * Il prend en paramétre : datas: données du tableau, onClick: execution, style: style personnalisable du bouton.
 * @param {datas, onClick, style} props 
 * @returns une liste de technos.
 */
const TechnosList = (props) => {
  const [moduleInfos, setModuleInfo] = useState([]);
  // eslint-disable-next-line react/prop-types
  const { datas, onClick, style } = props;
  
  useEffect(() => {
    async function getModuleInfos() {
        const { data, error } = await supabase
            .from('ModuleTable')
            .select('*');
        if (error) {
            console.error(error);
        } else {
          setModuleInfo(data || []);
        }
    }
    getModuleInfos();
}, []);
console.log(moduleInfos);
  
return (
  <table>
    <tbody>
      {moduleInfos?.map((data, index) => (
        <tr key={index}>
          <td
            style={{
              maxWidth: "2rem",
              padding: "0.5rem",
            }}
          >
            <img style={{ width: "80%" }} src={data.logo_URL}></img>
          </td>
          <td>{data.Module}</td>
          <td>{data.Taux} %</td>
          <td>{data.nb_composant} projets</td>
          <td>
            <button style={{background: 'none', border: 'none'}} onClick={() => onClick(data.Module)}>
              <img style={{}} src={chevron}></img>
            </button>  
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
};


export default TechnosList;
