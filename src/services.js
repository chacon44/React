import { API_URL } from "./constants";
import { ALERT_TEXT } from "./components/Registration/registrationStrings";

export const loginService = async (user) => {
  const response = await fetch(API_URL.LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  const token = data.token;
  return { ...data, token };
};

export async function getCurrentUser(token) {
  try {
    const response = await fetch(API_URL.GET_CURRENT_USER, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getAllCoursesAPI() {
  try {
    const response = await fetch(API_URL.ALL_COURSES);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function deleteCourseAPI(id, token) {
  try {
    const response = await fetch(API_URL.DELETE_COURSE(id), {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function addCourseAPI(data, token) {
  try {
    const response = await fetch(API_URL.ADD_COURSE, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getCourseByIdAPI(courseId) {
  try {
    const response = await fetch(API_URL.GET_COURSE(courseId));

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function updateCourseAPI(courseId, data, token) {
  try {
    const response = await fetch(API_URL.EDIT_COURSE(courseId), {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getAuthorsAPI() {
  try {
    const response = await fetch(API_URL.ALL_AUTHORS);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function addAuthorAPI(data, token) {
  try {
    const response = await fetch(API_URL.ADD_AUTHOR, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function registerUserAPI(user) {
  try {
    const response = await fetch(API_URL.REGISTER, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(ALERT_TEXT.EMAIL_ALREADY_EXISTS);
    }

    return await response.json();
  } catch (error) {
    console.error(ALERT_TEXT.EMAIL_ALREADY_EXISTS);
    throw error;
  }
}
