import { useEffect, useState } from 'react';
import styles from './app.module.css';
import data from './data.json';
const firstStep = Number(data[0].id);
const lastStep = Number(data[data.length - 1].id);
const listItemStyles = (id, activeStep) => {
  return `${styles['steps-item']} ${id <= activeStep ? styles.done : null} ${
    id == activeStep ? styles.active : null
  }`;
}; //вынес формирование стилей в отдельную функцию, чтобы был более компактный код в компоненте

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const returnToStart = () => {
    setActiveStep(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>
            {data.find(({ id }) => id == activeStep)?.content ||
              'Нажмите начать для просмотра рецепта!'}
          </div>
          <ul className={styles['steps-list']}>
            {data.map(({ id, title }) => (
              <li className={listItemStyles(id, activeStep)} key={id}>
                <button
                  className={styles['steps-item-button']}
                  onClick={() => {
                    setActiveStep(Number(id));
                  }}
                >
                  {Number(id)}
                </button>
                {title}
              </li>
            ))}
          </ul>
          <div className={styles['buttons-container']}>
            <button
              className={styles.button}
              onClick={previousStep}
              disabled={activeStep <= firstStep}
            >
              Назад
            </button>
            <button
              className={styles.button}
              onClick={activeStep !== lastStep ? nextStep : returnToStart}
            >
              {activeStep === 0
                ? 'Начать'
                : activeStep !== lastStep
                ? 'Далее'
                : 'Начать с начала'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
