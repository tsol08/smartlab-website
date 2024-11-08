import MarkdownPreview from "@uiw/react-markdown-preview";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 15px;
  margin: 0px 5px 20px 10px;

  font-size: 24px;

  height: 100%;

  background-color: #1f1f1f;
  padding: 10px;
`;

const Box = styled.div`
  background-color: #121212;
  padding: 10px;
`;

function cText(fileID: string) {
    if (fileID) {
        const problem: { [key: string]: string } = {
            extrac1:
                "asdfasdfoiojasdjofadsjfasdifjasdoifasojfdoiasdfjasdjoifjoasjdfjasfoiasdjfaosjdfosadfjsadoifjjasdfoiasjfjasdoifsads\n\n아 시발 만들기 존나 힘드네",
        };
        return problem[fileID];
    }
}

export default function CMarkdownRender() {
    const fileID = useParams().fileID;
    const [markdown, setMarkdown] = useState<string>();

    useEffect(() => {
        if (fileID) {
            setMarkdown(cText(fileID));
        }
    });

    return (
        <Wrapper>
            <Box>
                <MarkdownPreview
                    source={markdown}
                    wrapperElement={{ "data-color-mode": "dark" }}
                ></MarkdownPreview>
            </Box>
        </Wrapper>
    );
}
