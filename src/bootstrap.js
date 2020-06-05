function getBookData() {
    fetch("https://bookstorebackend-jwg.herokuapp.com/book/get", {method: "GET"})
    .then(response => response.json())
    .then(data => {
       const booksWrapper = document.querySelector(".books-wrapper")
       console.log(booksWrapper)
       data.forEach(book => {
           const bookWrapper = document.createElement("div")
           bookWrapper.className = "book-wrapper"

           const title = document.createElement("h4")
           const author = document.createElement("h4")
           const review = document.createElement("p")

            title.innerHTML = book.title
            author.innerHTML = book.author
            review.innerHTML = book.review

            bookWrapper.appendChild(title)
            bookWrapper.appendChild(author)
            bookWrapper.appendChild(review)

           booksWrapper.appendChild(bookWrapper)
        })
    })
    .catch(error => console.log("Error fetching books: ", error))
}

function activateButton() {
    const button = document.querySelector("#add-book-button")
    button.addEventListener("click", addBook)
}
    

function addBook() {
    const titleInput = document.querySelector("#add-book-title")
    const authorInput = document.querySelector("#add-book-author")
    const reviewBox = document.querySelector("#add-book-review")

    const title = titleInput.value
    const author = authorInput.value
    const review = reviewBox.value

    fetch("https://bookstorebackend-jwg.herokuapp.com/book/get", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            title: title,
            author: author,
            review: review
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error adding book: ", error))
}


window.addEventListener("load", getBookData)
window.addEventListener("load", activateButton)