import { LoadingContainer, LoadingSVGContainer } from "./styles";

export const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingSVGContainer>
        <svg
          version="1.1"
          id="L4"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle fill="#fff" stroke="none" cx="50" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.2"
            />
          </circle>
          <circle fill="#fff" stroke="none" cx="70" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.3"
            />
          </circle>
        </svg>
      </LoadingSVGContainer>
    </LoadingContainer>
  );
};
