# :pushpin: FitLifeHub
> FitLifeHub은 운동에 관심 있는 사용자들이 운동 자세, 근육 자극 지점, 그리고 필요한 장비에 대해 자세히 이해할 수 있도록 도와주는 웹 애플리케이션입니다.
><https://fitlifehubprojectdeploy.netlify.app/>

</br>

## 1. 프로젝트 소개 & 목표

### 기획 의도
헬스를 처음 시작하면서 정확한 자세와 운동 방법에 대한 정보가 절실했음. 같은 고민을 하는 다른 헬린이들을 위해 운동 정보를 쉽게 찾아볼 수 있는 웹 서비스를 만들고자 함.

### 주요 목표
- 운동 초보자들이 쉽게 이해할 수 있는 운동 가이드 제공
- 운동별 정확한 자세와 타겟 근육 정보 제공
- 관련 운동 영상을 통한 시각적 학습 지원

### 기술적 목표
- React와 Material-UI를 활용한 모던 웹 애플리케이션 구현
- REST API를 활용한 실시간 데이터 처리 경험
- 재사용 가능한 컴포넌트 설계 및 구현
  
## 2. 사용 기술

### 프론트엔드 핵심 기술
| 기술 | 버전 | 사용 목적 |
|------|------|-----------|
| React.js | 18.0.0 | • 컴포넌트 기반 개발로 재사용성 향상<br>• Virtual DOM으로 렌더링 최적화 |
| Material-UI | 5.0.0 | • 모던한 UI/UX 구현<br>• 반응형 디자인 구현 용이 |
| React Router | 6.0.0 | • SPA 라우팅 구현<br>• 동적 페이지 전환 |

### 추가 라이브러리
| 라이브러리 | 용도 | 특징 |
|------------|------|-------|
| react-horizontal-scrolling-menu | 운동 목록 스크롤 | • 직관적인 가로 스크롤 UI<br>• 터치 인터랙션 지원 |
| react-loader-spinner | 로딩 상태 표시 | • 사용자 경험 개선<br>• 다양한 로딩 애니메이션 |

### API
| API | 용도 | 제공 데이터 |
|-----|------|-------------|
| ExerciseDB (RapidAPI) | 운동 정보 | • 운동 상세 정보<br>• 운동 GIF<br>• 타겟 근육 정보 |
| Youtube Search | 운동 영상 | • 관련 운동 영상<br>• 썸네일 및 메타 정보 |

</br>

## 3. 주요 기능

### 3.1. 운동 검색창에 검색하기
<img src="https://github.com/pouryourlove/FitLifeHub/assets/90593162/d11d3187-41d2-4918-9cf2-cb6a14338619">

<details>
<summary>코드 보기</summary>
<div markdown="1">

```
// Handling the search functionality
const handleSearch = async () => {
  if (search) {
    // Fetch exercises based on search query
    const exercisesData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      exerciseOptions
    );
    // Filter exercises based on search query
    const searchedExercises = exercisesData.filter((exercise) => {
       ...
    });
    setSearch("");
    setExercises(searchedExercises);
  }
}; 
    

```
</div>
</details>

- 사용자들은 운동 이름, 타겟 근육, 운동 장비, 또는 신체 부위를 기준으로 운동을 검색할 수 있습니다. ExerciseDB API를 통해 실시간으로 데이터를 필터링하여 사용자의 검색 의도에 맞는 결과를 제공합니다. 이 기능은 Search.jsx 컴포넌트에서 구현되어 있으며, 즉각적인 검색 결과를 제공합니다.

### 3.2. 운동 부위 클릭으로 관련 운동 보기
<img src="https://github.com/pouryourlove/FitLifeHub/assets/90593162/0d6c854b-9775-4627-9f17-34bcb40b6a80">

<details>
<summary>코드 보기</summary>
<div markdown="1">

```
<Stack
  ...
  onClick={() => {
    setBodyPart(item);
    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
  }}
>
    
```
</div>
</details>

