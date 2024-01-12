'use strict';

const sectionIds = [
    '#home', 
    '#about', 
    '#projects', 
    '#contact'
];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[href="${id}"]`));

const visibleSections = sectionIds.map(() => false);
let activeNavItem = navItems[0];

const options = {
    rootMargin: '-20% 0px 0px 0px',
    threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach(section => observer.observe(section));

function observerCallback(entries) {
    let selectLastOne;
    entries.forEach(entry => {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        visibleSections[index] = entry.isIntersecting;
        selectLastOne = 
            index === sectionIds.length - 1 && 
            entry.isIntersecting && 
            entry.intersectionRatio >= 0.95; // 기술적으로 안전하게 하기 위해 treshold보다 낮은 %로 설정
            // index가 가장 마지막이고, 마지막 entry가 보여지고 있고, 99%이상이 보여지면 true로 변경
    });
    // console.log(visibleSections);
    // console.log('무조건 마지막 섹션 = ', selectLastOne);

    const navIndex = selectLastOne
        ? sectionIds.length -1
        : findFirstIntersection(visibleSections);
    // console.log('어떤 섹션? ', sectionIds[navIndex]);

    selectNavItem(navIndex);
};

function findFirstIntersection(intersections) {
    const index = intersections.indexOf(true);
    return index >= 0 ? index : 0;
};

function selectNavItem(index) {
    const navItem = navItems[index];
    if (!navItem) return;
    activeNavItem.classList.remove('active');
    activeNavItem = navItem;
    activeNavItem.classList.add('active');
};