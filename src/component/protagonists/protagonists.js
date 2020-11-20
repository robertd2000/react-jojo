import React from 'react'
import './protagonists.css'

const data = [
    {title: 'Джонатан Джостар', img: 'images/jonathan-joestar.jpg', content: 'первый ДжоДжо, представленный в серии; <br> протагонист из части Призрачная кровь. Джонатан — единственный <br> сын состоятельного предпринимателя по имени Джордж Джостар. <br> Он честный и добрый молодой человек, чья жизнь обернулась <br> трагедией после появления в его жизни приёмного брата, <br> Дио Брандо, в последствии ставшего основным антагонистом <br> серии. Обладал хамоном, силой, которой <br> обучил его Уильям Антонио Цеппели.'},
    {title: 'Джозеф Джостар', img: 'images/joseph-joestar-voice-actor.jpg', content: 'протагонист Боевого стремления, один из главных <br> героев Крестоносцев звёздной пыли и второстепенный персонаж <br> Несокрушимого алмаза. Джозеф - второй ДжоДжо, <br> представленный в серии Невероятные приключения ДжоДжо. <br> Имеет врожденные способности к хамону, которые <br> развивает под руководством мастера Лизы Лизы. <br> Позже приобретает стенд под названием "Hermit Purple". <br> На протяжении всей жизни сталкивается с различными угрозами: <br> вампирами, людьми из колонн и враждебным обладателям стендов.'}, 
    {title: 'Джотаро Куджо', img: 'images/jotaro.jpg', content: 'протагонист «Крестоносцев звёздной пыли». Один из главных героев в <br> «Несокрушимом алмазе», появлялся в «Золотом ветре», и играет <br> ключевую роль в «Каменном океане». Джотаро — третий по счету и самый часто <br> появляющийся ДжоДжо в серии "Невероятные приключения ДжоДжо". <br>Джотаро — наполовину японец. Он хулиган, который жил обычной жизнью, <br> пока не вернулся старый враг семьи Джостар, Дио. Видя, что его мать <br> Холи заболевает из-за Дио, и прислушиваясь к призыву <br> своего деда Джозефа Джостара, Джотаро отправляется в Египет, <br> чтобы спасти свою мать и остановить вампира раз и навсегда. <br>Джотаро — первый ДжоДжо, обладающий стендом,невероятно мощным Star Platinum, <br> а также самый известный персонаж серии.'}, 
    {title: 'Джоске Хигашиката', img: 'images/josuke.png', content: 'протагонист «Несокрушимого алмаза» и четвёртый по счету ДжоДжо <br> из манги Невероятные приключения ДжоДжо. <br>Джоске - первокурсник средней школы, проживающий в городе Морио. <br> Вскоре он встречает Джотаро Куджо, который сообщает ему, что он <br> внебрачный сын Джозефа Джостара.  После того, как его дедушка умер, Джоске берёт <br> на себя задачу защитить свой любимый город от недоброжелательных пользователей стенда. <br> Джоске обладает Crazy Diamond, мощным Стендом, способным починить почти всё.</p>'}, 
    {title: 'Джорно Джованна', img: 'images/giorno.jpg', content: 'Главный герой «Золотого ветра». Сын японки и Дио Брандо, но биологически <br> считается сыном Джонатана, так как Дио на тот момент был носителем тела Джонатана. <br> В раннем детстве его мать повторно вышла замуж за итальянского мужчину, <br> и они переехали в Италию. Мечтает стать главой мафии <br> «Ганг Стар» и присоединяется к команде «Пассионе», будучи самым <br> молодым членом, становился де-факто новым лидером группы. <br> Внешне выглядит как субтильный паренёк в противовес остальным ДжоДжо, <br> которые имели богатырское телосложение. Однако у него есть главное <br> оружие Джостаров — острый ум и способность быстро ориентироваться в ситуации. <br> Хладнокровие, расчётливость, а также коронный вопль «MUDA-DA» Джорно унаследовал <br> от своего отца Дио.'}, 
    {title: 'Джолин Куджо', img: 'images/Cujoh.jpg', content: 'протагонист шестой части «Невероятные приключения ДжоДжо» «Каменный океан». <br> Джолин — единственная женщина "ДжоДжо" на сегодняшний день и дочь Джотаро Куджо.'}, 
    {title: 'Джонни Джостар', img: 'images/johnyj.jpg', content: 'главный протагонист Гонки «Стальной Шар». Джонни является седьмым ДжоДжо <br> в манге Невероятные приключения ДжоДжо.В детстве Джонни был <br> талантливым жокеем, пока однажды у него не оказались парализованы обе ноги. <br> Спустя годы он решает стать участником Гонки «Стальной Шар», <br> чтобы узнать тайну техники Вращения у Джайро Цеппели, надеясь на то, <br> что это поможет ему найти способ снова стоять на ногах. <br> В течение гонки ему удаётся изучить вращение и временно <br> завладев частями Святого Трупа, тем самым став обладателем стенда под названием Tusk.'}, 
    {title: 'Джоске Хигашиката (JJL)', img: 'images/jojosuke.jpg', content: 'главный протагонист ДжоДжолиона и восьмой по счёту ДжоДжо <br> из манги «Невероятные приключения ДжоДжо». <br>Человек, страдающий от ретроградной амнезии и пытающийся вспомнить, <br> кто он такой. Имеет собственный стенд Soft & Wet'}, 


]

const Items = ({data}) => {
    const item = data.map((item, i) => {
        return (
            <div key={i} className={'main_personages_item'}>
                <a href='#'>
                    <div className={'main_personages_inner'}>
                        <img src={item.img} alt=""/>
                        <div className={'main_personages_text'}>
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                        </div>
                    </div>
                </a>
            </div>
        )
    })

    return (
        <div className='main_personages'>
            {item}
        </div>
    )
}

const Protagonists = () => {
    return (
       <div className='container'>
           {<Items data={data}/>}
       </div>
    )
}

export default Protagonists