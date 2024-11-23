const headers = new Headers({
  "User-Agent": "OpenISBNLookup/0.0.1 (itzz@duck.com)",
  accept: "application/json",
});

const baseUrl = "https://openlibrary.org/api";

const resultUrl = (val) => `/books?bibkeys=${val}&format=json&jscmd=data`;

export { headers, baseUrl, resultUrl };
