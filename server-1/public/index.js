const apiUrl = "http://localhost:5001";
const btnGet = document.querySelector("#get");
const btnGetHello = document.querySelector("#get-hello");
const btnPost = document.querySelector("#post");
const inputUpload = document.querySelector("#upload");

btnGet.addEventListener("click", async () => {
  const response = await fetch(apiUrl);
  const data = await response.text();
  alert(data);
});

btnGetHello.addEventListener("click", async () => {
  const response = await fetch(`${apiUrl}/hello`);
  const data = await response.text();
  alert(data);
});

btnPost.addEventListener("click", async () => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ok: true,
    }),
  });

  const data = await response.json();
  alert(JSON.stringify(data, null, 2));
});

inputUpload.addEventListener("change", async (event) => {
  const files = event.target.files;
  const file = files[0];

  // reset input
  event.target.value = null;

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${apiUrl}/upload`, {
    method: "POST",
    body: formData,
  });

  const data = await response.text();
  alert(data);
});
