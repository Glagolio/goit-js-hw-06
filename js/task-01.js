const listItems = document.querySelectorAll(".item");
console.log("Number of categories:", listItems.length);

// ============================================================================
// ВАРІАНТ ВИРІШЕННЯ ЗАДАЧИ ЧЕРЕЗ ЦИКЛ(Якщо кількість категорій буде дінамічна)
// ============================================================================

for (let i = 0; i < listItems.length; i += 1) {
    console.log("Category:", listItems[i].querySelector('h2').textContent);
    console.log("Elements:", listItems[i].querySelectorAll("ul > li").length)
}




// ============================================================================
// ВАРІАНТ ВИРІШЕННЯ ЗАДАЧИ З ВІДОМОЮ КІЛЬКІСТЮ КАТЕГОРІЙ
// ============================================================================


// const nameOfCategories = document.querySelectorAll(".item > h2");
// const firstElementOfItems = listItems[0].querySelectorAll("ul > li");
// const secondElementOfItems = listItems[1].querySelectorAll ("ul > li");
// const thirdElementOfItems = listItems[2].querySelectorAll ("ul > li");


// console.log("Category:", nameOfCategories[0].textContent);
// console.log("Elements:", firstElementOfItems.length)

// console.log("Category:", nameOfCategories[1].textContent);
// console.log("Elements:", secondElementOfItems.length)

// console.log("Category:", nameOfCategories[2].textContent);
// console.log("Elements:", thirdElementOfItems.length)

