 const astro={ 
     "people": [
         {"name": "Sergey Prokopyev", "craft": "ISS","country":"Russia","text":"Российский космонавт-испытатель отряда космонавтов «Роскосмоса», 122-й космонавт СССР/России. До поступления в отряд космонавтов служил военным лётчиком, подполковник запаса. Герой Российской Федерации","image":"images/1.jpg"},
          {"name": "Dmitry Petelin", "": "ISS", "country":"Russia","text":"Российский космонавт-испытатель отряда космонавтов «Роскосмоса», 122-й космонавт СССР/России. До поступления в отряд космонавтов служил военным лётчиком, подполковник запаса. Герой Российской Федерации","image":"images/1.jpg"},
           {"name": "Frank Rubio", "craft": "ISS","country":"'murika","text":""},
            {"name": "Nicole Mann", "craft": "ISS","country":"Germany","text":""},
             {"name": "", "craft": "ISS","country":"Switherland","text":""},
              {"name": "Koichi Wakata", "craft": "ISS","country":"England","text":"Российский космонавт-испытатель отряда космонавтов «Роскосмоса», 122-й космонавт СССР/России. До поступления в отряд космонавтов служил военным лётчиком, подполковник запаса. Герой Российской Федерации","image":"images/1.jpg"},
               {"name": "Anna Kikina", "craft": "ISS","country":"Denmarkt","text":""},
                {"name": "Fei Junlong", "craft": "","country":"China","text":""},
                 {"name": "Deng Qingming", "craft": "Shenzhou 15","country":"Gorgia","text":"Российский космонавт-испытатель отряда космонавтов «Роскосмоса», 122-й космонавт СССР/России. До поступления в отряд космонавтов служил военным лётчиком, подполковник запаса. Герой Российской Федерации","image":"images/1.jpg"},
                  {"name": "Zhang Lu", "craft": "Shenzhou 15","country":"","text":""}],
            };



/* ДОБАВЛЕНИЕ БЛОКА ПРИ ПОМОЩИ JS */

  const switcher=document.querySelector('.themeSwitcher');
  const theme=document.querySelector('.theme');

  switcher.addEventListener('click',()=>{
    const change=theme.getAttribute('href')=='style.css'?'style-light.css':'style.css';
    const text=switcher.innerHTML=='Light Theam'?'Dark Theam':'Light Theam';
    switcher.innerHTML=text;
    theme.setAttribute('href',change);
  })



const addBtn=document.querySelector('.addText');

addBtn.addEventListener('click',function(){
    for(let i=0;i<astro.people.length;i++){

        document.querySelector('#astroHeader').innerHTML='Земля в иллюминаторе!'; /* что делаем, когда кнопка нажата? */
        const card=document.createElement('div'); /* создаем элемент div  и сохраняем его в переменную card */
        card.classList.add('card'); /* добавить нашему диву класс card */
        card.innerHTML=`
        <div class="card__img" style="background-image:url(${astro.people[i].image=astro.people[i].image?astro.people[i].image:'images/default.png'})"></div> <!-- фото космонавта -->
        <h1 class="card__name">${astro.people[i].name=astro.people[i].name?astro.people[i].name:'Unknow Cosmonaut'}</h1>
        <div class="card__country">${astro.people[i].country=astro.people[i].country?astro.people[i].country:'Sitizen of World'}</div>
        <div class="card__text">${astro.people[i].text=astro.people[i].text?astro.people[i].text:'Great Cosmonaut'}</div>`;
        document.body.appendChild(card); /* добавить в body мою карточку */ };

    /* добавим надпись */

    const banner=document.createElement('div'); /* создали див */
banner.classList.add('banner'); /* дали класс */
banner.innerHTML='<h3>Внимание! Новый астронавт в космосе!</h3>'; /* добавили текст */
document.body.appendChild(banner); /* добавили на страницу */
});








    /* astro.people.forEach(item => {
    const card=document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="card__img" style="background-image:url(${item.img=item.img?item.img:'images/default.png'})"></div>
    <h1>${item.name}</h1>
    <div class="card__country">${item.country=item.country?item.country:'Человек мира'}</div>
    <div class="card__text">${item.text=item.text?item.text:'Выдающийся космонавт'}</div>
    `
   document.body.appendChild(card);
}); */