- 직관적인 UI를 통해 사용자가 원하는 신체 부위를 클릭하면 해당 부위에 특화된 운동 목록을 확인할 수 있습니다. BodyPart.jsx 컴포넌트에서 Material-UI의 Stack 컴포넌트를 활용하여 각 신체 부위를 카드 형태로 표현하였으며, 사용자의 클릭 이벤트에 반응하여 상태를 업데이트합니다. 선택된 부위에 따라 자동으로 스크롤이 이동하여 관련 운동 목록을 바로 확인할 수 있습니다.

### 3.3. 운동 pagination
<img src="https://github.com/pouryourlove/FitLifeHub/assets/90593162/0255d7fc-8a71-4a35-ae8b-df251ca8d4b4">

<details>
<summary>코드 보기</summary>
<div markdown="1">

```
const [currentPage, setCurrentPage] = useState(1);
const exercisesPerPage = 6;

//index of per page
const indexOfLastExercise = currentPage * exercisesPerPage;
const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
const exercisesArray = Object.values(exercises);
const currentExercises = exercisesArray.slice(
indexOfFirstExercise,
indexOfLastExercise
);

const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 2000, behaviour: "smooth" });
  };

.
.
.

<Pagination
...
onChange={paginate}
/>
```
</div>
</details>

- Material-UI의 Pagination 컴포넌트를 활용하여 효율적인 데이터 탐색 기능을 구현했습니다. 한 페이지당 6개의 운동 정보를 표시하여 사용자가 쉽게 정보를 탐색할 수 있도록 하였으며, 페이지 전환 시 자동 스크롤 기능을 통해 사용자 경험을 개선했습니다.

**기술적 구현:**
- currentPage와 exercisesPerPage 상태를 통한 페이지네이션 관리
- Material-UI Pagination 컴포넌트의 onChange 이벤트를 활용한 페이지 전환
- 스무스 스크롤 기능으로 UX 개선

### 3.4. 운동 세부 정보 보기
<img src="https://github.com/pouryourlove/FitLifeHub/assets/90593162/ade6d455-b535-45fd-ac9b-6ded2ede3068">
<details>
<summary>코드 보기</summary>
<div markdown="1">

```

// 운동 세부 정보 가져 오기
const fetchExercisesData = async () => {
const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

const exerciseDetailData = await fetchData(
${exerciseDbUrl}/exercises/exercise/${id},
exerciseOptions
);
setExerciseDetail(exerciseDetailData);

...
};

```
</div>
</details>

- 사용자가 운동 카드를 클릭하면 그 특정 운동에 대한 자세한 정보를 볼 수 있습니다. 운동 세부 정보에는 운동 이름, 대상 근육, 부위 및 필요한 장비가 포함됩니다. ExerciseDetail.jsx 컴포넌트가 이 정보를 가져오고 표시합니다.
  
### 3.5. 특정 운동 관련 Youtube 비디오 보기
<img src="https://github.com/pouryourlove/FitLifeHub/assets/90593162/50aba1cd-6791-4810-8aed-5cf44cc69559">

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
 // Rendering video thumbnails
<img src={item.video.thumbnails[0].url} alt={item.video.title} />

```
</div>
</details>

- 특정 운동과 관련된 유투브 비디오를 시청할 수 있습니다. 비디오 썸네일과 제목을 웹페이지에 표기해 클릭하면 유투브 url로 새 페이지와 함께 열립니다. ExerciseVideos.jsx 컴포넌트가 이 역할을 합니다. 
  
### 3.6. 유사한 운동 표시
<img src="https://github.com/pouryourlove/FitLifeHub/assets/90593162/c0146e60-f006-492c-982c-8c8cded247cb">

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
 // Rendering similar exercises
<Scrollbar data={targetMuscleExercises} />

```
</div>
</details>

- 사용자는 대상 근육이나 장비와 관련된 유사한 운동들의 목록을 볼 수 있습니다. SimilarExercises.jsx 컴포넌트가 이 역할을 하고 Scrollbar.jsx 컴포넌트를 재활용해 목록을 표시합니다. Scrollbar.jsx는 재사용 되어 웹사이트의 일관성을 제공합니다.
  

### 4. 문제 해결
🔍 "react-horizontal-scrolling-menu" 라이브러리 사용 중 문제 발생

