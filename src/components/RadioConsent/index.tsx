import React from "react";

import StyledRadio from "../Radio";

type Attribute = {
  value: string;
  option: string;
};

/**
 *
 * RadioConsent is a component for showing a bunch of yes/no radios predominantly used for notification selections where a unselected state is usefull for analytics.
 *
 * This is always a controlled component that will only change state with the selectedValue prop
 */
export function RadioConsent(props: {
  /** because each radio has its own label this is the consent group label text */
  legend: string;
  /** array of option for radio constent group where option is the option name and value is the option value  */
  attributes: Attribute[];
  /** on change handler callback passed change event */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** set the value of selected option */
  selectedValue?: string;
  /** name of field this is what groups all the options together */
  name: string;
}) {
  const { legend, attributes, onChange, selectedValue = "", name } = props;

  return (
    <fieldset className="component-radio-consent">
      <legend>{legend}</legend>
      <div className="option-wrapper">
        {attributes.map((item: Attribute) => (
          <StyledRadio
            key={item.value}
            checked={selectedValue === item.value}
            onChange={onChange}
            name={name}
            value={item.value}
          >
            {item.option}
          </StyledRadio>
        ))}
      </div>
    </fieldset>
  );
}

export default RadioConsent;
