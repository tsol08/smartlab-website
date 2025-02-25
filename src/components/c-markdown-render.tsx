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
                "# C 언어 기초\n\n" +
                "## 1. C 언어 소개\n" +
                "C 언어는 1972년 데니스 리치(Dennis Ritchie)에 의해 개발된 프로그래밍 언어로, 운영체제, 시스템 소프트웨어, 게임 개발 등에 널리 사용됩니다.\n\n" +
                "### 특징\n" +
                "- **절차지향적 프로그래밍 언어**: 명령어를 순차적으로 실행하는 구조입니다.\n" +
                "- **빠른 실행 속도**: 저수준 언어와 유사한 성능을 제공하여 속도가 빠릅니다.\n" +
                "- **하드웨어와 가까운 저수준 프로그래밍 가능**: 메모리 관리가 가능하여 시스템 프로그래밍에 적합합니다.\n" +
                "- **이식성이 뛰어남**: 다양한 운영체제에서 실행될 수 있도록 설계되었습니다.\n\n" +
                "---\n\n" +
                "## 2. 기본 문법\n\n" +
                "### 2.1 Hello, World!\n" +
                "C 언어에서 가장 기본적인 프로그램입니다. 화면에 \"Hello, World!\"를 출력합니다.\n\n" +
                "```c\n" +
                "#include <stdio.h>\n\n" +
                "int main() {\n" +
                "    printf(\"Hello, World!\\n\"); // 화면에 출력\n" +
                "    return 0;\n" +
                "}\n" +
                "```\n\n" +
                "### 2.2 기본 데이터 타입\n" +
                "C 언어에서 변수를 선언할 때 사용하는 데이터 타입입니다.\n\n" +
                "| 타입 | 크기(Byte) | 설명 |\n" +
                "|------|----------|------|\n" +
                "| `char` | 1 | 문자 하나를 저장 (예: 'A', 'b') |\n" +
                "| `int` | 4 | 정수를 저장 (예: 10, -3) |\n" +
                "| `float` | 4 | 실수를 저장 (소수점 포함, 예: 3.14) |\n" +
                "| `double` | 8 | 더 정밀한 실수를 저장 |\n\n" +
                "### 2.3 변수와 상수\n" +
                "변수는 데이터를 저장하는 공간이며, 상수는 변경할 수 없는 값을 의미합니다.\n\n" +
                "```c\n" +
                "int age = 20; // 정수형 변수\n" +
                "const double PI = 3.14159; // 변경 불가능한 상수\n" +
                "```\n\n" +
                "### 2.4 입출력\n" +
                "C 언어에서는 `printf`와 `scanf`를 사용하여 데이터를 출력하거나 입력받을 수 있습니다.\n\n" +
                "#### 2.4.1 출력 (`printf` 함수)\n" +
                "`printf`는 다양한 형식으로 데이터를 출력할 수 있습니다.\n\n" +
                "```c\n" +
                "#include <stdio.h>\n\n" +
                "int main() {\n" +
                "    int num = 10;\n" +
                "    float pi = 3.14;\n" +
                "    char letter = 'A';\n" +
                "    printf(\"정수: %d, 실수: %.2f, 문자: %c\\n\", num, pi, letter);\n" +
                "    return 0;\n" +
                "}\n" +
                "```\n\n" +
                "#### `printf`에서 사용하는 변환 지정자\n" +
                "| 변환 지정자 | 설명 |\n" +
                "|------------|------|\n" +
                "| `%d` | 정수를 출력할 때 사용 |\n" +
                "| `%f` | 실수를 출력할 때 사용 |\n" +
                "| `%.2f` | 소수점 이하 2자리까지 실수 출력 |\n" +
                "| `%c` | 문자를 출력할 때 사용 |\n" +
                "| `%s` | 문자열을 출력할 때 사용 |\n" +
                "| `\\n` | 줄 바꿈 (Enter 효과) |\n\n" +
                "#### 2.4.2 입력 (`scanf` 함수)\n" +
                "`scanf`를 사용하면 사용자가 입력한 값을 변수에 저장할 수 있습니다.\n\n" +
                "```c\n" +
                "#include <stdio.h>\n\n" +
                "int main() {\n" +
                "    int num;\n" +
                "    printf(\"정수를 입력하세요: \");\n" +
                "    scanf(\"%d\", &num);\n" +
                "    printf(\"입력한 값: %d\\n\", num);\n" +
                "    return 0;\n" +
                "}\n" +
                "```\n\n" +
                "> 📌 `scanf`에서 변수 앞에 `&`를 붙이는 이유: 입력한 값을 해당 변수의 메모리 주소에 저장하기 위해 사용됩니다.\n\n" +
                "---\n\n" +
                "## 3. 연산자\n\n" +
                "### 3.1 산술 연산자\n" +
                "산술 연산자는 숫자를 계산할 때 사용됩니다.\n\n" +
                "| 연산자 | 설명 | 예제 | 결과 |\n" +
                "|--------|------|------|------|\n" +
                "| `+` | 덧셈 | `5 + 2` | `7` |\n" +
                "| `-` | 뺄셈 | `5 - 2` | `3` |\n" +
                "| `*` | 곱셈 | `5 * 2` | `10` |\n" +
                "| `/` | 나눗셈 | `5 / 2` | `2` (정수 나눗셈) |\n" +
                "| `%` | 나머지 | `5 % 2` | `1` |\n\n" +
                "```c\n" +
                "#include <stdio.h>\n\n" +
                "int main() {\n" +
                "    int a = 5, b = 2;\n" +
                "    printf(\"덧셈: %d\\n\", a + b);\n" +
                "    printf(\"뺄셈: %d\\n\", a - b);\n" +
                "    printf(\"곱셈: %d\\n\", a * b);\n" +
                "    printf(\"나눗셈: %d\\n\", a / b);\n" +
                "    printf(\"나머지: %d\\n\", a % b);\n" +
                "    return 0;\n" +
                "}\n" +
                "```\n\n" +
                "### 3.2 비교 연산자\n" +
                "비교 연산자는 두 값을 비교하여 참(1) 또는 거짓(0)을 반환합니다.\n\n" +
                "| 연산자 | 설명 |\n" +
                "|--------|------|\n" +
                "| `==` | 두 값이 같으면 참 |\n" +
                "| `!=` | 두 값이 다르면 참 |\n" +
                "| `>` | 왼쪽 값이 크면 참 |\n" +
                "| `<` | 오른쪽 값이 크면 참 |\n" +
                "| `>=` | 왼쪽 값이 크거나 같으면 참 |\n" +
                "| `<=` | 오른쪽 값이 크거나 같으면 참 |\n\n" +
                "```c\n" +
                "#include <stdio.h>\n\n" +
                "int main() {\n" +
                "    int a = 5, b = 3;\n" +
                "    printf(\"a == b: %d\\n\", a == b);\n" +
                "    printf(\"a != b: %d\\n\", a != b);\n" +
                "    printf(\"a > b: %d\\n\", a > b);\n" +
                "    printf(\"a < b: %d\\n\", a < b);\n" +
                "    printf(\"a >= b: %d\\n\", a >= b);\n" +
                "    printf(\"a <= b: %d\\n\", a <= b);\n" +
                "    return 0;\n" +
                "}\n" +
                "```\n\n" +
                "### 3.3 논리 연산자\n" +
                "논리 연산자는 여러 조건을 결합하여 판단할 때 사용됩니다.\n\n" +
                "| 연산자 | 설명 |\n" +
                "|--------|------|\n" +
                "| `&&` | AND (모든 조건이 참이면 참) |\n" +
                "| `||` | OR (하나라도 참이면 참) |\n" +
                "| `!` | NOT (논리값을 반전) |\n\n" +
                "```c\n" +
                "#include <stdio.h>\n\n" +
                "int main() {\n" +
                "    int a = 5, b = 3;\n" +
                "    printf(\"(a > 0 && b < 5): %d\\n\", (a > 0 && b < 5));\n" +
                "    printf(\"(a > 0 || b > 5): %d\\n\", (a > 0 || b > 5));\n" +
                "    printf(\"!(a > 0): %d\\n\", !(a > 0));\n" +
                "    return 0;\n" +
                "}\n" +
                "```\n\n" +
                "> 📌 `&&` 연산자는 **모든 조건이 참일 때만** 참을 반환하고, `||` 연산자는 **하나라도 참이면** 참을 반환합니다.\n\n" +
                "---\n\n" +
                "## 4. 배열과 문자열\n\n" +
                "### 4.1 배열\n" +
                "배열(Array)은 동일한 데이터 타입의 여러 개의 값을 저장할 수 있는 자료구조입니다.\n\n" +
                "```c\n" +
                "#include <stdio.h>\n\n" +
                "int main() {\n" +
                "    int numbers[5] = {1, 2, 3, 4, 5}; // 크기가 5인 배열 선언\n" +
                "    printf(\"첫 번째 요소: %d\\n\", numbers[0]); // 배열의 첫 번째 요소 접근\n" +
                "    return 0;\n" +
                "}\n" +
                "```\n\n" +
                "#### 배열 초기화\n" +
                "```c\n" +
                "int arr1[3] = {10, 20, 30};  // 명시적 초기화\n" +
                "int arr2[] = {40, 50, 60};   // 크기를 자동으로 설정\n" +
                "```\n\n" +
                "### 4.2 다차원 배열\n" +
                "2차원 이상의 배열도 사용할 수 있습니다.\n\n" +
                "```c\n" +
                "#include <stdio.h>\n\n" +
                "int main() {\n" +
                "    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}}; // 2x3 행렬\n" +
                "    printf(\"matrix[1][2]: %d\\n\", matrix[1][2]); // 두 번째 행, 세 번째 열 값 출력\n" +
                "    return 0;\n" +
                "}\n" +
                "```\n\n" +
                "### 4.3 문자열\n" +
                "문자열(String)은 `char` 배열을 사용하여 표현합니다.\n\n" +
                "```c\n" +
                "#include <stdio.h>\n\n" +
                "int main() {\n" +
                "    char str[] = \"Hello, C!\"; // 문자열 선언\n" +
                "    printf(\"문자열 출력: %s\\n\", str);\n" +
                "    return 0;\n" +
                "}\n" +
                "```\n\n" +
                "#### 문자열 입력 (`scanf`와 `gets`)\n" +
                "```c\n" +
                "#include <stdio.h>\n\n" +
                "int main() {\n" +
                "    char name[50];\n" +
                "    printf(\"이름을 입력하세요: \");\n" +
                "    scanf(\"%s\", name); // 공백 없는 문자열 입력\n" +
                "    printf(\"입력한 이름: %s\\n\", name);\n" +
                "    return 0;\n" +
                "}\n" +
                "```\n\n" +
                "> 📌 `scanf(\"%s\", name);`은 공백을 포함하지 않는 문자열만 입력받습니다. 공백을 포함하려면 `gets(name);`을 사용할 수 있습니다.\n",
                "problem-levelc1-1":
        "\n## 문제\n\nHello World!를 출력하시오.\n\n### 에제 출력\n\n```\nHello World!\n```",
        "problem-levelc1-2":
        "\n## 문제\n\n두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.\n\n###  입력\n\n```\n첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)\n```\n\n### 출력\n\n```\n첫째 줄에 A+B를 출력한다.\n```\n\n### 예제 입력\n\n```\n 1 2\n```\n\n### 예제 출력\n\n```\n 3\n```",
        "problem-levelc1-3":
        "\n## 문제\n\n상민이는 사이트에 회원가입을 하다가 sangmin라는 아이디가 이미 존재하는 것을 보고 놀랐다.\n상민이는 놀람을 ??!로 표현한다. 상민이가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어졌을 때, 놀람을 표현하는 프로그램을 작성하시오.\n\n###  입력\n\n```\n첫째 줄에 상민이가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어진다.\n아이디는 알파벳 소문자로만 이루어져 있으며, 길이는 50자를 넘지 않는다.\n```\n\n### 출력\n\n```\n첫째 줄에 상민이의 놀람을 출력한다. 놀람은 아이디 뒤에 ??!를 붙여서 나타낸다.\n```\n\n### 예제 입력\n\n```\n sangmin \n```\n\n### 예제 출력\n\n```\n sangmin??! \n```\n\n### 예제 입력2\n\n```\n taewoo \n```\n\n### 예제 출력2\n\n```\n taewoo??! \n```",
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
    }, [fileID]);

    return (
        <Wrapper>
            <Box>
                <MarkdownPreview
                    source={markdown}
                    wrapperElement={{ "data-color-mode": "dark" }}
                />
            </Box>
        </Wrapper>
    );
}