- 문제 상황:
"react-horizontal-scrolling-menu" 라이브러리를 사용하여 스크롤 메뉴를 구현하려고 했으나, 제대로 작동하지 않았습니다.

- 해결방법:
구글링을 통해 알아낸 해결 방법은 "react-horizontal-scrolling-menu" 라이브러리의 스타일 시트를 다음과 같이 추가하는 것이었습니다.
```
import "react-horizontal-scrolling-menu/dist/styles.css";
```
하지만 이 방법을 사용하면 기본 설정으로 못생긴 스크롤바가 표시되었습니다. 이 문제를 해결하기 위해 다음과 같이 커스텀 CSS를 추가했습니다.
```
.react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
  display: none;
}
.react-horizontal-scrolling-menu--scroll-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
```
이 코드를 추가 후 페이지에 못생긴 스크롤바가 더 이상 나타나지 않았습니다.
 
🔍 Search.jsx 컴포넌트안에 input과 button 배치 문제

- 문제 상황:
처음에는 Search.jsx 컴포넌트에서 검색 입력란(input)과 버튼을 옆으로 배치하기 위해 CSS의 display: absolute 속성을 사용하였습니다. 그러나 이렇게 하니, 화면에서 가운데가 아닌 오른쪽으로 치우친 위치에 요소들이 표시되는 문제가 발생하였습니다.

- 원인 분석:
display: absolute는 요소를 일반적인 문서 흐름에서 벗어나게 하고, 가장 가까운 위치 지정된 조상(기본값은 body)에 대해 상대적으로 배치합니다. 따라서, 화면 크기나 다른 요소의 위치 변화에 따라 예상하지 못한 결과를 초래할 수 있습니다.

- 해결 방법:
input에 display: relative를 설정하고, 버튼을 display: absolute로 설정하여 레이아웃을 조정하는 대신, flex를 사용하여 가운데에 정렬되도록 변경했습니다. 아래는 수정된 코드입니다:

```
<Box display="flex">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "1100px", xs: "500px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
```

위의 수정된 코드에서, <Box> 컴포넌트의 display 속성을 flex로 설정하여 자식 요소들(여기서는 <TextField>와 <Button>)이 가로 방향으로 배치되고, 자동으로 중앙 정렬되도록 하였습니다. 
이 변경 후, 화면에서 요소들이 치우쳐 보이는 문제가 해결되었습니다.

🔍 검색창에서 운동 검색 시 undefined가 결과로 나옴

- 문제 상황:
검색창에서 운동을 검색할 때 'undefined'라는 결과가 나타나는 문제가 발생했습니다.

- 원인 분석:
이 문제의 원인을 파악하기 위해, 먼저 데이터를 가져오는 fetchData 함수에서 데이터가 제대로 전달되고 있는지 디버깅을 진행하였습니다. 그 결과, 검색 기능을 수행하는 코드 부분에서 문제가 있음을 확인하였습니다.
기존 코드에서 다음과 같은 부분에서 문제가 발생하였습니다:

```
const searchedExercises = exercisesData.filter((exercise) => {
  // Exercise data filtering code
});
```

위의 코드 부분은 exercisesData 배열의 각 요소(운동 정보)에 대해 특정 조건에 맞는 요소들만 선택하여 새로운 배열(searchedExercises)를 만듭니다. 여기서 조건은 운동 정보의 특정 필드(name, target, equipment, bodyPart)에 검색어가 포함되어 있는지를 확인하는 것입니다.
그런데 이 때, 해당 필드들이 문자열인지 확인하지 않고 바로 toLowerCase() 메서드를 호출하여 소문자로 변환하려고 했습니다. 만약 해당 필드값이 문자열이 아니라면(undefined나 null 등), 이 메서드 호출은 에러를 발생시킵니다.
이 코드 부분에서 exercisesData 데이터가 제대로 가져와졌지만, filter 함수를 통해 검색어를 포함한 결과를 출력할 때 문제가 발생했습니다. 원인은 exercise.name, exercise.target, exercise.equipment, exercise.bodyPart 등의 필드들이 문자열인지 확인하지 않고 바로 toLowerCase() 메서드를 호출하여 발생한 문제였습니다. 

