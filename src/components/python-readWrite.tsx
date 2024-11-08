import styled from "styled-components";
import PythonMarkdownRender from "./python-markdown-render";
import { CodeEditorForCoding } from "./python-code-editor";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  height: 100vh;
`;
export default function PythonReadWrite() {
  return (
    <Wrapper>
      <PythonMarkdownRender></PythonMarkdownRender>
      <CodeEditorForCoding></CodeEditorForCoding>
    </Wrapper>
  );
}
