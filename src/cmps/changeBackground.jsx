export const ChangeBackground = () => {
  const changeBackground = (option) => {
    if (option === 0) {
      document.body.classList.remove('bg-1');
      document.body.classList.remove('bg-2');
    }
    if (option === 1) {
      document.body.classList.remove('bg-2');
      document.body.classList.add('bg-1');
    }
    if (option === 2) {
      document.body.classList.remove('bg-1');
      document.body.classList.add('bg-2');
    }
  };

  return (
    <div className='btn-container'>
      <button className='option op1' onClick={() => changeBackground(0)}>
        1
      </button>
      <button className='option op2' onClick={() => changeBackground(1)}>
        2
      </button>
      <button className='option op3' onClick={() => changeBackground(2)}>
        3
      </button>
    </div>
  );
};
