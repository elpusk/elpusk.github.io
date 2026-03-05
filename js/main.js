const sectionsData = [
    {
        title: "Devices",
        items: [
            {
                title: "lpu23x",
                text: "Information about the lpu23x device.",
                link: "https://elpusk.github.io/web.lpu23x",
                footer: "Go to lpu23x page",
                isExternal: true
            },
            {
                title: "lpu23x Tools",
                text: "Tools for lpu23x device.",
                link: "https://elpusk.github.io/library.js.coffee/tools_lpu237_full.html",
                footer: "Go to lpu23x tools page",
                isExternal: true
            },
            // lpu23x Tools 2nd 항목 추가
            {
                title: "lpu23x Tools developed using cf2 and t-cf2.",
                text: "WebMapper for lpu23x device.",
                link: "https://elpusk.github.io/library.js.coffee.2nd/app/webmapper/",
                footer: "Go to WebMapper page",
                isExternal: true
            },
            // lpu23x MSR reader fo cf 2nd 항목 추가
            {
                title: "lpu23x Tools developed using cf2 and t-cf2.",
                text: "Reading Magetic card for lpu23x device.",
                link: "https://elpusk.github.io/library.js.coffee.2nd/app/webmsr-read/",
                footer: "Go to lpu23x MSR reading page",
                isExternal: true
            }
        ]
    },
    // Software 섹션 추가
    {
        title: "Software",
        items: [
            {
                title: "coffee framework 2nd(cf2)",
                text: "coffee framework 2nd release.",
                link: "https://github.com/elpusk/publish.framework.coffee.2nd",
                footer: "Go to coffee framework 2nd page",
                isExternal: true
            },
            // frontend engineer 가 coffee framework 2nd 를 사용하기 위한 TypeScript 라이브러리
            {
                title: "typescript library for cf2(t-cf2)",
                text: "TypeScript library for frontend engineers using coffee framework 2nd.",
                link: "https://github.com/elpusk/library.js.coffee.2nd",
                footer: "Go to typescript for cf2 page",
                isExternal: true
            }
        ]
    },
    {
        title: "Test Reports",
        items: [
            {
                title: "MSR Test Report",
                text: "Test report from 2025-07-10.",
                link: "./report/20250710-report-msr.html",
                footer: "View Report",
                isExternal: false
            }
        ]
    },
];
// Work 섹션 삭제

function createCard(item) {
    const target = item.isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
    return `
        <div class="col-md-4 mb-4">
            <a href="${item.link}" class="card-link" ${target}>
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.text}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">${item.footer}</small>
                    </div>
                </div>
            </a>
        </div>
    `;
}

function renderSections() {
    const container = document.getElementById('content-sections');
    let content = '';
    for (const section of sectionsData) {
        content += `
            <div class="mb-5">
                <h2>${section.title}</h2>
                <hr>
                <div class="row">
                    ${section.items.map(createCard).join('')}
                </div>
            </div>
        `;
    }
    container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', renderSections);
