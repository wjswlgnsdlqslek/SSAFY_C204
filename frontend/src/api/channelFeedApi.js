import { localAxios as local } from "../util/http-commons";

const address = "/channel/feed";

// try-catch 헬퍼함수
const handleRequest = async (requestFunction) => {
  try {
    const response = await requestFunction();
    if (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 204
    ) {
      return response.data;
    } else if (response?.data?.message) {
      throw new Error(response?.data?.message);
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
};

export const createFeedRequest = async (data) => {
  return await handleRequest(() => local.post(address + "/create", data));
};

export const readOneFeedRequest = async (id) => {
  return await handleRequest(() => local.get(address + id));
};

export const createCommentFeedRequest = async (id, data) => {
  return await handleRequest(() =>
    local.post(`${address}/${id}/comment`, data)
  );
};

export const createLikeFeedRequest = async (id, data) => {
  return await handleRequest(() => local.post(`${address}/${id}/like`, data));
};

export const deleteLikeFeedRequest = async (id) => {
  return await handleRequest(() => local.delete(`${address}/${id}/dislike`));
};

export const searchFeedRequest = async (keyword) => {
  return await handleRequest(() => local.get(`${address}/search?q=${keyword}`));
};
