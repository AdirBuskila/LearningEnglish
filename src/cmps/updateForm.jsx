export const UpdateForm = (props) => {
  const { updateUser } = props;
  return (
    <form
      onSubmit={updateUser}
      className='action-form flex column align-center'
    >
      <input autoComplete='off' name='fullName' id='fullName' />
      <button className='button-21'>Enter</button>
    </form>
  );
};
