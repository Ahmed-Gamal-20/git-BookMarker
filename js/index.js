var sName = document.getElementById("sitename");
var sUrl = document.getElementById("siteurl");

var books;

if (localStorage.getItem("Store") == null) {
  books = [];
} else {
  books = JSON.parse(localStorage.getItem("Store"));
  display();
}

function add() {
  if (
    sName.classList.contains("is-valid") &&
    sUrl.classList.contains("is-valid")
  ) {
    var book = {
      siteName: sName.value,
      siteUrl: sUrl.value,
    };
    books.push(book);
    localStorage.setItem("Store", JSON.stringify(books));
    console.log(books);
    clear();
    display();
  } else {
    var sav = document.getElementById("foo");
    sav.classList.remove("d-none");
  }
}

function clear() {
  sName.value = null;
  sUrl.value = null;
  sName.classList.remove("is-valid");
  sName.classList.remove("is-invalid");
  sUrl.classList.remove("is-valid");
  sUrl.classList.remove("is-invalid");
}

function display() {
  var cartona = "";
  for (i = 0; i < books.length; i++) {
    cartona += `<tr>
            <td>${i + 1}</td>
            <td>${books[i].siteName}</td>
            <td class="my-3">
              <button onclick="window.open('${
                books[i].siteUrl
              }', '_blank')" type="button" class="btn btn-success ms-5">
                <i class="fa-solid fa-eye"></i> Visit
              </button>
            </td>
            <td class="my-3">
              <button onclick="del(${i})" type="button" class="btn btn-danger ms-5">
                <i class="fa-solid fa-trash"></i> delete
              </button>
            </td>
          </tr>
`;
  }
  document.getElementById("demo").innerHTML = cartona;
}

function del(deletedindex) {
  books.splice(deletedindex, 1);
  display();
  localStorage.setItem("Store", JSON.stringify(books));
}

function validate(element) {
  var reg = {
    sitename: /^.{3,20}$/,
    siteurl: /^(https:\/\/|www\.).{3,30}$/,
  };

  if (reg[element.id].test(element.value) == true) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.remove("d-none");
  }
}

function hide() {
  var sav = document.getElementById("foo");
  sav.classList.add("d-none");
}
