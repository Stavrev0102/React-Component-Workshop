import * as styles from './Country-Capital-Game.module.css'
import { Link } from 'react-router-dom';
import * as countriesService from '../../services/countriesService'
import { useEffect, useState } from "react";


export default function CountryCapitalGame() {
     
        const [data, setData] = useState({});
        const [options, setOptions] = useState([]);
        const [selected, setSelected] = useState(undefined);
      
        useEffect(() => {
          countriesService.getAllCountries().then(res => {
            const fin = delete res[0]._id;
            console.log(res)
            const findalData = { ...res[0] };
            setData(findalData);
      
            const country = Object.keys(findalData);
            const capital = Object.values(findalData);
      
            function randomize() {
              return Math.random() - 0.5;
            }
      
            setOptions(
              [...country, ...capital].map(value => ({
                value,
                state: 'DEFAULT',
              })).sort(randomize)
            );
          });
        }, []);
      
        console.log(data);
        console.log('dd');
      
        const isGameOver = options.length === 0 && Object.keys(data).length > 0;
      
        if (isGameOver) {
          return (
            <>
              <h1>Congratulations!</h1>
              <p className={styles.toCatalog}>
                <Link to={'/catalog'}>To Catalog...</Link>
              </p>
            </>
          );
        }
      
        function onButtonClick(option) {
          if (!selected) {
            setSelected(option);
            setOptions(options.map(opt => (opt === option ? { ...opt, state: 'SELECTED' } : { ...opt, state: 'DEFAULT' })));
          } else {
            if (selected.value === data[option.value] || data[selected.value] === option.value) {
              setOptions(options.filter(opt => !(opt.value === selected.value || opt.value === option.value)));
            } else {
              // wrong combination
              setOptions(
                options.map(opt => (opt.value === selected.value || opt.value === option.value ? { ...opt, state: 'WRONG' } : opt))
              );
            }
            setSelected(undefined);
          }
        }
      
        function setClass(option) {
          if (option.state === 'SELECTED') {
            return 'selected';
          } else if (option.state === 'WRONG') {
            return 'wrong';
          } else {
            return '';
          }
        }
    
    return (

        <div className={styles.button}>
        <h1>Simple Quiz</h1>
        {options.map((option) => (
            // eslint-disable-next-line react/jsx-key
            <button 
            className={ setClass(option)}
            key={option.value}
            onClick={() => onButtonClick(option)}
            >{option.value}</button>
        ) )}
    </div>
    )
    
}