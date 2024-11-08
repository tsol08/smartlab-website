import { useLocation } from "react-router-dom";
import PythonMarkdownRender from "../components/python-markdown-render";
import styled from "styled-components";
import PythonReadWrite from "../components/python-readWrite";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Python() {
  const readOnly = useLocation().state.readOnly;

  return (
    <>
      {readOnly ? (
        <Wrapper>
          <PythonMarkdownRender></PythonMarkdownRender>
        </Wrapper>
      ) : (
        <PythonReadWrite></PythonReadWrite>
      )}
    </>
  );
}
