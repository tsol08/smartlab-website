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
                "# C 언어 기초: 변수, 배열과 입출력 \n\n\n## 1. 변수 \n\n변수란, 특정 데이터 값을 저장할 메모리 공간을 의미하며 프로그램이 실행되는 동안 데이터를 저장하고 조작할 수 있도록 하는 필수적인 요소이다. 변수는 특정 **데이터 타입**을 가지므로, 저장할 수 있는 데이터의 종류가 제한된다. C 언어에서 변수를 사용하기 위해서는 반드시 선언이 필요하며, 이는 데이터 타입과 변수명을 지정하여 이루어진다.\n ### 변수 선언과 초기화 \n변수를 선언할 때, 먼저 데이터 타입을 명시한 후 변수명을 지정하며, 선언된 변수는 프로그램 내에서 여러 연산에 사용될 수 있다. 선언과 동시에 값을 초기화할 수도 있으며, 이는 변수에 초기값을 할당하여 예기치 않은 값을 가지는 것을 방지하는 역할을 한다.\n```c\nint number;           // 정수형 변수 선언 \nfloat price = 19.99;  // 실수형  \nchar initial = 'A';   // 문자형 변수 선언과 초기화\n변수 선언과 동시에 초기화\n ```\n# C 언어: 주요 데이터 타입, 배열, 입출력 함수\n## 주요 데이터 타입\nC 언어에서 자주 사용되는 주요 데이터 타입은 정수형, 실수형, 문자형 등이다. 각각의 데이터 타입은 다음과 같은 특징을 가진다.\n| 데이터 타입 | 설명               | 예시      |\n|-------------|--------------------|-----------|\n| `int`       | 정수형 데이터 타입 | 42, -7    |\n| `float`     | 실수형 데이터 타입 | 3.14      |\n| `double`    | 더 정밀한 실수형   | 3.14159   |\n| `char`      | 문자형 데이터 타입 | 'A'       |\n\n- **`int`**: 정수형 데이터를 저장하는 데 사용된다. C 언어에서 `int`는 주로 기본 정수형으로, 보통 4바이트(32비트) 크기를 차지한다.\n- **`float`**: 소수점 이하의 값을 저장할 수 있는 실수형 데이터 타입이다. 4바이트 크기를 가지며, 소수점 이하 6~7자리 정도의 정확도를 제공한다.\n- **`double`**: `float`와 비슷하지만, 더 높은 정밀도를 제공하는 실수형 데이터 타입이다. 보통 8바이트 크기를 가지며, 소수점 이하 15자리까지 정확한 값을 저장할 수 있다.\n- **`char`**: 문자를 저장하는 데이터 타입이다. 한 문자만 저장하며, 일반적으로 1바이트 크기를 가진다.\n\n---\n\n## 배열\n\n배열은 같은 데이터 타입의 여러 값을 연속된 메모리 공간에 저장하는 자료 구조이다. 배열을 통해 개별 변수를 다수 선언하는 번거로움을 줄이며, 관련된 데이터를 효율적으로 관리할 수 있다.\n\n### 배열 선언과 초기화\n\n배열을 선언할 때는 데이터 타입과 함께 배열의 크기를 지정하여, 배열에 저장할 수 있는 원소의 개수를 나타낸다.\n\n```c\nint numbers[5];            // 정수형 배열 선언\nchar name[10] = 'Alice';   // 문자형 배열 선언과 초기화 큰따음표로 쓰셔야 합니다\n```\n\n배열은 선언과 동시에 값을 초기화할 수 있으며, 초기화할 때 중괄호 `{ }`로 값을 나열하여 지정한다. 배열의 크기는 선언 시 크기를 명시할 수 있고, 초기화를 제공하지 않으면 각 원소는 기본값으로 초기화된다.\n\n````c\nint scores[3] = {85, 90, 95};  // 정수형 배열 초기화\n````\n\n### 배열 요소 접근 \n\n배열의 각 요소는 인덱스를 통해 접근할 수 있으며, C 언어에서는 인덱스가 0부터 시작한다. 예를 들어, `scores[0]`은 첫 번째 요소, `scores[2]`는 세 번째 요소를 의미한다. 배열의 각 요소는 배열 이름 뒤에 대괄호 `[]`를 사용하여 인덱스를 넣음으로써 접근할 수 있다.\n```c \n\nint scores[3] = {85, 90, 95}; \n\nprintf('First score: %d\n', scores[0]);  // 첫 번째 요소 접근\n\nprintf('Second score: %d\n', scores[1]); // 두 번째 요소 접근  \n\nprintf('Third score: %d\n', scores[2]);  // 세 번째 요소 접근\n```\n\n위 예제에서 `scores[0]`은 배열의 첫 번째 요소인 85를 참조하며, `scores[1]`은 두 번째 요소인 90, `scores[2]`는 세 번째 요소인 95를 참조한다.\n\n### 다차원 배열\n\n다차원 배열은 2차원 이상의 데이터를 저장할 수 있으며, 2차원 배열의 경우 행(row)과 열(column)의 형태로 데이터를 저장한다. C 언어에서 다차원 배열을 선언할 때는 각 차원의 크기를 명시해야 한다. 가장 많이 사용되는 2차원 배열의 예시는 다음과 같다.\n````c\nint matrix[2][3] = {\n    {1, 2, 3},\n    {4, 5, 6}\n}\n````\n위 코드에서 `matrix` 배열은 2개의 행과 3개의 열을 가지는 2차원 배열이다. 각 행은 중괄호 {}로 구분되며, 각 행은 3개의 열을 가진다. 배열에 접근할 때는 행과 열의 인덱스를 차례로 사용한다. 예를 들어, `matrix[0][1]`은 첫 번째 행의 두 번째 열을 참조한다.\n````c\nprintf('Element at [0][1]: %d\n', matrix[0][1]);  // 첫 번째 행, 두 번째 열\nprintf('Element at [1][2]: %d\n', matrix[1][2]);  // 두 번째 행, 세 번째 열\n````\n\n## 입출력 함수\n\nC 언어에서 기본적인 입출력은 `printf`와 `scanf` 함수를 통해 이루어진다.\n\n### `printf` 함수 (출력)\n\n`printf` 함수는 데이터를 화면에 출력할 때 사용되며, 데이터 형식을 지정하기 위해 형식 지정자(format specifier)를 사용한다.\n\n### `printf` 함수 (출력)\n\n\n````c\nint age = 25;\nfloat height = 175.5;\nchar grade = 'A';\n\nprintf('Age: %d\n', age);            // 정수형 출력\nprintf('Height: %.2f\n', height);     // 실수형 출력 (소수점 이하 두 자리)\nprintf('Grade: %c\n', grade);         // 문자형 출력\n````\n\n#### 주요 형식 지정자\n\n| 형식 지정자 | 설명                   |\n|-------------|------------------------|\n| `%d`        | 정수형 (int)           |\n| `%f`        | 실수형 (float)         |\n| `%lf`       | 실수형 (double)        |\n| `%c`        | 문자형 (char)          |\n| `%s`        | 문자열 (char 배열)     |\n\n예를 들어, `printf`에서 `%d`는 정수형 변수를 출력할 때 사용되고, `%f`는 실수형 변수를 출력할 때 사용된다. 또한, `%s`는 문자열을 출력하는 데 사용되며, `%c`는 문자 하나를 출력할 때 사용된다.\n\n```c\nint age = 25;\nfloat height = 175.5;\nchar grade = 'A';\n\nprintf('Age: %d\n', age) height);    // 실수형 출력 (소수점 이하 두 자리)\nprintf('Grade: %c\n', grade);        // 문자형 출력\n```\n\n### `scanf` 함수 (입력)\n\n`scanf` 함수는 사용자로부터 데이터를 입력받아 변수에 저장할 때 사용된다. `scanf`는 데이터 형식에 맞게 입력을 받기 위해 형식 지정자를 사용하며, 입력할 데이터의 주소를 전달해야 하므로 변수 앞에 `&` 연산자를 사용해야 한다.\n```c\nint age;\nfloat height;\n\nprintf('Enter your age: ');\nscanf('%d', &age);  // 정수 입력\n\nprintf('Enter your height: ');\nprintf('Height: %.2f\n',scanf(%f', &height);  // 실수 입력\n\nprintf('You are %d years old and %.1f cm tall.\n', age, height);\n```\n\n---\n\n## 문자열 입출력: `gets`와 `fgets`\n\n### `gets` 함수 (문자열 입력)\n\n`gets` 함수는 공백을 포함한 문자열 전체를 입력받을 수 있다. 그러나, 입력 길이에 대한 제한이 없어서 버퍼 오버플로우 위험이 존재한다. 따라서 최신 C 표준에서는 사용을 권장하지 않는다.\n\n```c\nchar name[50];\nprintf('Enter your name: ');\ngets(name); // 문자열을 입력받아 name 변수에 저장\nprintf('Hello, %s!\n', name);\n```\n\n### `fgets` 함수 (문자열 입력)\n\n`fgets` 함수는 `gets` 함수의 대안으로, **입력할 문자열의 최대 길이**를 지정하여 버퍼 오버플로우를 방지할 수 있다. `fgets` 함수는 입력된 문자열에 줄바꿈(`\n`) 문자를 포함시키므로, 이 문자를 제거하고자 할 경우 별도의 처리가 필요하다.\n```c\nchar name[50];\nprintf('Enter your name: ');\nfgets(name, sizeof(name), stdin); // 최대 49자까지 입력받아 name 변수에 저장\nprintf('Hello, %s', name);\n```\n## 예제 코드\n\n### 예제 1: 사용자 정보 출력 프로그램\n\n사용자의 이름, 나이, 키를 입력받아 출력하는 프로그램 예제이다.\n\n```c\n#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char name[50];\n\n    int age;\n    float height;\n\n    printf('Enter your name: ');\n    fgets(name, sizeof(name), stdin);\n\n    printf('Enter your age: ');\n    scanf('%d', &age);\n\n    printf('Enter your height (in cm): ');\n    scanf('%f', &height);\n\nprintf('Hello %s! You are %d years old and %.1f cm tall.\n', name, age, height);\n    return 0;\n}\n```\n\n### 예제 2: 배열을 사용한 성적 계산 프로그램\n\n학생의 성적을 배열에 입력받고, 평균을 계산하여 출력하는 프로그램 예제이다.\n\n```c\n#include <stdio.h>\n\nint main() {\n    int scores[5];\n    int sum = 0;\n    float average;\n\n    printf('Enter 5 scores:\n');\n\n    for (int i = 0; i < 5; i++) {\n        printf('Score %d: ', i + 1);\n        scanf('%d', &scores[i]);\n        sum += scores[i];\n    }\n\n    average = (float)sum / 5;\n    printf('Average score: %.2f\n', average);\n\n    return 0;\n}\n```\n\n## 자주 발생하는 오류\n\n- **세미콜론(;) 누락**: C 언어에서는 문장이 끝날 때 반드시 세미콜론(`;`)을 붙여야 한다.\n- **주소 연산자(&) 사용 누락**: `scanf` 함수로 정수, 실수, 문자를 입력받을 때는 변수의 주소를 전달해야 하므로 `&` 연산자를 사용해야 한다.",
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
