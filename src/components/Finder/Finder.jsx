import { useDispatch, useSelector } from 'react-redux';
// import { setFilter, getFilter } from '../../redux/slice';
import { setFilter, getFilter } from '../../redux/filterSlice';

const Finder = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
      }}
    >
      <label>Find contact by name</label>
      <input
        style={{
          height: '34px',
          background: '#ccd6e3',
          borderRadius: '6px',
          marginLeft: '10px',
        }}
        type="text"
        value={filter}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Finder;
