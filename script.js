
function calculateBMI() {

    // 키와 몸무게 가져오기
    let h = Number(document.querySelector("#height").value);
    let w = Number(document.querySelector("#weight").value);

    // 입력값 확인
    if (h <= 0 || w <= 0 ||
        !Number.isFinite(h) || !Number.isFinite(w)) {

        alert("키와 몸무게를 올바르게 입력해주세요.");
        return;
    }

    // cm를 m로 변환
    h = h / 100;

    // BMI 계산
    let bmi = w / (h * h);

    // BMI 결과 출력
    document.querySelector("#result").textContent =
        "BMI: " + bmi.toFixed(2);

    // 비만 상태 판정
    let state = document.querySelector("#state");

    if (bmi >= 35) {
        state.textContent = "3단계 비만";
    } else if (bmi >= 30) {
        state.textContent = "2단계 비만";
    } else if (bmi >= 25) {
        state.textContent = "1단계 비만";
    } else if (bmi >= 23) {
        state.textContent = "비만전단계";
    } else if (bmi >= 18.5) {
        state.textContent = "정상";
    } else {
        state.textContent = "저체중";
    }

    // BMI 지수 바 나타내기
    document.querySelector("#bmiChart").hidden = false;

    // BMI 위치 계산 (0~40 기준)
    let position = (bmi / 40) * 100;

    // 위치 범위 제한
    position = Math.max(0, Math.min(position, 100));

    // 삼각형 위치 이동
    document.querySelector("#bmiPointer").style.left =
        position + "%";
}
