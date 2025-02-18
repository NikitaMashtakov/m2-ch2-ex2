import { useEffect, useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

function App() {
  const [activeStep, setActiveStep] = useState('');
  const firstStep = '001';
  const lastStep = '007';
  const nextStep = (id) => {};
  const previousStep = () => {};
  const returnToStart = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>
            {data.find(({ id }) => id == activeStep)?.content || null}
          </div>
          <ul className={styles['steps-list']}>
            {data.map(({ id, title }) => (
              <li
                className={
                  styles['steps-item'] + ' ' + (id <= activeStep ? styles.done : null)
                }
                key={id}
              >
                <button
                  className={styles['steps-item-button']}
                  onClick={() => {
                    setActiveStep(id);
                  }}
                >
                  {Number(id)}
                </button>
                {title}
              </li>
            ))}
          </ul>
          <div className={styles['buttons-container']}>
            <button className={styles.button} disabled={activeStep === firstStep}>
              Назад
            </button>
            <button className={styles.button}>
              {activeStep !== lastStep ? 'Далее' : 'Начать с начала'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
