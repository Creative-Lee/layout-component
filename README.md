<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/source/skype/289/straight-ruler_1f4cf.png"/>
</p>
<h2 align="middle">누구나 사용할 수 있는 bobs-layout</h2>
<br/>

## 간단한 Layout Components Library입니다.

### 설치 방법

`npm i bobs-layout`  
`yarn add bobs-layout`

### Components

- Container
- Flex
- Grid

### import style

`import { Container, Flex, Grid } from 'bobs-layout'`

---

### Container

화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 컴포넌트

| props           | Type                                     | Default | Description                                                                        |
| --------------- | ---------------------------------------- | ------- | ---------------------------------------------------------------------------------- |
| as              | `React.ElementType`                      | -       | Container 컴포넌트의 `HTML Tag`. Tag에 맞춰 `attributes`의 자동 완성이 지원됩니다. |
| maxWidth        | `React.CSSProperties['maxWidth']`        | '100%'  | Content(children)의 최대 너비                                                      |
| minWidth        | `React.CSSProperties['minWidth']`        | -       | Content(children)의 최소 너비                                                      |
| backgroundColor | `React.CSSProperties['backgroundColor']` | -       | Container 컴포넌트의 배경색                                                        |
| overrideStyle   | `React.CSSProperties`                    | -       | 스타일 오버라이드를 위한 props                                                     |

---

### Flex

CSS FlexBox를 활용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트

| props         | Type                                    | Default    | Description                                                                   |
| ------------- | --------------------------------------- | ---------- | ----------------------------------------------------------------------------- |
| as            | `React.ElementType`                     | -          | Flex 컴포넌트의 `HTML Tag`. Tag에 맞춰 `attributes`의 자동 완성이 지원됩니다. |
| direction     | `React.CSSProperties['flexDirection']`  | row        | item의 주 축                                                                  |
| justify       | `React.CSSProperties['justifyContent']` | flex-start | 주 축의 정렬 방법                                                             |
| align         | `React.CSSProperties['alignItems']`     | stretch    | 교차 축의 정렬 방법                                                           |
| gap           | `React.CSSProperties['gap']`            | -          | item 사이의 간격                                                              |
| wrap          | `React.CSSProperties['wrap']`           | nowrap     | Items의 줄 바꿈                                                               |
| overrideStyle | `React.CSSProperties`                   | -          | 스타일 오버라이드를 위한 props                                                |

---

### Grid

CSS Grid를 활용하여 자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트

| props         | Type                                         | Default | Description                                                                   |
| ------------- | -------------------------------------------- | ------- | ----------------------------------------------------------------------------- |
| as            | `React.ElementType`                          | -       | Grid 컴포넌트의 `HTML Tag`. Tag에 맞춰 `attributes`의 자동 완성이 지원됩니다. |
| rows          | `React.CSSProperties['gridTemplateRows']`    | -       | 트랙의 행 배치                                                                |
| columns       | `React.CSSProperties['gridTemplateColumns']` | -       | 트랙의 열 배치                                                                |
| area          | `React.CSSProperties['gridTemplateAreas']`   | -       | 영역 배치                                                                     |
| rowGap        | `React.CSSProperties['rowGap']`              | -       | 행 셀 사이의 간격                                                             |
| columnGap     | `React.CSSProperties['columnGap']`           | -       | 열 셀 사이의 간격                                                             |
| gap           | `React.CSSProperties['gap']`                 | -       | 셀 사이의 간격                                                                |
| overrideStyle | `React.CSSProperties`                        | -       | 스타일 오버라이드를 위한 props                                                |

### Grid.Item

화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 컴포넌트

| props         | Type                              | Default | Description                                                                        |
| ------------- | --------------------------------- | ------- | ---------------------------------------------------------------------------------- |
| as            | `React.ElementType`               | -       | Container 컴포넌트의 `HTML Tag`. Tag에 맞춰 `attributes`의 자동 완성이 지원됩니다. |
| area          | `React.CSSProperties['gridArea']` | -       | `template-areas` 속성에서 정의한 영역 이름에 매칭할 `item 이름`                    |
| overrideStyle | `React.CSSProperties`             | -       | 스타일 오버라이드를 위한 props                                                     |

### type reference

[1. React.CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1623)  
[2. csstype](https://github.com/frenic/csstype/blob/master/index.d.ts)
