// api 함수용 파일
const server_address = process.env.REACT_APP_SERVER_ADDRESS;

/**
 * 예시 api 함수 :
 * 서버에서 todo 이벤트 목록을 가져옵니다.
 * @param {String} userId
 *
 * @typedef {Object} TodoEvent
 * @property {string} id - 이벤트의 고유 식별자.
 * @property {string} title - 이벤트의 제목.
 * @property {string} start - 이벤트의 시작 날짜와 시간 (ISO 형식).
 * @property {string} end - 이벤트의 종료 날짜와 시간 (ISO 형식).
 * @property {string} content - 이벤트에 대한 추가 설명 또는 내용.
 * @property {boolean} done - 이벤트가 완료되었는지 여부.
 *
 * @returns {Promise<TodoEvent[]>} - todo 이벤트 목록의 배열을 포함하는 프로미스를 반환합니다.
 * @throws {Error} - 네트워크 요청이 실패할 경우 오류를 발생시킵니다.
 */
export const getTodoList = async (userId) => {
  try {
    const response = await fetch(`${server_address}/적당히 서버 주소`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        userId,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("todo 목록을 가져오는 중 오류 발생:", error);
    throw error;
  }
};
