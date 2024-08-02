import { localAxios as local } from "../util/http-commons";

const address = "/channel/feed";

const createFeedRequest = async (data) => {
  try {
    const response = await local(feed + "/create", data);
    if (response.status === 201) {
      return true;
    } else if (response?.data?.message) {
      throw new Error(response?.data?.message);
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
};

const readOneFeedRequest = async (data) => {
  try {
    const response = await local(feed + "/create", data);
    if (response.status === 201) {
      return true;
    } else if (response?.data?.message) {
      throw new Error(response?.data?.message);
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
};

const createCommentFeedRequest = async (data) => {
  try {
    const response = await local(feed + "/create", data);
    if (response.status === 201) {
      return true;
    } else if (response?.data?.message) {
      throw new Error(response?.data?.message);
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
};

const createLikeFeedRequest = async (data) => {
  try {
    const response = await local(feed + "/create", data);
    if (response.status === 201) {
      return true;
    } else if (response?.data?.message) {
      throw new Error(response?.data?.message);
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
};

const deleteLikeFeedRequest = async (data) => {
  try {
    const response = await local(feed + "/create", data);
    if (response.status === 201) {
      return true;
    } else if (response?.data?.message) {
      throw new Error(response?.data?.message);
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
};

const searchFeedRequest = async (data) => {
  try {
    const response = await local(feed + "/create", data);
    if (response.status === 201) {
      return true;
    } else if (response?.data?.message) {
      throw new Error(response?.data?.message);
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
};
