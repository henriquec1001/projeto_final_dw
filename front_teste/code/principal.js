const cards = document.querySelector('.flex-column')

fetch('data/cards.json')
  .then(res=>res.json())
  .then(json=>showCards(json))

function showCards(data){
    for(const card of data){
        const view =`    <li class="nav-item">
                          <a class="nav-link" href="${card.link}">
                            <span data-feather="${card.icon}"></span>
                            ${card.name}
                          </a>
                        </li>`
      cards.insertAdjacentHTML('beforeend',view)
      feather.replace()
    }
}