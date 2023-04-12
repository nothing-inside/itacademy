let last=document.getElementById('last');
last.style.color='red';

let paragrafClass=document.getElementsByClassName('paragraf');
console.log(paragrafClass)
for (let i =0; i < paragrafClass.length; i++) {
paragrafClass[i].style.marginBottom='10px';
paragrafClass[i].style.border='2px solid grey';
paragrafClass[i].style.textIndent='10px';
}

let pTag=document.getElementsByTagName('p');
console.log(pTag)
for (let i =0; i < pTag.length; i++)
pTag[i].style.margin='0px';

let oneClass=document.getElementsByClassName('one');
console.log(oneClass)
for (let i =0; i < oneClass.length; i++)
oneClass[i].style.backgroundColor='pink';

let titleClass=document.getElementsByClassName('title');
console.log(titleClass)
for (let i =0; i < titleClass.length; i++) {
titleClass[i].style.color='blue';
titleClass[i].style.fontWeight='bold';
}

let spanTag=document.getElementsByTagName('span');
console.log(spanTag)
for (let i =0; i < spanTag.length; i++)
spanTag[i].style.fontSize='25px';

let bornClass=document.getElementsByClassName('born');
console.log(bornClass)
for (let i =0; i < bornClass.length; i++) {
bornClass[i].style.color='green';
bornClass[i].style.fontStyle='italic';
}

let championClass=document.getElementsByClassName('champion');
console.log(championClass)
for (let i =0; i < championClass.length; i++)
championClass[i].style.backgroundColor='orange';

let twoClass=document.getElementsByClassName('two');
console.log(twoClass)
for (let i =0; i < twoClass.length; i++)
twoClass[i].style.lineHeight='35px';

let threeClass=document.getElementsByClassName('three');
console.log(threeClass)
for (let i =0; i < threeClass.length; i++)
threeClass[i].style.textAlign='right';