- 해결 방법:
각 필드값이 문자열인 경우에만 toLowerCase() 메서드를 호출하도록 코드를 수정하여 이 문제를 해결하였습니다:

```
      const searchedExercises = exercisesData.filter((exercise) => {
        // Ensure exercise.name is a string before calling toLowerCase()
        const exerciseName =
          typeof exercise.name === "string" ? exercise.name.toLowerCase() : "";
        const target =
          typeof exercise.target === "string"
            ? exercise.target.toLowerCase()
            : "";
        const equipment =
          typeof exercise.equipment === "string"
            ? exercise.equipment.toLowerCase()
            : "";
        const bodyPart =
          typeof exercise.bodyPart === "string"
            ? exercise.bodyPart.toLowerCase()
            : "";

        return (
          exerciseName.includes(search) ||
          target.includes(search) ||
          equipment.includes(search) ||
          bodyPart.includes(search)
        );
      });
```
위의 수정된 코드에서, 우리는 각 필드값이 문자열인지 확인하고, 문자열인 경우에만 toLowerCase() 메서드를 호출하여 소문자로 변환합니다. 그렇지 않은 경우(즉, 필드값이 undefined나 null 등일 경우), 빈 문자열("")을 사용합니다. 이렇게 수정한 후, 검색 기능은 정상적으로 작동하였고 'undefined' 문제는 더 이상 발생하지 않았습니다.


🔍 "Uncaught TypeError: exercises.slice is not a function" 에러 해결

- 문제 상황:
'Exercises' 컴포넌트에서 특정 범위의 운동을 선택하여 출력하려고 할 때 다음과 같은 코드를 사용하였습니다:

```
const currentExercises = exercises.slice(
  indexOfFirstExercise,
  indexOfLastExercise
);
```

하지만 이 코드를 실행할 때마다 "Uncaught TypeError: exercises.slice is not a function"이라는 에러가 발생하였습니다.

- 원인 분석:
JavaScript에서 slice 메소드는 배열에 대해서만 사용할 수 있습니다. 따라서 exercises 가 배열이 아닌 경우 위와 같은 에러 메시지가 나타납니다.
제 코드의 경우 exercises는 객체(object)였기 때문에 slice 함수를 호출할 수 없었습니다.구글링을 해보고 디버깅을 해 원인을 찾게 되었습니다.

- 해결 방법:
받아온 데이터(exercises)가 객체이기 때문에, 데이터를 배열로 변환하여야 합니다. JavaScript에서 제공하는 Object.values() 메소드를 사용하여 객체의 모든 속성 값을 포함하는 배열을 생성할 수 있습니다:

```
const exercisesArray = Object.values(exercises);

const currentExercises = exercisesArray.slice(
  indexOfFirstExercise,
  indexOfLastExercise
);
```

🔍 Detail 컴포넌트에서 이미지 로딩 문제

- 문제 상황:
'Detail' 컴포넌트에서 아래와 같이 이미지를 로딩하려고 했습니다:
```
<img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
```
그러나, 예상과 달리 이미지가 제대로 불러와지지 않았습니다.

- 원인 분석:
문제를 파악하기 위해 먼저 ExerciseDetail 컴포넌트로 디버깅을 진행하여 데이터가 올바르게 전달되고 있는지 확인하였습니다. 그 결과, 에러 메시지 "{message: 'Endpoint '/exercises/0001' does not exist'}"가 나타났습니다. 이 메시지는 요청한 API 엔드포인트가 존재하지 않음을 의미합니다.

- 해결 방법:
API 문서를 다시 확인한 결과, 정확한 URL 경로를 사용해야 함을 알 수 있었습니다. 따라서 아래와 같이 코드를 수정하여 문제를 해결하였습니다:

```
 const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
```
위의 수정된 코드에서는 URL 경로에 "exercise" 대신 "exercises"라는 단어를 사용하여 올바른 API 엔드포인트에 데이터 요청을 보냈습니다. 이렇게 수정한 후 데이터가 올바르게 받아와져 이미지 로딩 문제도 해결되었습니다. API 요청 전 URL 경로 및 엔드포인트를 반드시 꼼꼼하게 확인해야겠다는 생각이 들었습니다.

