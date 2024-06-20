export async function getCoursesAPI() {
  const response = await fetch("http://localhost:4000/courses/all");
  return await response.json();
}

export async function getAuthorsAPI() {
  const response = await fetch("http://localhost:4000/authors/all");
  return await response.json();
}

export async function registerUserAPI(user) {
  const response = await fetch("http://localhost:4000/register", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export async function loginUserAPI(user) {
  const response = await fetch("http://localhost:4000/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
