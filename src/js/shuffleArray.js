// iterate backward =>done
// generate a random index => done
// swap elements

const shuffleArray = (stepsArray) => {
  for (let i = stepsArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [stepsArray[i], stepsArray[randomIndex]] = [
      stepsArray[randomIndex],
      stepsArray[i],
    ];
  }
  return stepsArray;
};

export default shuffleArray;