🔍 ExerciseDetails 컴포넌트에서 Scrollbar 컴포넌트를 재사용 오류

- 문제 상황:
ExerciseDetails 컴포넌트에서 Scrollbar 컴포넌트를 재사용하려고 하였으나, 화면에서 스크롤 기능이 제대로 작동하지 않았습니다. 화면 아래에 default 스크롤바가 생기고 scrollbar 컴포넌트에 작성해둔 오른쪽 왼쪽 화살표를 클릭해도 화면이 다음으로 넘어가지 않았습니다.

- 원인 분석:
Scrollbar 컴포넌트 자체에 문제가 있는지 확인하기 위해 다른 부분에서의 재사용 상황을 살펴보았으나 이 컴포넌트 자체에는 아무런 문제가 없었습니다. 따라서 ExerciseDetails 자체에서 일어나는 오류라고 판단하였으며, 특정 CSS 설정 때문일 가능성을 생각하여 분석하였습니다.

- 해결 방법:
Scroll의 커스텀 CSS 파일 내부를 읽어본 결과 scroll container의 넓이와 높이를 따로 설정하지 않았다는 사실을 알게 되었습니다. 그래서 아래와 같은 코드를 추가하였습니다:

```
.react-horizontal-scrolling-menu--scroll-container {
  width: 1600px;
  height: 600px;
}
```
위와 같은 변경을 통해 Scrollbar 컴포넌트가 ExerciseDetails 컴포넌트에서 정상적으로 작동하는 것을 확인할 수 있었습니다. 

🔍 운동 검색 후 카테고리 버튼이 작동안하는 오류
[블로그 포스팅](https://velog.io/@pouryourlove/%EC%9A%B4%EB%8F%99-%EA%B2%80%EC%83%89-%ED%9B%84-%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC-%EB%B2%84%ED%8A%BC-%EC%9E%91%EB%8F%99%EC%95%88%ED%95%98%EB%8A%94-%EC%98%A4%EB%A5%98#%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC-%EC%B4%88%EA%B8%B0%ED%99%94)

🔍 모든 운동이 10개만 표시되는 오류
[블로그 포스팅](https://velog.io/@pouryourlove/모든-운동이-10개만-표시되는-오류)

## 5. 성능 최적화
- 이미지 레이지 로딩을 구현하여 초기 로딩 속도를 개선했습니다.
- 페이지네이션을 구현하여 대량의 데이터를 효율적으로 관리하고 렌더링했습니다.

## 6. 회고 / 느낀점

처음으로 rapid API와 material UI를 사용한 이번 프로젝트는 매우 유익한 경험이었습니다. 평소에 들어보기만 하던 기술들을 실제로 적용해보며 새로운 지식을 습득할 수 있었습니다. 더욱이 이번 프로젝트는 제가 개인적으로 관심 있는 헬스 주제였기 때문에, 열정적으로 참여할 수 있었습니다.

API를 활용하여 실제 데이터를 웹 페이지에 반영하는 과정은 어려움도 겪었지만, 그 결과물을 보며 큰 만족감을 느꼈습니다. API 데이터가 처음에는 제대로 fetch되지 않아 많은 오류를 겪고 시간도 많이 소요되었습니다. 하지만 스스로 디버깅하면서 문제를 해결하는 과정에서, 오류 해결 방법과 디버깅 기술에 대해 배울 수 있었습니다.

이러한 경험은 앞으로 프로젝트에서 오류가 발생했을 때 차근차근 디버깅하여 문제를 해결하는 능력을 기르는 계기가 되었다고 생각합니다.

## 7.컴포넌트 도식화

```
Home
 ├─ Hero
 ├─ Search
 └─ Exercises
      ├─ ExerciseCard
      ├─ BodyPart
      ├─ Scrollbar
      └─ Loader (for displaying loading state)
          └─ (conditionally displayed based on data fetching status)

ExerciseDetail
 ├─ Detail
 ├─ ExerciseVideos
 └─ SimilarExercises
      ├─ Scrollbar
          └─ExerciseCard
```
