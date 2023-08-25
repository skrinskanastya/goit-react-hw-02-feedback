import { OptionsList, OptionsBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      <OptionsList>
        {options.map(option => {
          return (
            <li key={option}>
              <OptionsBtn onClick={() => onLeaveFeedback(option)}>
                {' '}
                {option}{' '}
              </OptionsBtn>
            </li>
          );
        })}
      </OptionsList>
    </ul>
  );
};
