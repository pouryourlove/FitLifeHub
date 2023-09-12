# :pushpin: FitLifeHub
> FitLifeHub은 운동에 관심 있는 사용자들이 운동 자세, 근육 자극 지점, 그리고 필요한 장비에 대해 자세히 이해할 수 있도록 도와주는 웹페이지입니다.
>https://fitlifehubproject.netlify.app

</br>

## 1. 프로젝트 소개
  - 최근에 헬스에 관심을 가지게 된 헬린이로서, 정확한 운동 자세와 근육 자극 지점에 대한 지식의 부재를 느꼈습니다. 이에 바탕을 두어, 사용자들이 운동 자세와 근육 자극 지점을 자세히 이해하며 필요한 운동 장비에 대한 정보를 얻을 수 있는 웹페이지를 개발하기로 결정했습니다.
  
## 2. 제작 기간 & 참여 인원
- 기간 : 2023년 9월 8일 ~ 2023년 9월 12일 
- 인원 : 개인 프로젝트

</br>

## 3. 사용 기술

  -  프론트엔드 개발: React.js
  -  라우팅: React Router
  -  UI 프레임워크: Material-UI
  -  가로 스크롤 메뉴: react-horizontal-scrolling-menu
  -  로딩 표시기: react-loader-spinner

</br>

## 4. 주요 기능

### 4.1. 운동 검색하기
<img src="">

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

- 사용자들은 이름, 자극 근육, 장비, 또는 부위에 따라 운동을 검색할 수 있습니다. 사용자의 검색 쿼리에 맞게 ExerciseDB API에서 데이터를 가져와서 원하는 운동을 필터링할 수 있습니다. 검색 기능을 처리하는 코드는 Search.jsx 컴포넌트에 있습니다. 




### 4.2. 운동 세부 정보 보기
<img src="">
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
  
### 4.3. 특정 운동 관련 Youtube 비디오 보기
<img src="">

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
  
### 4.4. 유사한 운동 표시
<img src="">

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

