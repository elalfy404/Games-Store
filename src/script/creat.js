const firstDiv = document.createElement('div');
const container = document.createElement('div');
const content = document.createElement('div');
const scaler = document.createElement('div');
const btnClose = document.createElement('button');
const icon = document.createElement('i')
const iframe = document.createElement('iframe');

const creatElement = () => {
    // add detailing in firstDiv
    let myAttr = document.createAttribute('class');
    myAttr.value = 'close_btn auto_cursor';
    let tab = document.createAttribute('tobindex')
    tab.value = '1';
    firstDiv.style.overflow = 'hidden auto';
    firstDiv.setAttributeNode(myAttr, tab);
    // add class in container 
    let addClass = document.createAttribute('class');
    addClass.value = 's_ready container';
    container.setAttributeNode(addClass);
    // add class in content 
    let addClassCont = document.createAttribute('class');
    addClassCont.value = 'content cursor z-index';
    content.setAttributeNode(addClassCont);
    // add  icon
    let addIcon = document.createAttribute('class');
    addIcon.value = 'fas fa-times';
    icon.setAttributeNode(addIcon);
    // add class in scaler
    let addClassSca = document.createAttribute('class');
    addClassSca.value = 'iframe_scaler';
    scaler.setAttributeNode(addClassSca);
    // add detailing in btnClose
    let addClassBtn = document.createAttribute('class');
    addClassBtn.value = 'close';
    let addTitleBtn = document.createAttribute('title');
    addTitleBtn.value = "close";
    let addTypeBtn = document.createAttribute('type');
    addTypeBtn.value = 'button';
    btnClose.id = 'close';
    btnClose.setAttributeNode(addClassBtn, addTitleBtn, addTypeBtn);
    // ----
    firstDiv.appendChild(container);
    container.appendChild(content);
    btnClose.appendChild(icon);
    content.appendChild(scaler);
    scaler.appendChild(btnClose);
    document.body.appendChild(firstDiv);
}


const callOfDuty = () => {
    iframe.setAttribute('src', 'https://www.youtube.com/embed/thL8_AxFs6c');
    iframe.setAttribute('width', '560');
    iframe.setAttribute('height', '315');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    scaler.appendChild(iframe);
}

// callOfDuty fun
const showElement = document.getElementById('videos1');
showElement.addEventListener('click', () => {
    document.body.classList.add('show-video');
    callOfDuty();
    creatElement();    
});


const horizon = () => {
    iframe.setAttribute('src', 'https://www.youtube.com/embed/Lq594XmpPBg');
    iframe.setAttribute('width', '560');
    iframe.setAttribute('height', '315');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    scaler.appendChild(iframe);
}
// horizon fun
const showElement2 = document.getElementById('videos2');
showElement2.addEventListener('click', () => {
    document.body.classList.add('show-video');
    horizon();
    creatElement();
    console.log('object')

});

const keno = () => {
    iframe.setAttribute('src', 'https://www.youtube.com/embed/OxzWlIbnp3U');
    iframe.setAttribute('width', '560');
    iframe.setAttribute('height', '315');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    scaler.appendChild(iframe);
}
// keno fun
const showElement3 = document.getElementById('videos3');
showElement3.addEventListener('click', () => {
    document.body.classList.add('show-video');
    keno();
    creatElement();
});

//  ola 
const showElement4 = document.getElementById('videos4');
showElement4.addEventListener('click', () => {
    document.body.classList.add('show-video');
    keno();
    creatElement();
});

const showElement5 = document.getElementById('videos5');
showElement5.addEventListener('click', () => {
    document.body.classList.add('show-video');
    keno();
    creatElement();
});

const showElement6 = document.getElementById('videos6');
showElement6.addEventListener('click', () => {
    document.body.classList.add('show-video');
    keno();
    creatElement();
});


const showElement7 = document.getElementById('videos7');
showElement7.addEventListener('click', () => {
    document.body.classList.add('show-video');
    keno();
    creatElement();
});


const showElement8 = document.getElementById('videos8');
showElement8.addEventListener('click', () => {
    document.body.classList.add('show-video');
    keno();
    creatElement();
});


const showElement9 = document.getElementById('videos9');
showElement9.addEventListener('click', () => {
    document.body.classList.add('show-video');
    keno();
    creatElement();
});


const showElement10 = document.getElementById('videos10');
showElement10.addEventListener('click', () => {
    document.body.classList.add('show-video');
    keno();
    creatElement();
});


//  remove fun
const removeElement = () => {
    document.body.classList.remove('show-video');
    firstDiv.remove(creatElement);
    firstDiv.remove(creatElement2);
    firstDiv.remove(creatElement3);
    firstDiv.remove(creatElement4);
    firstDiv.remove(creatElement5);
    firstDiv.remove(creatElement6);
    firstDiv.remove(creatElement7);
    firstDiv.remove(creatElement8);
    firstDiv.remove(creatElement9);
    firstDiv.remove(creatElement10);
};
btnClose.addEventListener('click', removeElement);
firstDiv.addEventListener('click', removeElement);



// ---------------