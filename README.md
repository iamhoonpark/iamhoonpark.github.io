1. 프로젝트 구조
    1) css
    2) images
    3) src
    4) index.html
    5) READEME.md

2. head
    1) option defer: html파일이 parsing 되는 동안 js파일을 동시에 다운로드 받아서, html이 parsing이 다 완료된 후에 js파일을 실행
                     해당 스크립트는 html 문서가 parse(분석)가 다 된 다음에 다운로드 받아서 실행됨 -> 성능이 조금 더 좋아짐
    2) option module: 모듈로서 적용하여 독립적인 스코프 생성

3. Intersection Observer
    - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    - 타겟요소가 부모요소나 최고부모요소인 viewport에서 보여지는지 안보여지는지 비동기적으로 변화를 감지하는 API