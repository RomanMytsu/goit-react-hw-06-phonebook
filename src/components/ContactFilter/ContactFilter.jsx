import { useSelector, useDispatch } from 'react-redux';
import {
  FilterContainer,
  FilterInput,
  FilterLabel,
} from './ContactFilter.styled';
import { getFilterValue } from '../../redux/selectors';
import { updateFilter } from '../../redux/filterSlice';

export const ContactFilter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor="nameFilterInput">Find contacts by name</FilterLabel>
      <FilterInput
        id="nameFilterInput"
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterContainer>
  );
};
