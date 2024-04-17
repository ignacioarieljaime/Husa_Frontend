import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useOutsideClick from 'hooks/useOutsideClick';
import React, { useRef, useState } from 'react';

function PurchasedFromSelectBox({
  required = true,
  title,
  options,
  onChange,
  className = '',
  placeholder,
  dataSchemaValue
}) {
  const optionBox = useRef();
  const [showSearchList, setShowSearchList] = useState(false);
  const [value, setValue] = useState(title);
  useOutsideClick(optionBox, () => setShowSearchList(false)); // Close dropdown when clicking outside

  const listGenerator = _options => {
    return _options && Array.isArray(_options) ? (
      <>
        {_options.map((item, index) => (
          <li
            onClick={() => {
              onChange(item);
              setValue(item);
              setShowSearchList(false); // Close the dropdown after selecting an option
            }}
            key={index}>
            <label className='option' htmlFor='tv' aria-hidden='aria-hidden'>
              {item}
            </label>
          </li>
        ))}
      </>
    ) : null;
  };

  return (
    <div className={`custom-select-box ${className}`}>
      <div className={`form-container-inner-input select-container ${className}`} tabIndex='1'>
        <div className={`select-box-item ${className}`}>
          <input
            className='input'
            type='radio'
            id='product'
            value='1'
            name='product'
            checked='checked'
            disabled
            required={required}
          />
          <div
            onClick={() => setShowSearchList(!showSearchList)}
            className='search_box__arrow'>
            <p className='w-100'>
              {dataSchemaValue ? dataSchemaValue : placeholder}
            </p>
            <FontAwesomeIcon
              style={{ width: '10px' }}
              icon={faChevronDown}
              size={'1x'}
            />
          </div>
        </div>
      </div>
      {showSearchList && (
        <ul ref={optionBox} className='select-box-list top-100 w-100'>
          {listGenerator(options)}
        </ul>
      )}
      {required && (
        <span className='input-error'>This field is required.</span>
      )}
    </div>
  );
}

export default PurchasedFromSelectBox;
