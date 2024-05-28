const wrapper = document.querySelector('[datatype="lists-wrap"]');
const btnPrevious = document.querySelector('[data-action="btn-previous"]');
const btnNext = document.querySelector('[data-action="btn-next"]');
const currentPageSpan = document.querySelector('[data-value="current-page"]');
const allPagesSpan = document.querySelector('[data-value="all-pages"]');

const news = [
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news1.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    },
    {
        name: 'news',
        img: '../../img/news2.jpg',
        date: '27.11.2020',
        text: 'International osvitniy forum "nova osvita2020: in the focus of technology maybutnogo"',
    }
]

let isScrollListenerAdded = false;

function numberNormalize(num) {
    return num.toString().padStart(2, '0');
}

let currentPage = 1;
const allPages = Math.ceil(news.length / 12);

currentPageSpan.textContent = numberNormalize(currentPage);
allPagesSpan.textContent = numberNormalize(allPages);

function createItem(data) {
    return `
        <li class="nd_news_item nd_card">
            <img src=${data.img} alt=${data.name} class="nd_news_img">
            <div class="nd_news_card_text_wrap">
                <span class="nd_news_date">${data.date}</span>
                <p class="nd_news_card_text">
                    ${data.text}
                </p>
                <a href="newsDetails.html" class="nd_news_card_link">
                    More info
                    <div class="nd_news_card_link_svg_wrap">
                        <svg width="15" height="11">
                            <use xlink:href="../../img/svg/arrow-right-link.svg#arrow-right-link"></use>
                        </svg>
                    </div>
                </a>
            </div>
        </li>
    `
}

function createArrays(data) {
    const chunkSize = Math.ceil(data.length / 3);
    const pages = [];
    for (let i = 0; i < data.length; i += chunkSize) {
        const page = data.slice(i, i + chunkSize);
        pages.push(page);
    }
    return pages;
}

function createUlArray(data) {
    const ulElement1 = document.createElement('ul');
    ulElement1.classList.add('nd_news_list');
    const ulElement2 = document.createElement('ul');
    ulElement2.classList.add('nd_news_list');
    const ulElement3 = document.createElement('ul');
    ulElement3.classList.add('nd_news_list');

    data[0].forEach(function (news) {
        ulElement1.insertAdjacentHTML('beforeend', createItem(news));
    })
    data[1].forEach(function (news) {
        ulElement2.insertAdjacentHTML('beforeend', createItem(news));
    })
    data[2].forEach(function (news) {
        ulElement3.insertAdjacentHTML('beforeend', createItem(news));
    })

    return [ulElement1, ulElement2, ulElement3]
}

function getNewsForPage(currentPage, itemsPerPage, newsArray) {
    const startIndex = (currentPage - 1) * itemsPerPage;

    const endIndex = startIndex + itemsPerPage;

    return newsArray.slice(startIndex, endIndex);
}

function appendNews(currentPage, itemsPerPage, newsArray) {
    const newsForPage = getNewsForPage(currentPage, itemsPerPage, newsArray);
    const newsArrays = createArrays(newsForPage);
    const ulArray = createUlArray(newsArrays);

    wrapper.innerHTML = '';
    ulArray.forEach(function (ul) {
        wrapper.insertAdjacentHTML('beforeend', ul.outerHTML);
    })
}

appendNews(currentPage, 12, news)
parallax();

btnPrevious.addEventListener('click', function () {
    if (currentPage <= 1) return;

    currentPage -= 1;

    currentPageSpan.textContent = numberNormalize(currentPage);

    if (currentPage < allPages) {
        btnNext.disabled = false;
    }

    if (currentPage <= 1) {
        btnPrevious.disabled = true;
    }

    appendNews(currentPage, 12, news)

    parallax();
});

btnNext.addEventListener('click', function () {
    if (currentPage >= allPages) return;

    currentPage += 1;
    currentPageSpan.textContent = numberNormalize(currentPage);

    if (currentPage >= allPages) {
        btnNext.disabled = true;
    }

    if (currentPage > 0) {
        btnPrevious.disabled = false;
    }

    appendNews(currentPage, 12, news)

    parallax();
});


// Parallax ----------------------------------------------------------------------------------------

function calculatePadding(s) {
    const speed = 0.12;
    const wrapH = wrapper.offsetHeight;
    const padding = (wrapH - s) * speed;
    const maxPadding = 225;

    if (padding >= maxPadding) {
        return `${maxPadding}px`;
    }

    return `${Math.floor(padding)}px`;
}

function addPadding(lists) {
    let s = window.pageYOffset || document.documentElement.scrollTop;
    const padding = calculatePadding(s);

    lists[1].style.paddingTop = padding;
    lists[0].style.paddingBottom = padding;
    lists[2].style.paddingBottom = padding;
}

function removeScrollListening(lists) {
    window.removeEventListener('scroll', function () {
        addPadding(lists);
    });
    isScrollListenerAdded = false;
}

function parallax() {
    const lists = wrapper.querySelectorAll('ul');

    if (isScrollListenerAdded) {
        removeScrollListening(lists);
    }

    addPadding(lists);

    if (window.innerWidth > 1200) {
        window.addEventListener('scroll', function () {
            addPadding(lists);
        });
        isScrollListenerAdded = true;
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth > 1200 && !isScrollListenerAdded) {
            window.addEventListener('scroll', function () {
                addPadding(lists);
            });
            isScrollListenerAdded = true;
        } else if (window.innerWidth <= 1200 && isScrollListenerAdded) {
            removeScrollListening(lists)
        }
    });
}
