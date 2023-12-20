import Constant from '../assets/constants/Constants';
import '../assets/styles/technosList/TechnosList.css';
import ButtonGeneric from './ButtonGeneric';
import { useState, useEffect } from 'react';
import { supabase } from '../supabase';

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
            <td>{data.Module}</td>
            <td>{data.Taux} %</td>
            <td>{data.nb_composant} projets</td>
            <td><ButtonGeneric name={Constant.VIEW_TECHNO} onClick={()=>onClick(data.Module)} style={style}/></td>    
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default TechnosList;
