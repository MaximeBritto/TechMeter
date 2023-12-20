import techmeterLogo from '../assets/techmeter-logo.svg';

function Bareme({name}) {
  
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <>
<div style={{marginBottom: "0.5rem"}}>
  <h1 style={{color: "#61DAFB", marginBottom: "1.5rem"}}>Reactjs</h1>
  <div style={{display : "flex", justifyContent: 'space-between'}}>
    <p>0 : Inconnu</p>
    <p>1 : Découverte</p>
    <p>2 : Notions basiques</p>
    <p>3 : Notions avancés</p>
    <p>4 : Bonne maitrîse</p>
    <p>Maitrîse totale</p>
  </div>
</div>
    </>
  )
}

export default Bareme

