/**@jsxImportSource @emotion/react */
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { Icon } from '../Icon';
import {
  DropdownBody,
  DropdownContainer,
  DropdownItemContainer,
  DropdownMenu,
  DropdownSelect,
  ItemName,
} from './Select.styles';

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** value */
  value: string;
  /** setValue */
  setValue: Dispatch<SetStateAction<string>>;
  /** options list 입니다. */
  options: { label?: string }[];
  /** default vaule 가 없다면 보여줄  placeholder 입니다. */
  placeholder?: string;
}

const Select = ({ value, placeholder, options, setValue }: SelectProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onActiveToggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const onSelectItem = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      const targetId = e.currentTarget.id;

      if (targetId === 'item_name') {
        setValue(e.currentTarget.innerText);
      } else if (targetId === 'item') {
        setValue(e.currentTarget.innerText);
      }

      setIsActive((prev) => !prev);
    },
    [setValue]
  );

  const RenderValues = {
    true: {
      style: ItemName,
      children: value,
    },
    false: {
      style: DropdownSelect,
      children: placeholder,
    },
  };

  const onChangeRender = useCallback(
    (isValue: boolean) => {
      if (isValue) {
        return RenderValues.true.children;
      } else {
        return RenderValues.false.children;
      }
    },
    [RenderValues.false.children, RenderValues.true.children]
  );

  const isEmpty = (value: string) => {
    if (value) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div css={DropdownContainer}>
      <div css={DropdownBody} onClick={() => onActiveToggle()}>
        <>
          {' '}
          {onChangeRender(!isEmpty(value))}{' '}
          <Icon icon='icArrowBottom' width='16px' height='16px' />{' '}
        </>
      </div>
      <ul css={DropdownMenu(isActive)}>
        {options.map((item, index: number) => (
          <li
            css={DropdownItemContainer}
            id='item'
            key={index}
            onClick={(e) => onSelectItem(e)}
          >
            <p css={ItemName} id='item_name'>
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
