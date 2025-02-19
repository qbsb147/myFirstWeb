const takeSelect = document.getElementById('selectLayer')
    .querySelector("ul")
    .querySelectorAll("li");

const queryButton = document.getElementById("querySelect").querySelector("button");

let selectedCategory = "all";

takeSelect.forEach(item => {
    item.addEventListener("click", function() {
        const link = this.querySelector("a");
        const linkText = link.innerText;
        const selectedValue = link.dataset.value;

        queryButton.innerHTML = `<span>${linkText}</span>`; 
        selectedCategory = selectedValue;
    });
});

document.getElementById("searchInput").addEventListener("input", function(){
    let inputValue = encodeURIComponent(this.value);
    let searchLink = document.getElementById("searchLink");

    searchLink.href = `https://www.work24.go.kr/cm/f/c/0100/selectUnifySearch.do?topQuerySearchArea=${selectedCategory}&topQueryData=${inputValue}&sortField=rank&startCount=1&listCount=5`
})