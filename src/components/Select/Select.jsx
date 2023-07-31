import styled from 'styled-components';

const StyledSelect = styled.select`
  background-color: ${ props => props?.$colors?.background || 'var(--white)' };
  border: 0;
  color: ${ props => props?.$colors?.secondary || 'var(--black)' };
  cursor: pointer;

  &:focus-visible {
    outline: none;
  }

  &>option {
    background-color: ${ props => props?.$colors?.primary || 'var(--white)' };
    cursor: pointer;
  }

  &>option:checked {
    background-color: ${ props => props?.$colors?.secondary || 'var(--white)' };
    color:  ${ props => props?.$colors?.primary || 'var(--black)' };
    cursor: pointer;
  }
`;

function onChangeHandler(e, options, callback) {
  const { selectedIndex } = e.target;
  return callback(options[selectedIndex]);
}

function Select(props) {
  const { selectedKey, defaultMessage, data, onChangeHandler: callback, colors } = props;
  const options = [...data];
  if (!selectedKey) {
    options.unshift({ key: '', value: defaultMessage });
  }

  console.log('options', options)

  return (
    <StyledSelect
      defaultValue={ selectedKey && selectedKey.key || selectedKey }
      onChange={ (e) => onChangeHandler(e, options, callback) }
      $colors={ colors }
    >
      { options.map((opt) =>
        <option key={ opt.key } value={ opt.key }>
          { opt.value }
        </option>)
      }
    </StyledSelect>
  );
}

export default Select;